import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';
import Drawer from 'material-ui/Drawer';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

class QuickPanel extends React.Component {

    render() {
        const { colorOption } = this.props;

        return (
            <Col
                className={classnames('quickpanel', {
                    'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
                    'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                    })}>
                <section
                    className={classnames('quickpanel-header', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                    })}>
					<h4>QuickBar</h4>
				</section>
                <section
                    className={classnames('quickpanel-content', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                    })}>
                    <p>Something here</p>
                </section>
            </Col>

        );
    }
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});

module.exports = connect(
    mapStateToProps
)(QuickPanel);
