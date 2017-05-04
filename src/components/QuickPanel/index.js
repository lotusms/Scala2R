import React from 'react';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';
//import QuickPanelContent from './QuickPanelContent';

class QuickPanel extends React.Component {

    componentDidMount() {
        const quickviewInner = this.quickview;
        $(quickviewInner).slimscroll({
          height: '100%'
        });
    }

    // onToggleCollapsedNav = (e) => {
    //     const val = !this.props.navCollapsed;
    //     const { handleToggleCollapsedNav } = this.props;
    //     handleToggleCollapsedNav(val);
    // }

    render() {
        return (
            <div>Quickpanel</div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

module.exports = QuickPanel;
