const lineArr = ['|', '/', '-', '\\', '/', '-', '\\', '|'];
const delay = index => index === 0 ? 100 : index * 200
lineArr.forEach((char, index) => {
  setTimeout(() => process.stdout.write(`\r${char}   `), delay(index));
});