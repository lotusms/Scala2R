import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {connect} from 'react-redux';
import APPCONFIG from 'constants/Config';
import QueueAnim from 'rc-queue-anim';
import {Row, Col, getRowProps, getColumnProps} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//import { LabelCheckbox } from 'material-ui/Checkbox';
//import withSwitchLabel from 'material-ui/internal/withSwitchLabel';
import { FormGroup } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


const styles = {
	block: {
		maxWidth: 250,
	},
	checkbox: {
		marginBottom: 16,
		color: '#eee'
	},
};

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			brand: APPCONFIG.brand,
			rememberMe: false
		};
	}

	render() {
		const {colorOption} = this.props;
		return (
			<Row between="xs" className="page-login">
				<Col className="main-body">
					<QueueAnim type="bottom" className="ui-animate">
						<div key="1">
							<div className="brand-login">
								<div className="logo">
									<img className="full-size" src="assets/ScalaCM.svg" alt=""/>
						        </div>
								<h2 className="title">Welcome to the Scala Content Manager!</h2>
							</div>
						</div>
					</QueueAnim>
				</Col>
				<Col className="auth-area">
					<QueueAnim type="bottom" className="ui-animate">
						<div key="2">
							<Col className= "auth-area-wrapper">
								<div className="logo hide">
					                <img className="full-size" src="assets/ScalaCM.svg" alt=""/>
					            </div>
								<h4 className="title">Log in to your account</h4>
								<p className="description">Please login with your existing username and password. You might be prompted to register your computer.</p>
								<FormGroup row className="form-horizontal">
									<div className="form-group">
										<TextField id="username" label="Username" className="" fullWidth/>
									</div>
									<div className="form-group">
										<TextField id="password" label="Password" className="" type="password" fullWidth/>
									</div>
								</FormGroup>

								<Row xs={12} className="remember-me">
								    <Col start="xs" xs={6}>
										{/*<LabelCheckbox
							                checked={this.state.rememberMe}
							                onChange={(event, checked) => this.setState({ rememberMe: checked })}
							                label="Remember Me"
							                value="rememberMe"/>*/}
								    </Col>
								    <Col end="xs" xs={6} className="forgot-password">
										<a href="#/forgot-password">Forgot your password?</a>
								    </Col>
								</Row>

								<Button
									raised
									label="Login"
									href="#/app/dashboard"
									className='login-button'
									fullWidth>

								</Button>

								<Row xs={12} className="sign-up">
									<Col center="xs" xs={12}>
										<a href="#/sign-up">Request an account</a>
									</Col>
								</Row>

							</Col>
						</div>
					</QueueAnim>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});


module.exports = connect(
    mapStateToProps
)(Login);
