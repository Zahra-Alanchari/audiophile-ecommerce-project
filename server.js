
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
