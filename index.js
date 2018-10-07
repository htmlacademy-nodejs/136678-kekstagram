'use strict';

const commands = require(`./src/commands`);
const {name, author} = require(`./package.json`);

const command = process.argv[2];

const helpCommand = {
  name: `--help`,
  description: `Показывает список доступных комманд;`,
  execute() {
    console.log(`Доступные команды:\n${helpCommand.name} - ${helpCommand.description}\n${Object.values(commands).map((it) => `${it.name} - ${it.description}`).join(`\n`)}`);
  }
};

const error = {
  name: `error`,
  description: `Введена неизвестная команда`,
  execute() {
    console.log(`Неизвестная команда "${command}".\nЧтобы прочитать правила использования приложения, наберите "--help"`);
  }
};

const greet = {
  name: `greet`,
  description: `Выводит приветственный текст, если не было передано параметров`,
  execute() {
    console.log(`Привет пользователь!\nЭта программа будет запускать сервер «${name}».\nАвтор: ${author}.`);
  }
};

if (commands[command]) {
  commands[command].execute();
  process.exit(0);
}

switch (command) {
  case undefined:
    greet.execute();
    process.exit(0);
    break;
  case helpCommand.name:
    helpCommand.execute();
    process.exit(0);
    break;
  default:
    error.execute();
    process.exit(1);
}
