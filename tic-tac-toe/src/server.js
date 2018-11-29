const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = require('../db.json');

server.use(cors({ origin: '*' }));
server.get('/auth', (req, res) => {
  const username = req.query['username'];
  const password = req.query['password'];

  if (username != null && password != null) {
    const result = db.users.find(user => {
      return user.username === username && user.password === password;
    });
    if (result) {
      res.status(200).jsonp(true);
    } else {
      res.status(404).jsonp('User or password not found');
    }
  } else {
    res.status(400).jsonp({
      error: 'No valid username or password'
    });
  }
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
