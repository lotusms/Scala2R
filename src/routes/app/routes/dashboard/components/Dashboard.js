import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import KPIsChart from './KPIsChart';
import AquisitionChart from './AquisitionChart';
import StatBoxes from './StatBoxes';
import EngagementStats from './EngagementStats';
import BenchmarkChart from './BenchmarkChart';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
//import { withWidth } from 'material-ui/utils/withWidth';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';


const TabContainer = (props) => (
	<div style={{ padding: 20 }}>
    	{props.children}
	</div>
);

TabContainer.propTypes = {
  	children: PropTypes.node.isRequired,
};

class DashboardContent extends React.Component {

	// constructor(props) {
	//     super(props);
	//     this.state = {
	//   		slideIndex: 0,
	//     };
	//  }

	state = {
	    index: 0,
    	anchorEl: undefined,
    	open: false,
  	};

  	button = undefined;

	handleChange = (event, index) => {
		this.setState({ index });
	};

	handleChangeIndex = (index) => {
		this.setState({ index });
	};

	handleClick = (event) => {
    	this.setState({ open: true, anchorEl: event.currentTarget });
  	};

  	handleRequestClose = () => {
    	this.setState({ open: false });
  	};


  	render() {
    	const { colorOption } = this.props;
    	const classes = this.props.classes;

		const Statusboxes = () => (
			<Row>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Media</span>
							<Button
				          		aria-owns="simple-menu"
				          		aria-haspopup="true"
				          		onClick={this.handleClick}>
				          		<i className="material-icons">more_vert</i>
					        </Button>
							<Menu
      							id="simple-menu"
      							anchorEl={this.state.anchorEl}
      							open={this.state.open}
      							onRequestClose={this.handleRequestClose}>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Details
								</MenuItem>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Refresh
								</MenuItem>
							</Menu>
						</Row>
						<Col xs={12} className="box-info">
							<Row center="xs">
								<i className="material-icons status-icon">perm_media</i>
							</Row>
						</Col>
						<Col xs={12} className="box-bottom">
							<Row center="xs">
								<span className="status-count">20</span>
							</Row>
						</Col>
					</div>
				</Col>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Players</span>
							<Button
				          		aria-owns="simple-menu"
				          		aria-haspopup="true"
				          		onClick={this.handleClick}>
				          		<i className="material-icons">more_vert</i>
					        </Button>
							<Menu
      							id="simple-menu"
      							anchorEl={this.state.anchorEl}
      							open={this.state.open}
      							onRequestClose={this.handleRequestClose}>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Details
								</MenuItem>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Refresh
								</MenuItem>
							</Menu>
						</Row>
						<Col xs={12} className="box-info">
							<Row center="xs">
								<i className="material-icons status-icon">video_library</i>
							</Row>
						</Col>
						<Col xs={12} className="box-bottom">
							<Row center="xs">
								<span className="status-count">1</span>
							</Row>
						</Col>
					</div>
				</Col>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Playlists</span>
							<Button
				          		aria-owns="simple-menu"
				          		aria-haspopup="true"
				          		onClick={this.handleClick}>
				          		<i className="material-icons">more_vert</i>
					        </Button>
							<Menu
      							id="simple-menu"
      							anchorEl={this.state.anchorEl}
      							open={this.state.open}
      							onRequestClose={this.handleRequestClose}>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Details
								</MenuItem>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Refresh
								</MenuItem>
							</Menu>
						</Row>
						<Col xs={12} className="box-info">
							<Row center="xs">
								<i className="material-icons status-icon">featured_play_list</i>
							</Row>
						</Col>
						<Col xs={12} className="box-bottom">
							<Row center="xs">
								<span className="status-count">10</span>
							</Row>
						</Col>
					</div>
				</Col>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Channels</span>
							<Button
				          		aria-owns="simple-menu"
				          		aria-haspopup="true"
				          		onClick={this.handleClick}>
				          		<i className="material-icons">more_vert</i>
					        </Button>
							<Menu
      							id="simple-menu"
      							anchorEl={this.state.anchorEl}
      							open={this.state.open}
      							onRequestClose={this.handleRequestClose}>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Details
								</MenuItem>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Refresh
								</MenuItem>
							</Menu>
						</Row>
						<Col xs={12} className="box-info">
							<Row center="xs">
								<i className="material-icons status-icon">developer_board</i>
							</Row>
						</Col>
						<Col xs={12} className="box-bottom">
							<Row center="xs">
								<span className="status-count">4</span>
							</Row>
						</Col>
					</div>
				</Col>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Networks</span>
							<Button
				          		aria-owns="simple-menu"
				          		aria-haspopup="true"
				          		onClick={this.handleClick}>
				          		<i className="material-icons">more_vert</i>
					        </Button>
							<Menu
      							id="simple-menu"
      							anchorEl={this.state.anchorEl}
      							open={this.state.open}
      							onRequestClose={this.handleRequestClose}>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Details
								</MenuItem>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Refresh
								</MenuItem>
							</Menu>
						</Row>
						<Col xs={12} className="box-info">
							<Row center="xs">
								<i className="material-icons status-icon">settings_input_antenna</i>
							</Row>
						</Col>
						<Col xs={12} className="box-bottom">
							<Row center="xs">
								<span className="status-count">56</span>
							</Row>
						</Col>
					</div>
				</Col>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Users</span>
							<Button
				          		aria-owns="simple-menu"
				          		aria-haspopup="true"
				          		onClick={this.handleClick}>
				          		<i className="material-icons">more_vert</i>
					        </Button>
							<Menu
      							id="simple-menu"
      							anchorEl={this.state.anchorEl}
      							open={this.state.open}
      							onRequestClose={this.handleRequestClose}>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Details
								</MenuItem>
								<MenuItem onClick={this.handleRequestClose}
									className={classnames('menu-item', {
										'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
										'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
									})}>
									Refresh
								</MenuItem>
							</Menu>
						</Row>
						<Col xs={12} className="box-info">
							<Row center="xs">
								<i className="material-icons status-icon">people</i>
							</Row>
						</Col>
						<Col xs={12} className="box-bottom">
							<Row center="xs">
								<span className="status-count">5</span>
							</Row>
						</Col>
					</div>
				</Col>
			</Row>
		);

		const Main = () => (
	  		<div className="row">
		    	<div className="col-xl-6">
					<div
		              className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
  						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
		                })}>
		        		<div className="box-body">
		          			<KPIsChart />
		        		</div>
		      		</div>
		    	</div>
		    	<div className="col-xl-6">
					<div
		              className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
  						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
		                })}>
		        		<div className="box-body">
		          			<AquisitionChart />
		        		</div>
		      		</div>
		    	</div>
		  	</div>
	    );

		const Engagement = () => (
			<div
              className={classnames('box', {
					'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
  					'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                })}>
		    	<div className="box-body">
		      		<div className="row">
		        		<div className="col-xl-8">
		          			<div className="box box-transparent">
		            			<div className="box-header">Engagement</div>
	            				<div className="box-body">
		              				<div className="row text-center metrics">
		                				<div className="col-xs-6 col-md-3 metric-box">
		                  					<span className="metric">2.6M</span>
		                  					<span className="metric-info">Visits</span>
		                				</div>
		                				<div className="col-xs-6 col-md-3 metric-box">
		                  					<span className="metric">4.5M</span>
		                  					<span className="metric-info">Users</span>
		                				</div>
		                				<div className="col-xs-6 col-md-3 metric-box">
		                  					<span className="metric">08:03</span>
		                  					<span className="metric-info">Visit Duration</span>
		                				</div>
		                				<div className="col-xs-6 col-md-3 metric-box">
						                  	<span className="metric">5.25</span>
						                  	<span className="metric-info">Pages per Visit</span>
		                				</div>
		              				</div>

		              				<EngagementStats />
		            			</div>
		          			</div>
		        		</div>
		        		<div className="col-xl-4">
		          			<div className="box box-transparent">
					            <div className="box-header">Benchmark</div>
					            <div className="box-body">
		              				<BenchmarkChart />
		            			</div>
		          			</div>
		        		</div>
		      		</div>
		    	</div>
		  	</div>
		);

		return (
			<div>
				<h2 className="article-title dashboard-title">
					<i className="material-icons">dashboard</i>
					Dashboard
				</h2>
				<Tabs
          			onChange={this.handleChange}
            		index={this.state.index}
	                className="dashboard-tabs">
		          	<Tab label="Main"/>
		          	<Tab label="Analytics"/>
		          	<Tab label="Live Widgets"/>
        		</Tabs>
        		<SwipeableViews
          			index={this.state.index}
          			onChangeIndex={this.handleChangeIndex}>
		          	<TabContainer>
						<section className="chapter">
							<article className="article">
							  	<QueueAnim type="bottom" className="ui-animate main-content">
									<div key="1"><Statusboxes /></div>
			  				        <div key="2"><Main /></div>
			  				        <div key="3"><Engagement /></div>
			  			      	</QueueAnim>
							</article>
						</section>
		          	</TabContainer>

		          	<TabContainer>
		            	slide n°2
		          	</TabContainer>

		          	<TabContainer>
		            	slide n°3
		          	</TabContainer>
        		</SwipeableViews>
      		</div>
		);
  	}
}


const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});


module.exports = connect(
    mapStateToProps
)(DashboardContent);
