

import { useState } from "react";
import { withAxios } from "react-axios";
import { BrowserRouter, Route ,Routes} from 'react-router-dom'; // in V6 npm dom uses routes and not switch
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Results from './Pages/Results';

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await  withAxios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
   


  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2017/08/31/13/46/blue-color-2700805__340.jpg)"}}>
      
       <Header/>
         <Routes>
         <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
         <Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>} />
         <Route path='/results' element={<Results name={name} score={score}/>} />

         </Routes>
       
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
