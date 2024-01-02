import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

interface Note {
  id: number;
  content: string;
}

interface Data {
  nextId: number;
  notes: Record<string, Note>;
}

async function readData(): Promise<Data> {
  const data = await readFile('data.json', 'utf-8');
  return JSON.parse(data);
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const notes: Note[] = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();

    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with ${id}` });
      return;
    }
    res.json(data.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.post('/api/notes', async (req, res) => {
  const content = req.body.content;
  if (content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  const data = await readData();
  const note: Note = {
    id: data.nextId,
    content,
  };
  data.notes[data.nextId] = note;
  // console.log(data);
  data.nextId++;
  console.log(data);
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
  res.status(201).json(note);
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `Cannot find note with ${id}` });
    }

    delete data.notes[id];
    await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error has occured' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'Id must be a positive integer' });
    }
    const content = req.body.content;
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    const note: Note = {
      id,
      content,
    };
    data.notes[id] = note;
    await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
