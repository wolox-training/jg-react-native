export function authHeader() {
  const token = sessionStorage.getItem('jwtToken');
  return token ? { Authorization: token } : {};
}
