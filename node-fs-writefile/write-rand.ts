import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random().toString();

try {
  await writeFile('random.txt', randomNumber, 'utf8');
} catch (error) {
  console.error(error);
}
