import fs from 'fs';

function run(args) {
  const command = parseCommand(args);

  countOrders(command);
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly,
  };
}

function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);

  const filtered = command.countReadyOnly ? orders.filter((order) => order.status === 'ready').length : orders;
  console.log(filtered.length);
}

run(process.argv);
