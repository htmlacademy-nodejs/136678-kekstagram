'use strict';

const readline = require(`readline`);
const fs = require(`fs`);

const generateEntity = require(`./generate-entity`);

const generateData = (count) => {
  const arr = new Array(count);
  for (let i = 0; i < count; i++) {
    arr[i] = generateEntity();
  }
  return arr;
};

class Readline {
  static findFile(path) {
    try {
      fs.statSync(path);
    } catch (err) {
      if (err.code === `ENOENT`) {
        return false;
      }
    }
    return true;
  }

  static saveFile(path, data) {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log(`Файл успешно создан.`);
    process.exit(0);

  }

  static rewriteFile(path, data) {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log(`Файл успешно изменен.`);
    process.exit(0);
  }

  constructor(params) {
    this.data = null;
    this.rl = readline.createInterface(Object.assign({
      input: process.stdin,
      output: process.stdout,
    }), params);
    this.rl
      .on(`close`, () => {
        console.log(`Окей... Но я знаю, что ты вернешься! =)`);
        process.exit(0);
      })
      .on(`error`, (err) => {
        console.log(err);
        process.exit(1);
      });
  }

  greeting() {
    this.rl.question(`Привет! Хочешь создать данные? (yes/no) `, (answer) => {
      answer = answer.toLowerCase();
      switch (answer) {
        case `yes`:
        case `y`:
          this.getValue();
          break;
        case `no`:
        case `n`:
          this.rl.close();
          break;
        default:
          this.greeting();
      }
    });
  }

  getValue() {
    this.rl.question(`Сколько элементов сгенерировать? Введите положительное число. `, (answer) => {
      answer = parseInt(answer, 10);
      if (answer > 0) {
        this.data = generateData(answer);
        this.getPath();
      } else {
        console.log(`Значение должно быть положительным числом!`);
        this.getValue();
      }
    });
  }

  getPath() {
    this.rl.question(`Куда сохранить файл? `, (path) => {
      const fileIsFound = Readline.findFile(path);
      if (fileIsFound) {
        this.replaceFile(path);
      } else {
        Readline.saveFile(path, this.data);
        this.rl.close();
      }
    });
  }

  replaceFile(path) {
    this.rl.question(`Такой файл уже существует, перезаписать? (yes/no) `, (answer) => {
      answer = answer.toLowerCase();
      switch (answer) {
        case `yes`:
        case `y`:
          Readline.rewriteFile(path, this.data);
          this.rl.close();
          break;
        case `no`:
        case `n`:
          this.getPath();
          break;
        default:
          this.replaceFile(path);
      }
    });
  }
}

module.exports = {
  Readline,
};
