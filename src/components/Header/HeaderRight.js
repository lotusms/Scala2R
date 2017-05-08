import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import JSONP from 'jsonp';
import ToggleDisplay from 'react-toggle-display';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';


const ImgIconButtonStyle = {
	width: '60px',
	height: '60px'
};

const listItemStyle = {
	paddingLeft: '50px' // 36 + 16, algin with sub list
};

const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class HeaderRight extends React.Component {
	constructor(props) {
	    super(props);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.state = {
	      	dataSource : [],
	      	inputValue : '',
			show: false
		}
	}

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
			<Row xs={12}>
				<ToggleDisplay show={!this.state.show}>
					<ul className="list-unstyled">
						<li>
							<IconMenu iconButtonElement={
								<Row middle="xs">
									<IconButton style = { ImgIconButtonStyle } >
										<img src="assets/images/g1.jpg" alt="" className="rounded-circle img30_30"/>
									</IconButton>
									<span className="user-name">Luis Silva</span>
									<span><i className="material-icons dropdown-icon">keyboard_arrow_down</i></span>
								</Row>
								}
								onChange={this.handleChange}
								anchorOrigin={
									{
										horizontal: 'right',
										vertical: 'bottom'
									}
								}
								targetOrigin={
									{
										horizontal: 'right',
										vertical: 'top'
									}
								}
								menuStyle={
									{
										minWidth: '150px'
									}
								}>
								<MenuItem value="/app/dashboard"
									primaryText="Dashboard"
									style={
										{
											fontSize: '14px',
											lineHeight: '48px'
										}
									}
									innerDivStyle={listItemStyle}
									leftIcon={
										< i className = "material-icons" > home < /i>
									}/>
								<MenuItem value="/app/page/about"
									primaryText="About"
									innerDivStyle={listItemStyle}
									style={
										{
											fontSize: '14px',
											lineHeight: '48px'
										}
									}
									leftIcon={
										< i className = "material-icons" > person_outline < /i>
									}/>
								<MenuItem value="/login"
									primaryText="Log Out"
									innerDivStyle={listItemStyle}
									style={
										{
											fontSize: '14px',
											lineHeight: '48px'
										}
									}
									leftIcon={
										< i className = "material-icons" > forward < /i>
									}/>
							</IconMenu>
						</li>
					</ul>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.show}>
					<AutoComplete
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
							    left: '245px'
						}}
						/>
				</ToggleDisplay>
				<span className="open-search">
					<a href="javascript:;" onClick={ () => this.handleClick() }>
						<i className="material-icons">search</i>
					</a>
				</span>
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
