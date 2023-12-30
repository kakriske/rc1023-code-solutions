import express from 'express';

const app = express();

let nextId = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = req.body;

  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).send('incomplere response');
    return;
  }
  const id: number = nextId++;
  grades[id] = {
    id,
    name: newGrade.name,
    course: newGrade.course,
    score: newGrade.score,
  };
  res.status(201).json(grades[id]);
});

app.listen(8080, () => {
  console.log('This server is running on port 8080');
});
