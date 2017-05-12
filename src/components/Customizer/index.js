import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {changeColorOption} from '../../actions';

class ColorSchemeOptions extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		const {handleChange} = this.props;
		const newColorOption = e.target.value;
		handleChange(newColorOption);
	}

	render() {
		const {colorOption} = this.props;

		return (
			<section
				className={classnames('customizer', {
					'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
					'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
				})}>
				<h4 className="section-header">Color Options</h4>
				<div className="divider"/>
				<div className="row">
					<div className="col-6">
						<label className="color-option-check">
							<input type="radio" name="color" value="12" checked={colorOption === '12'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-primary item-header"/>
								<span className="bg-color-primary item-header"/>
								<span className="bg-color-medlight"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="13" checked={colorOption === '13'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-success item-header"/>
								<span className="bg-color-success item-header"/>
								<span className="bg-color-medlight"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="14" checked={colorOption === '14'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-info item-header"/>
								<span className="bg-color-info item-header"/>
								<span className="bg-color-medlight"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="15" checked={colorOption === '15'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-warning item-header"/>
								<span className="bg-color-warning item-header"/>
								<span className="bg-color-medlight"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="16" checked={colorOption === '16'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-danger item-header"/>
								<span className="bg-color-danger item-header"/>
								<span className="bg-color-medlight"/>
							</span>
						</label>
					</div>

					<div className="col-6">
						<label className="color-option-check">
							<input type="radio" name="color" value="22" checked={colorOption === '22'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page bg-color-dark">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-primary item-header"/>
								<span className="bg-color-primary item-header"/>
								<span className="bg-color-dark"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="23" checked={colorOption === '23'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page bg-color-dark">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-success item-header"/>
								<span className="bg-color-success item-header"/>
								<span className="bg-color-dark"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="24" checked={colorOption === '24'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page bg-color-dark">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-info item-header"/>
								<span className="bg-color-info item-header"/>
								<span className="bg-color-dark"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="25" checked={colorOption === '25'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page bg-color-dark">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-warning item-header"/>
								<span className="bg-color-warning item-header"/>
								<span className="bg-color-dark"/>
							</span>
						</label>
						<label className="color-option-check">
							<input type="radio" name="color" value="26" checked={colorOption === '26'} onChange={this.onChange}/>
							<span className="color-option-item bg-color-page bg-color-dark">
								<span className="overlay">
									<span className="material-icons">check</span>
								</span>
								<span className="bg-color-danger item-header"/>
								<span className="bg-color-danger item-header"/>
								<span className="bg-color-dark"/>
							</span>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({colorOption: state.settings.colorOption});
const mapDispatchToProps = dispatch => ({
	handleChange: (colorOption) => {
		dispatch(changeColorOption(colorOption));
	}
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ColorSchemeOptions);
