import { readFile } from 'node:fs/promises';

async function readAnyFile(): Promise<void> {
  try {
    const fileName = process.argv[2];
    const contents = await readFile(fileName, 'utf-8');
    console.log(contents);
  } catch (error) {
    console.log(error);
  }
}
readAnyFile();
