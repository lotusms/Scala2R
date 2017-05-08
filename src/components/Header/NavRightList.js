import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import {Link, hashHistory} from 'react-router';
import APPCONFIG from 'constants/Config';
import ToggleDisplay from 'react-toggle-display';
import HeaderRight from './HeaderRight';
import QuickPanel from 'components/QuickPanel';
import Drawer from 'material-ui/Drawer';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';


class NavRightList extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {open: false};
  	}

	handleToggle = () => this.setState(
		{
			open: !this.state.open
		}
	);

  	handleClose = () => this.setState(
		{
			open: false
		}
	);

	handleChange = (event, value) => {
		hashHistory.push(value);
	}

	render() {
		const {colorOption} = this.props;
		return (
			<Row>
				<HeaderRight />

				<span className="collapsedpanel-toggler">
					<a href="javascript:;" onTouchTap={this.handleToggle}>
						<i className="material-icons">menu</i>
					</a>
				</span>
				<Drawer
					width={300}
					docked={false}
					openSecondary={true}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<QuickPanel />
		        </Drawer>
			</Row>
		);
	}
}
const mapStateToProps = state => ({colorOption: state.settings.colorOption});


module.exports = connect(mapStateToProps)(NavRightList);
