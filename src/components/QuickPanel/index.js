import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';

class QuickPanel extends React.Component {

    componentDidMount() {
        const quickviewInner = this.quickview;
        $(quickviewInner).slimscroll({
          height: '100%'
        });
    }

    render() {
        const { colorOption } = this.props;

        return (
            <div
                className={classnames('quickpanel', {
                    'bg-color-light': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
                    'bg-color-dark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                    })}>
                <section className="quickpanel-content">
									<div>
										Quickpanel</div>
                </section>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});

module.exports = connect(
    mapStateToProps
)(QuickPanel);
