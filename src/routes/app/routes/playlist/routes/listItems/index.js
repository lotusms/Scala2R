module.exports = {
  path: 'listItems',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ListItems'));
    });
  }
};
