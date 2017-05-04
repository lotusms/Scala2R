module.exports = {
  path: 'elements',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Elements'));
    });
  }
};
