export const rowItems = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
export const linesWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const JWTUSER = 'jwtUser';

export const routes = [{ src: '/game', name: 'Game' }, { src: '/profile', name: 'Profile' }];

export const errorMessage = {
  NETWORK_ERROR: 'An error occurred with the server',
  CLIENT_ERROR: 'User or password incorrect'
};
