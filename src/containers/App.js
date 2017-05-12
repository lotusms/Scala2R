import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/theme';

// = styles =
// 3rd
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';

injectTapEventPlugin(); // Needed for onTouchTap for Material UI


class App extends Component {
	componentDidMount() {}

	render() {
		const { navCollapsed, panelCollapsed, navBehind, fixedHeader, sidebarWidth, theme, colorOption } = this.props;
    	let materialUITheme;

    	return (
      		<MuiThemeProvider>
        		<div id="app-inner"
					className={classnames('app-inner', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
					})}>
	          		<div
	            		className={classnames('full-height', {
	          			'fixed-header': fixedHeader,
	          			'nav-collapsed': navCollapsed,
	          			'quickpanel-collapsed': panelCollapsed,
	          			'nav-behind': navBehind,
	          			'sidebar-sm': sidebarWidth === 'small',
						'bg-color-medlight': ['11'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21'].indexOf(colorOption) >= 0,
						'bg-color-primary': ['12', '22'].indexOf(colorOption) >= 0,
						'bg-color-success': ['13', '23'].indexOf(colorOption) >= 0,
						'bg-color-info': ['14', '24'].indexOf(colorOption) >= 0,
						'bg-color-warning': ['15', '25'].indexOf(colorOption) >= 0,
						'bg-color-danger': ['16', '26'].indexOf(colorOption) >= 0

					})}>
	            		{this.props.children}
	          		</div>
	        	</div>
      		</MuiThemeProvider>
    	);
  	}
}

const mapStateToProps = (state, ownProps) => ({
	navCollapsed: state.settings.navCollapsed,
	panelCollapsed: state.settings.panelCollapsed,
	navBehind: state.settings.navBehind,
	fixedHeader: state.settings.fixedHeader,
	sidebarWidth: state.settings.sidebarWidth,
	theme: state.settings.theme,
	colorOption: state.settings.colorOption,
});

module.exports = connect(
	mapStateToProps
)(App);
