import isArray from './utils';

export function min(arg) {
  if (isArray(arg)) {
    return Math.min(...arg);
  }
  return arg;
}

export function copy() {

}
