'use strict';

const colors = require(`colors`);
const {Readline} = require(`./src/readline`);
const commands = require(`./src/commands/commands`);

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

if (commands[command]) {
  commands[command].execute();
} else {
  switch (command) {
    case undefined:
      const readline = new Readline();
      readline.greeting();
      break;
    case helpCommand.name:
      helpCommand.execute();
      process.exit(0);
      break;
    default:
      error.execute();
      process.exit(1);
  }

}

