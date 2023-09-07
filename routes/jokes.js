import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const API_URL = 'https://www.blagues-api.fr/api';
const config = {
    headers: { Authorization: `Bearer ${process.env.TOKEN}` }
};

let rigolol = "";

router.get('/joke', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/random`,config);
    rigolol = response.data.answer;
    res.send(response.data.joke);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la blague.' });
  }
});

router.get('/answer', (req, res) => {
    
    const answer = "Réponse : "+ rigolol; 
  
    res.send(answer);
});

export default router;
