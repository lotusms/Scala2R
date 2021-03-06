import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';
import APPCONFIG from 'constants/Config';
import NavLeftList from './NavLeftList';
import NavRightList from './NavRightList';
import {Row, Col, getRowProps, getColumnProps} from 'react-flexbox-grid';

class Header extends React.Component {
	componentDidMount() {
		const sidebarToggler = this.sidebarBtn;
		const $sidebarToggler = $(sidebarToggler);
		const $body = $('#body');

		$sidebarToggler.on('click', (e) => {
			// _sidebar.scss, _page-container.scss
			$body.toggleClass('sidebar-mobile-open');
		});
	}

	render() {
		const {isFixedHeader, colorOption} = this.props;

		return (
			<section className="app-header">
				<Row between="xs" className="app-header-inner">

					<Row start="xs" className="hidden-lg-up">
						<a href="javascript:;" className="md-button header-icon toggle-sidebar-btn" ref={(c) => {
							this.sidebarBtn = c;
						}}>
							<i className="material-icons">menu</i>
						</a>
					</Row>

					<Row start="xs" className="header-left hidden-md-down">
						<NavLeftList/>
					</Row>

					<Row className="header-right">
						<NavRightList/>
					</Row>
				</Row>
			</section>
		);
	}
}

const mapStateToProps = state => ({colorOption: state.settings.colorOption, isFixedHeader: state.settings.isFixedHeader});

module.exports = connect(mapStateToProps)(Header);
