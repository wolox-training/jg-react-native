import isArray from './utils';

export function min(...arg) {
  if (arg.length === 0) {
    return undefined;
  }
  if (arg.length === 1) {
    if (isArray(arg[0])) {
      return Math.min(...arg[0]);
    }
    return arg[0];
  }
  return Math.min(...arg);
}

export function copy() {
}
