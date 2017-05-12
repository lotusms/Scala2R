import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link, hashHistory} from 'react-router';
import APPCONFIG from 'constants/Config';
import ToggleDisplay from 'react-toggle-display';
import HeaderRight from './HeaderRight';
import QuickPanel from 'components/QuickPanel';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

import Drawer from 'material-ui/Drawer';


class NavRightList extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
			open: {
				top: false,
				left: false,
				bottom: false,
				right: false,
			},
		};
  	}
	toggleQuickPanelDrawer = (side, open) => {
		const drawerState = {};
		drawerState[side] = open;
		this.setState({ open: drawerState });
	};

	handleQuickPanelOpen = () => this.toggleQuickPanelDrawer('right', true);
	handleQuickPanelClose = () => this.toggleQuickPanelDrawer('right', false);


	render() {
		const {colorOption} = this.props;
		return (
			<Row>
				<HeaderRight />

				<span className="collapsedpanel-toggler">
					<a href="javascript:;" onTouchTap={this.handleQuickPanelOpen}>
						<i className="material-icons">menu</i>
					</a>
				</span>

				<Drawer
					anchor="right"
					open={this.state.open.right}
					onRequestClose={this.handleQuickPanelClose}
					onClick={this.handleQuickPanelClose}
					className={classnames('quickpanel', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
					})}>
					<QuickPanel />
		        </Drawer>
			</Row>
		);
	}
}
const mapStateToProps = state => ({colorOption: state.settings.colorOption});


module.exports = connect(mapStateToProps)(NavRightList);
