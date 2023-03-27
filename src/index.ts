import * as path from 'path';
import * as fs from 'fs';

const args = process.argv[2]

const file = fs.readFileSync(`${args}/scratch.txt`, 'utf8');

console.log(file, args)
