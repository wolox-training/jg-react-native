export function authHeader() {
  const token = sessionStorage.getItem('jwtToken');

  if (token) {
    return { Authorization: token };
  }
  return {};
}
