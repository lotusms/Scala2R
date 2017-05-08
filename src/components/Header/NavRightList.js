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
import QuickPanel from '../Quickpanel';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';


class NavRightList extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			show: false
		}
	}

	handleClick() {
	    this.setState({
	      	show: !this.state.show
	    });
  	}

	handleChange = (event, value) => {
		hashHistory.push(value);
	}

	render() {
		const {colorOption} = this.props;
		return (
			<Row end="xs">
				<HeaderRight />

				<span className="collapsedpanel-toggler">
					<a href="javascript:;" onClick={ () => this.handleClick() }>
						<i className="material-icons">menu</i>
					</a>
				</span>
				<ToggleDisplay show={this.state.show}>
					<QuickPanel />
				</ToggleDisplay>
			</Row>
		);
	}
}
const mapStateToProps = state => ({colorOption: state.settings.colorOption});


module.exports = connect(mapStateToProps)(NavRightList);
