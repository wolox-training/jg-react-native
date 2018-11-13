// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(arg) {
  const time = arg;
  return new Promise((resolve, reject) => {
    if (time > 5000) {
      reject(new Error('This time is too much !'));
    } else {
      setInterval(() => {
        resolve(time);
        reject(new Error('time is too long'));
      }, time);
    }
  });
}

export function asyncDelay() {

}
