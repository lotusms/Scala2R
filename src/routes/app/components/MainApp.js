import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import APPCONFIG from 'constants/Config';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';

class MainApp extends React.Component {

	render() {
		const {children, location, colorOption} = this.props;

		return (
			<div className="main-app-container">
				<Sidenav/>

				<section id="page-container" className="app-page-container">
					<Header/>

					<div className="app-content-wrapper">
						<div className="app-content">
							<div className="full-height">
								{children}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => ({colorOption: state.settings.colorOption});

module.exports = connect(mapStateToProps)(MainApp);
