import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// = styles =
// 3rd
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';


injectTapEventPlugin(); // Needed for onTouchTap for Material UI


class App extends Component {
  componentDidMount() {}

  render() {
    const { navCollapsed, panelCollapsed, navBehind, fixedHeader, sidebarWidth, theme } = this.props;
    let materialUITheme;
    switch (theme) {
      case 'light':
        materialUITheme = lightTheme;
        break;
      default:
        materialUITheme = darkTheme;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
        <div id="app-inner">
          <div className="preloaderbar hide"><span className="bar" /></div>
          <div
            className={classnames('full-height', {
              'fixed-header': fixedHeader,
              'nav-collapsed': navCollapsed,
              'quickpanel-collapsed': panelCollapsed,
              'nav-behind': navBehind,
              'theme-dark': theme === 'dark',
              'theme-light': theme === 'light',
              'sidebar-sm': sidebarWidth === 'small'})
                    }>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: state.settings.layoutBoxed,
  navCollapsed: state.settings.navCollapsed,
  panelCollapsed: state.settings.panelCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader,
  sidebarWidth: state.settings.sidebarWidth,
  theme: state.settings.theme,
});

module.exports = connect(
  mapStateToProps
)(App);
