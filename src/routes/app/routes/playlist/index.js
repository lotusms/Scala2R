module.exports = {
  path: 'playlist',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Playlist'));
    });
  }
};
