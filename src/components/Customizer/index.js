import 'jquery-slimscroll/jquery.slimscroll.min';
import React from 'react';
import APPCONFIG from 'constants/Config';
import ColorOptions from './ColorOptions';
import ThemeOptions from './ThemeOptions';

class Customizer extends React.Component {

  componentDidMount() {
    const quickviewInner = this.quickview;
    $(quickviewInner).slimscroll({
      height: '100%'
    });
  }

  toggleCustomizer = () => {
    const $body = $('#body');
    $body.toggleClass('quickview-open-customizer');
  }

  closeCustomizer = () => {
    const $body = $('#body');
    $body.removeClass('quickview-open-customizer');
  }


  render() {
    return (
      <section
        className="quickview-wrapper customizer hidden-lg-down theme-dark" id="quickview-customizer">
        <a className="customizer-close" href="javascript:;" onClick={this.closeCustomizer}>
          <span className="material-icons">close</span>
        </a>
        <a className="customizer-toggle" href="javascript:;" onClick={this.toggleCustomizer}>
          <span className="material-icons">settings</span>
        </a>

        <div className="quickview-inner" ref={(c) => { this.quickview = c; }}>
          <ColorOptions />

          <div className="divider divider-lg divider-solid" />
          <ThemeOptions />
        </div>
      </section>
    );
  }
}

module.exports = Customizer;
