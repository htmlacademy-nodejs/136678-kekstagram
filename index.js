'use strict';

const Project = {
  VERSION: `v0.0.1`,
  NAME: `Kekstagram`,
  AUTHOR: `Maria Filippova`,
};

const CommandsName = {
  HELP: `--help`,
  VERSION: `--version`,
};

const command = process.argv[2];

const commands = {
  [CommandsName.HELP]: {
    info: `Доступные команды:\n--help    — печатает этот текст;\n--version — печатает версию приложения;`,
    action() {
      console.log(this.info);
    }
  },
  [CommandsName.VERSION]: {
    info: Project.VERSION,
    action() {
      console.log(this.info);
    }
  },
  default: {
    info: `Привет пользователь!\nЭта программа будет запускать сервер «${Project.NAME}».\nАвтор: ${Project.AUTHOR}.`,
    action() {
      console.log(this.info);
    }
  },
  error: {
    info: `Неизвестная команда "${command}".\nЧтобы прочитать правила использования приложения, наберите "--help"`,
    action() {
      console.log(this.info);
    }
  },
};


switch (command) {
  case CommandsName.HELP:
    commands[command].action();
    process.exit(0);
    break;
  case CommandsName.VERSION:
    commands[command].action();
    process.exit(0);
    break;
  case undefined:
    commands.default.action();
    process.exit(0);
    break;
  default:
    commands.error.action();
    process.exit(1);
}
