import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';
import {
    toggleCollapsedQuickpanel
} from '../../actions';

const ImgIconButtonStyle = {
	width: '60px',
	height: '60px'
};

const listItemStyle = {
  	paddingLeft: '50px' // 36 + 16, algin with sub list
};

class NavRightList extends React.Component {

  	handleChange = (event, value) => {
    	hashHistory.push(value);
  	}

	onToggleCollapsedQuickpanel = (e) => {
		const value = !this.props.panelCollapsed;
		const { handleToggleCollapsedPanel } = this.props;
		handleToggleCollapsedPanel(value);
	}

  	render() {
		const { panelCollapsed, colorOption } = this.props;
    	let toggleIcon = null;
    	if (panelCollapsed) {
        	toggleIcon = <i className="material-icons">chevron_left</i>;
    	} else {
        	toggleIcon = <i className="material-icons">chevron_right</i>;
    	}
    	return (
      	<ul className="list-unstyled float-right">
        	<li style={{marginRight: '10px'}}>
          		<IconMenu
            		iconButtonElement={<IconButton style={ImgIconButtonStyle}><img src="assets/images/g1.jpg" alt="" className="rounded-circle img30_30" /></IconButton>}
            		onChange={this.handleChange}
            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
            		menuStyle={{minWidth: '150px'}}
                    >
            		<MenuItem
              			value="/app/dashboard"
              			primaryText="Dashboard"
              			style={{fontSize: '14px', lineHeight: '48px'}}
              			innerDivStyle={listItemStyle}
              			leftIcon={<i className="material-icons">home</i>}
                        />
            		<MenuItem
						value="/app/page/about"
						primaryText="About"
						innerDivStyle={listItemStyle}
						style={{fontSize: '14px', lineHeight: '48px'}}
						leftIcon={<i className="material-icons">person_outline</i>}
                        />
            		<MenuItem
						value="/login"
						primaryText="Log Out"
						innerDivStyle={listItemStyle}
						style={{fontSize: '14px', lineHeight: '48px'}}
						leftIcon={<i className="material-icons">forward</i>}
                        />
          			</IconMenu>
        		</li>
        		<li>
					<a href="javascript:;" className="collapsedpanel-toggler" onClick={this.onToggleCollapsedQuickpanel}>
					{toggleIcon}
					</a>
        		</li>
      		</ul>
    	);
  	}
}
const mapStateToProps = state => ({
    panelCollapsed: state.settings.panelCollapsed,
    colorOption: state.settings.colorOption
});

const mapDispatchToProps = dispatch => ({
    handleToggleCollapsedPanel: (isPanelCollapsed) => {
        dispatch(toggleCollapsedQuickpanel(isPanelCollapsed));
    },
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavRightList);

module.exports = NavRightList;
