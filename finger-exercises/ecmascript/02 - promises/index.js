// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(arg) {
  const timeNow = Date.now();
  return new Promise((resolve, reject) => {
    if (arg > 5000) {
      reject(new Error('This time is too much !'));
    } else {
      setTimeout(() => {
        resolve(Date.now() - timeNow);
      }, arg);
    }
  });
}

export function asyncDelay(arg) {
  const timeNow = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now() - timeNow);
    }, arg);
  });
}
