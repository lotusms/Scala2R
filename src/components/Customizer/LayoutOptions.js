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
    const { navCollapsed, navBehind, fixedHeader, sidebarWidth } = this.props;

    return (
      <section className="customizer-layout-options">
      </section>
    );
  }
}

const mapStateToProps = state => ({
  navCollapsed: state.settings.navCollapsed,
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
  handleToggleNavBehind: (isNavBehind) => {
    dispatch(toggleNavBehind(isNavBehind));
  }
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutOptions);
