import { readFile } from 'node:fs/promises';

async function catFiles(filePaths: string[]): Promise<void> {
  try {
    for (let i = 0; i < filePaths.length; i++) {
      const filePath = filePaths[i];
      const fileContent = await readFile(filePath, 'utf-8');
      console.log(fileContent);
    }
  } catch (error) {
    console.error(error);
  }
}

const fileArgs = process.argv.slice(2);

catFiles(fileArgs);
