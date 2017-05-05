import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';
// import {
//     toggleCollapsedQuickpanel
// } from '../../actions';
import QuickPanelContent from './QuickPanelContent';

class QuickPanel extends React.Component {

    componentDidMount() {
        const quickviewInner = this.quickview;
        $(quickviewInner).slimscroll({
          height: '100%'
        });
    }

    // onToggleCollapsedQuickpanel = (e) => {
    //     const val = !this.props.panelCollapsed;
    //     const { handleToggleCollapsedPanel } = this.props;
    //     handleToggleCollapsedPanel(val);
    // }

    render() {
        const { colorOption } = this.props;
        // let toggleIcon = null;
        // if (panelCollapsed) {
        //     toggleIcon = <i className="material-icons">radio_button_unchecked</i>;
        // } else {
        //     toggleIcon = <i className="material-icons">radio_button_checked</i>;
        // }


        return (
            <div
                className={classnames('quickpanel', {
                    'bg-color-light': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
                    'bg-color-dark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                    })}>
                <section className="quickpanel-content">
                    <QuickPanelContent />
                </section>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    // panelCollapsed: state.settings.panelCollapsed,
    colorOption: state.settings.colorOption
});

const mapDispatchToProps = dispatch => ({
    // handleToggleCollapsedPanel: (isPanelCollapsed) => {
    //     dispatch(toggleCollapsedQuickpanel(isPanelCollapsed));
    // },
});

module.exports = connect(
    mapStateToProps
    //mapDispatchToProps
)(QuickPanel);
