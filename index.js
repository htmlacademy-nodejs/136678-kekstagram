const Project = {
  VERSION: `v0.0.1`,
  NAME: `Kekstagram`,
  AUTHOR: `Maria Filippova`,
};

const command = process.argv[2];

switch (command) {
  case `--help`:
    console.log(
      `Доступные команды:\n` +
      `--help    — печатает этот текст;\n` +
      `--version — печатает версию приложения;`
    );
    process.exit();

  case `--version`:
    console.log(Project.VERSION);
    process.exit();

  case undefined:
    console.log(
      `Привет пользователь!\n` +
      `Эта программа будет запускать сервер «${Project.NAME}».\n` +
      `Автор: ${Project.AUTHOR}.`
    );
    process.exit();

  default:
    console.error(
      `Неизвестная команда "${command}".\n` +
      `Чтобы прочитать правила использования приложения, наберите "--help"`
    );
    process.exit(1);
}
