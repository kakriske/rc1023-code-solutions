import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, arg1] = process.argv;
type Data = {
  nextId: number;
  notes: Record<string, string>;
};

async function getData(): Promise<Data> {
  const file = await readFile('data.json', 'utf8');
  return JSON.parse(file);
}

async function readNotes(): Promise<void> {
  const data = await getData();
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

async function addNote(note: string): Promise<void> {
  if (!note) {
    console.error('Notes are required');
    return;
  }
  const data = await getData();
  data.notes[data.nextId] = note;
  data.nextId++;
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function deleteNote(id: string): Promise<void> {
  const data = await getData();
  if (data.notes[id] === undefined) {
    console.log('Invalid ID');
    return;
  }
  delete data.notes[id];
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function updateNote(id: string): Promise<void> {
  const data = await getData();

  if (data.notes[id] === undefined) {
    console.log('Invalid Id');
    return;
  }
  const newContent = process.argv.slice(4).join(' ');
  data.notes[id] = newContent;
  await writeFile('data.json', JSON.stringify(data, null, 2));
  console.log(`Note at Id ${id} updated`);
}

try {
  switch (operation) {
    case 'read':
      await readNotes();
      break;
    case 'add':
      await addNote(arg1);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;
    case 'update':
      await updateNote(arg1);
      break;
    default:
      console.log('Provide a valid operator to enter');
  }
} catch (err) {
  console.log(err);
}
