import { Button,MenuItem, TextField } from '@mui/material'
import React from 'react'
import Categories from '../Data/Categories'
import "./Home.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../Components/ErrorMessage';

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
  
    const history = useNavigate(); //New Version of react router dom uses naviagate and not useHistory
  
    const handleSubmit = () => {
      if (!category || !difficulty || !name) {
        setError(true);
        return;
      } else {
        setError(false);
        fetchQuestions(category, difficulty);
        history("/quiz");
      }
    };
  
    return (
      <div className="content">
        <div className="settings">
          <span style={{ fontSize: 30 }}>Quiz Settings</span>
          <div className="settings__select">
            {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Start Quiz
            </Button>
          </div>
        </div>
        <img src="https://retirementrescueradio.com/wp-content/uploads/sites/10/2021/12/google-quiz.jpg" className="banner" alt="quiz app" />
      </div>
    );
  };
  
  export default Home;