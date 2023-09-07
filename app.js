import express from 'express';
import route from './routes/jokes.js';
const app = express();

app.use(express.json());
app.use('/',route);

const port = 3000; 
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});