const { client } = require('./index').getInstance();

module.exports = () => {
  return client.transaction();
}
