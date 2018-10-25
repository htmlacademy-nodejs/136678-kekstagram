'use strict';

const colors = require(`colors`);
const commands = require(`./src/commands/commands`);
const {name, author} = require(`./package.json`);

const command = process.argv[2];

const helpCommand = {
  name: `--help`,
  description: `Показывает список доступных комманд;`,
  execute() {
    console.log(`Доступные команды:\n${colors.grey(helpCommand.name)} - ${colors.green(helpCommand.description)}\n${Object.values(commands).map((it) => `${colors.grey(it.name)} - ${colors.green(it.description)}`).join(`\n`)}`);
  }
};

const error = {
  name: `error`,
  description: `Введена неизвестная команда`,
  execute() {
    console.log(`Неизвестная команда "${colors.red(command)}".\nЧтобы прочитать правила использования приложения, наберите ${colors.green(`"--help"`)}`);
  }
};

const greet = {
  name: `greet`,
  description: `Выводит приветственный текст, если не было передано параметров`,
  execute() {
    console.log(`Привет пользователь!\nЭта программа будет запускать сервер «${colors.yellow(name)}».\nАвтор: ${colors.cyan(author)}.`);
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
