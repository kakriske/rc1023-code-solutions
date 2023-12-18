import { readFile, writeFile } from 'node:fs/promises';

const sourceFile = process.argv[2];
const copiedFile = process.argv[3];

try {
  const content = await readFile(sourceFile, 'utf8');
  await writeFile(copiedFile, content, 'utf8');
  console.log('file copied');
} catch (error) {
  console.error('error copying file:', error);
}
