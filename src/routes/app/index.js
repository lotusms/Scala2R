module.exports = {
  path: 'app',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/charts'),
        require('./routes/dashboard'),
        require('./routes/playlist'),
        require('./routes/pageLayouts'),
        require('./routes/tables'),
      ]);
    });
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/MainApp'));
    });
  }
};
