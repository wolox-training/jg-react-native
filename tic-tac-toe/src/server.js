const jsonServer = require('json-server');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = require('../db.json');

const config = {
  secret: 'secret'
};

server.use(cors({ origin: '*' }));
server.get('/auth', (req, res) => {
  const username = req.query['username'];
  const password = req.query['password'];

  if (username != null && password != null) {
    const result = db.users.find(user => {
      return user.username === username && user.password === password;
    });
    if (result) {
      const token = jwt.sign({ user: result }, config.secret, {
        expiresIn: 86400
      });
      setTimeout(() => {
        res.status(200).jsonp(token);
      }, 3000);
    } else {
      setTimeout(() => {
        res.status(404).jsonp('User or password not found');
      }, 3000);
    }
  } else {
    setTimeout(() => {
      res.status(404).jsonp('No valid username or password');
    }, 3000);
  }
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
