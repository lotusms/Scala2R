import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const sideWidthSelectStyle = {
  fontSize: '14px',
  width: '100%',
  marginTop: '-15px'
};

class LayoutOptions extends React.Component {

  render() {
    const { navCollapsed, panelCollapsed, navBehind, fixedHeader, sidebarWidth } = this.props;

    return (
      <section className="customizer-layout-options">
      </section>
    );
  }
}

const mapStateToProps = state => ({
  navCollapsed: state.settings.navCollapsed,
	panelCollapsed: state.settings.panelCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader
});
const mapDispatchToProps = dispatch => ({
  handleToggleFixedHeader: (isFixedHeader) => {
    dispatch(toggleFixedHeader(isFixedHeader));
  },
  handleToggleCollapsedNav: (isNavCollapsed) => {
    dispatch(togglCollapsedNav(isNavCollapsed));
  },
  handleToggleCollapsedPanel: (isPanelCollapsed) => {
    dispatch(toggleCollapsedQuickpanel(isPanelCollapsed));
  },
  handleToggleNavBehind: (isNavBehind) => {
    dispatch(toggleNavBehind(isNavBehind));
  }
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutOptions);
