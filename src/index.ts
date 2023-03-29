import * as path from 'path';
import * as fs from 'fs';

const args: string[] = process.argv;

const file: string = fs.readFileSync(`${args[2]}`, 'utf8');

const arr: string[] = file.trim().split('\n');

function insertCustomText(arr: string[], textToAdd: string) {
  let indexWeNeed;
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e === '}') {
      console.log('found it', e, i);
      indexWeNeed = i;
      arr.splice(indexWeNeed, 0, textToAdd);
      const newArr = arr.join('\n')
      fs.writeFileSync('./test-final-write.txt', newArr)
      console.log(arr);
      return indexWeNeed;
    }
  }

  //we need to insert above line 29
  // console.log(arr[29], textToAdd);
  return 'TODO';
}
insertCustomText(arr, '    text-color: @normal-foreground;');

// console.log(file.trim())
