import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import JSONP from 'jsonp';
import ColorOptions from 'components/Customizer';
import ToggleDisplay from 'react-toggle-display';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';


import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
//import AutoComplete from 'material-ui/AutoComplete';

//const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class HeaderRight extends React.Component {

	constructor(props) {
	    super(props);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.state = {
	      	dataSource : [],
	      	inputValue : '',
			show: false,
			open: false,
			open: {
				top: false,
				left: false,
				bottom: false,
				right: false,
			},
			index: 0,
	    	anchorEl: undefined,
		}
	}
	
	//OPENS THE CUSTOMIZER DRAWER
	toggleCustomizerDrawer = (side, open) => {
		const drawerState = {};
		drawerState[side] = open;
		this.setState({ open: drawerState });
	};
	//CUSTOMIZER DRAWER TOGGLE CALLS
	handleCustomizerOpen = () => this.toggleCustomizerDrawer('right', true);
	handleCustomizerClose = () => this.toggleCustomizerDrawer('right', false);

 //  	button = undefined;

	handleChange = (event, index) => {
		this.setState({ index });
	};

	handleChangeIndex = (index) => {
		this.setState({ index });
	};

	//OPENS THE USER MENU
	handleOpen = (event) => {
    	this.setState({
			open: true,
			anchorEl: event.currentTarget
		});
  	};

	//CLOSES THE USER MENU
  	handleRequestClose = () => {
    	this.setState({ open: false });
  	};

	// handleToggle = () => this.setState({
	// 	open: !this.state.open
	// });
	//
 //  	handleClose = () => this.setState({
	// 	open: false
	// });

	onUpdateInput(inputValue) {
		const self = this;
	    this.setState({
      		inputValue: inputValue
	    }, function() {
      		self.performSearch();
	    });
	}

	performSearch() {
	    const
      		self = this,
      		url  = googleAutoSuggestURL + this.state.inputValue;

	    if(this.state.inputValue !== '') {
      		JSONP(url, function(error, data) {
				let searchResults, retrievedSearchTerms;

        		if(error) return error;

        		searchResults = data[1];

        		retrievedSearchTerms = searchResults.map(function(result) {
          			return result[0];
        		});

        		self.setState({
          			dataSource: retrievedSearchTerms
        		});
      		});
	    }
  	}

	handleClick() {
	    this.setState({
	      	show: !this.state.show
	    });
  	}

	render() {
    	const { colorOption } = this.props;

		return (
			<Row>
				<ToggleDisplay show={!this.state.show}>
					<ul className="list-unstyled">
						<li>
							<Button
								aria-owns="user-menu"
								aria-haspopup="true"
								onTouchTap={this.handleOpen}
								onRequestClose={this.handleRequestClose}
								className= "user">
								<span>
									<Avatar className="md-initials">LS</Avatar>
									<span className="user-name">Luis Silva</span>
									<span><i className="material-icons dropdown-icon">keyboard_arrow_down</i></span>
								</span>
							</Button>
							<Menu
								id="user-menu"
								className= "user-menu"
								anchorEl={this.state.anchorEl}
								open={this.state.open}
								onRequestClose={this.handleRequestClose}>
								<MenuItem onTouchTap={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> assignment_ind </i>
									User Profile
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> poll </i>
									User Activity
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> settings_ethernet </i>
									Change Roles
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> photo_library </i>
									Workgroups
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> settings_input_antenna </i>
									Switch Networks
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> settings </i>
									User Settings
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleCustomizerOpen}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> color_lens </i>
									Themes
								</MenuItem>
								<Divider/>

								<MenuItem onTouchTap={this.handleRequestClose}
									value="/login"
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									<i className= "material-icons user-menu-icon"> power_settings_new </i>
									Log Out
								</MenuItem>
							</Menu>
						</li>
					</ul>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.show}>
					{/*<div
						className="autocomplete"
          				hintText="Type anything"
						dataSource    = {this.state.dataSource}
						onUpdateInput = {this.onUpdateInput}
						underlineShow={false}
						style={{
								position: 'absolute',
								top: '0',
							    right: '114px',
							    bottom: '0',
							    left: '280px'
						}}>

					</div>*/}
				</ToggleDisplay>
				<span className="open-search">
					<a href="javascript:;" onTouchTap={ () => this.handleClick() }>
						<i className="material-icons">search</i>
					</a>
				</span>

				<Drawer
					anchor="right"
					open={this.state.open.right}
					onRequestClose={this.handleCustomizerClose}
					onTouchTap={this.handleCustomizerClose}>
					<ColorOptions />
		        </Drawer>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});


module.exports = connect(
    mapStateToProps
)(HeaderRight);
