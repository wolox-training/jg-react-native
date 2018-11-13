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

export function copy(...arg) {
  if (arg.length === 1 && !isArray(arg[0])) {
    return Object.assign({}, arg[0]);
  }
  return Object.assign([], arg[0]);
}

export function reverseMerge(arg1, arg2) {
  const obj = Object.assign([], arg2);
  obj.push(...arg1);
  return obj;
}

export function filterAttribs(arg) {
  const obj = Object.assign({}, arg);
  const a = 'a'; const b = 'b';
  delete obj[a];
  delete obj[b];
  return obj;
}
