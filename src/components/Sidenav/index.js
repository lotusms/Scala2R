import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';
import {
    togglCollapsedNav
} from '../../actions';
import SidenavContent from './SidenavContent';

class Sidebar extends React.Component {

    componentDidMount() {
        // AutoCloseMobileNav
        const $body = $('#body');

        if (APPCONFIG.AutoCloseMobileNav) {
            hashHistory.listen((location) => {
                setTimeout(() => {
                    $body.removeClass('sidebar-mobile-open');
                }, 0);
            });
        }
    }

    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        const { handleToggleCollapsedNav } = this.props;
        handleToggleCollapsedNav(val);
    }

    render() {
        const { navCollapsed, colorOption } = this.props;
        let toggleIcon = null;
        if (navCollapsed) {
            toggleIcon = <i className="material-icons">chevron_right</i>;
        } else {
            toggleIcon = <i className="material-icons">chevron_left</i>;
        }

        return (
            <nav
                className={classnames('app-sidebar', {
                    'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
                    'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                })}>
                <section
                    className={classnames('sidebar-header', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                    })}>
                    <img className="logo full-size" src="../../assets/ScalaCM.svg" alt=""/>
                    <img className="logo min-size" src="../../assets/ScalaCMsm.svg" alt=""/>
                    <svg>
                        <circle className="react-dot" stroke="none" cx="1960" cy="1760" r="355" />
                        <g className="react-curve" strokeWidth="170" fill="none">
                            <ellipse cx="2575" cy="545" rx="715" ry="1875" transform="rotate(30)" />
                            <ellipse cx="1760" cy="-1960" rx="715" ry="1875" transform="rotate(90)" />
                            <ellipse cx="-815" cy="-2505" rx="715" ry="1875" transform="rotate(-210)" />
                        </g>
                    </svg>
                    <a href="javascript:;" className="collapsednav-toggler" onClick={this.onToggleCollapsedNav}>
                        {toggleIcon}
                    </a>
                </section>

                <section className="sidebar-content">
                    <SidenavContent />
                </section>

                <section className="sidebar-footer">
                    <ul className="nav">
                        <li>
                            <a target="_blank" href={APPCONFIG.productLink}>
                                <i className="nav-icon material-icons">help</i>
                                <span className="nav-text"><span>Help</span> & <span>Support</span></span>
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    navCollapsed: state.settings.navCollapsed,
    colorOption: state.settings.colorOption
});

const mapDispatchToProps = dispatch => ({
    handleToggleCollapsedNav: (isNavCollapsed) => {
        dispatch(togglCollapsedNav(isNavCollapsed));
    },
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
