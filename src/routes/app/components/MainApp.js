import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import APPCONFIG from 'constants/Config';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import QuickPanel from 'components/QuickPanel';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';

class MainApp extends React.Component {
  render() {
    const { children, location, colorOption } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
              <div
                className={classnames('app-content', {
                    'bg-color-light': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
                    'bg-color-dark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                  })}
                      >
              <div className="full-height">
                {children}
              </div>
            </div>

            <Footer />
          </div>
        </section>

        <QuickPanel />
        <Customizer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  colorOption: state.settings.colorOption
});

module.exports = connect(
  mapStateToProps
)(MainApp);
