import React from 'react';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import classnames from 'classnames';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

const HeaderIconButtonStyle = {
	width: '60px',
	height: '60px'
};

const listItemStyle = {
	paddingLeft: '40px' // 36 + 16, algin with sub list
};

class NavLeftList extends React.Component {

	state = {
	    index: 0,
    	anchorEl: undefined,
    	open: false,
  	};

  	button = undefined;

	handleChange = (event, index, value) => {
		this.setState({ index });
		hashHistory.push(value);
	};

	handleChangeIndex = (index) => {
		this.setState({ index });
	};

	handleClick = (event) => {
    	this.setState({ open: true, anchorEl: event.currentTarget });
  	};

  	handleRequestClose = () => {
    	this.setState({ open: false });
  	};


	// handleChange = (event, value) => {
	// 	hashHistory.push(value);
	// }

	render() {
    	const { colorOption } = this.props;
		return (
			<ul className="list-unstyled list-inline">
				<li className="list-inline-item">
					<Button
						aria-owns="simple-menu"
						aria-haspopup="false"
						onClick={this.handleClick}
						className = "md-button header-btn">
						<i className="material-icons">notifications_none</i>
						<span className= "badge"> 3 </span>
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={this.state.anchorEl}
						open={this.state.open}
						onRequestClose={this.handleRequestClose}>
						<MenuItem onClick={this.handleRequestClose}
							className={classnames('header-icon-dropdown-item', {
								'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
								'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
							})}>
							<div>
								<i className= "material-icons"> mail_outline </i>
								<span>New mail from Susan</span>
							</div>
							<div>
								<span className= "text-muted"> 5 min ago </span>
							</div>
						</MenuItem>
						<Divider inset />

						<MenuItem onClick={this.handleRequestClose}
							className={classnames('header-icon-dropdown-item', {
								'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
								'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
							})}>
							<div>
								<i className= "material-icons"> mail_outline </i>
								<span>New mail from John</span>
							</div>
							<div>
								<span className= "text-muted"> 1 h ago </span>
							</div>
						</MenuItem>
						<Divider inset />

						<MenuItem onClick={this.handleRequestClose}
							className={classnames('header-icon-dropdown-item', {
								'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
								'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
							})}>
							<div>
								<i className= "material-icons"> mail_outline </i>
								<span>New mail from Anna</span>
							</div>
							<div>
								<span className= "text-muted"> 5 min ago </span>
							</div>
						</MenuItem>
						<Divider inset />

						<MenuItem onClick={this.handleRequestClose}
							className={classnames('header-icon-dropdown-item', {
								'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
								'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
							})}>
							<div>
								<i className= "material-icons"> chat_bubble_outline </i>
								<span>Message from Jane</span>
							</div>
							<div>
								<span className= "text-muted"> 1 h ago </span>
							</div>
						</MenuItem>
						<Divider inset />

						<MenuItem onClick={this.handleRequestClose}
							className={classnames('header-icon-dropdown-item', {
								'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
								'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
							})}>
							<div>
								<i className= "material-icons"> notifications_none </i>
								<span>Copy task completed</span>
							</div>
						</MenuItem>
					</Menu>
				</li>
			</ul>
		);
	}
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});

module.exports = connect(
    mapStateToProps
)(NavLeftList);
