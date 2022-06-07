const args = process.argv.slice(2);
let args1 = args.sort();
let time = 1000;

const timer = () => {

  if (args1 === []) {
    return;
  }

  for (let beep of args1) {

    if (beep < 0) {
      continue;
    }

    if (isNaN(beep)) {
      continue;
    }

    let notify = beep * time;
    setTimeout(() => {
      process.stdout.write('\x07');

    }, notify);

  }

};

timer();