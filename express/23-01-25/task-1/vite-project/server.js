import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 3165;

app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from backend",
    timestamp: new Date(),
  });
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
