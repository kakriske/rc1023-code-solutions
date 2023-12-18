import { writeFile } from 'node:fs/promises';

const message = process.argv[2];

try {
  await writeFile('note.txt', message, 'utf8');
  console.log('Note written to file');
} catch (error) {
  console.error('error writing note to file:', error);
}
