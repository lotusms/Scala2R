import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import {Link, hashHistory} from 'react-router';
import APPCONFIG from 'constants/Config';
import {toggleCollapsedQuickpanel} from '../../actions';
import AutoComplete from 'material-ui/AutoComplete';
import JSONP from 'jsonp';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

const ImgIconButtonStyle = {
	width: '60px',
	height: '60px'
};

const listItemStyle = {
	paddingLeft: '50px' // 36 + 16, algin with sub list
};

const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class NavRightList extends React.Component {

	constructor(props) {
	    super(props);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.state = {
	      	dataSource : [],
	      	inputValue : ''
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

	handleChange = (event, value) => {
		hashHistory.push(value);
	}

	onToggleCollapsedQuickpanel = (e) => {
		const value = !this.props.panelCollapsed;
		const {handleToggleCollapsedPanel} = this.props;
		handleToggleCollapsedPanel(value);
	}

	render() {
		const {panelCollapsed, colorOption} = this.props;
		return (
			<span>
				<ul className="list-unstyled">
					<li style={{ marginRight: '10px' }}>
						<IconMenu iconButtonElement={
							<Row middle="xs">
								< IconButton style = { ImgIconButtonStyle } >
									<img src="assets/images/g1.jpg" alt="" className="rounded-circle img30_30"/>
								< /IconButton>
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
					<li className="collapsedpanel-toggler">
						<a href="javascript:;" onClick={this.onToggleCollapsedQuickpanel}>
							<i className="material-icons">menu</i>
						</a>
					</li>
				</ul>

				<AutoComplete
		            dataSource    = {this.state.dataSource}
		            onUpdateInput = {this.onUpdateInput} />
			</span>
		);
	}
}
const mapStateToProps = state => ({panelCollapsed: state.settings.panelCollapsed, colorOption: state.settings.colorOption});

const mapDispatchToProps = dispatch => ({
	handleToggleCollapsedPanel: (isPanelCollapsed) => {
		dispatch(toggleCollapsedQuickpanel(isPanelCollapsed));
	}
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavRightList);

module.exports = NavRightList;
