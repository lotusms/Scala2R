import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import QueueAnim from 'rc-queue-anim';
import KPIsChart from './KPIsChart';
import AquisitionChart from './AquisitionChart';
import StatBoxes from './StatBoxes';
import EngagementStats from './EngagementStats';
import BenchmarkChart from './BenchmarkChart';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

const IconButtonStyle = {
	color: '#eee'
};

class DashboardContent extends React.Component {
  	render() {
    	const { colorOption } = this.props;
		const Statusboxes = () => (
			<Row>
				<Col xs={12} sm={4} md={2}>
					<div className={classnames('box', {
						'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
						'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
	                	})}>
						<Row between="xs" className="box-top">
							<span className="box-title">Media</span>
							<IconMenu
	            				iconButtonElement={<IconButton style={IconButtonStyle}><i className="material-icons">more_vert</i></IconButton>}
			            		onChange={this.handleChange}
			            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			            		menuStyle={{minWidth: '150px'}}>
			            		<MenuItem
			              			primaryText="Details"
			              			style={{fontSize: '14px', lineHeight: '48px'}}
			                        />
	            				<MenuItem
									primaryText="Refresh"
									style={{fontSize: '14px', lineHeight: '48px'}}
									/>
	          				</IconMenu>
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
							<IconMenu
	            				iconButtonElement={<IconButton style={IconButtonStyle}><i className="material-icons">more_vert</i></IconButton>}
			            		onChange={this.handleChange}
			            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			            		menuStyle={{minWidth: '150px'}}>
			            		<MenuItem
			              			primaryText="Details"
			              			style={{fontSize: '14px', lineHeight: '48px'}}
			                        />
	            				<MenuItem
									primaryText="Refresh"
									style={{fontSize: '14px', lineHeight: '48px'}}
									/>
	          				</IconMenu>
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
							<IconMenu
	            				iconButtonElement={<IconButton style={IconButtonStyle}><i className="material-icons">more_vert</i></IconButton>}
			            		onChange={this.handleChange}
			            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			            		menuStyle={{minWidth: '150px'}}>
			            		<MenuItem
			              			primaryText="Details"
			              			style={{fontSize: '14px', lineHeight: '48px'}}
			                        />
	            				<MenuItem
									primaryText="Refresh"
									style={{fontSize: '14px', lineHeight: '48px'}}
									/>
	          				</IconMenu>
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
							<IconMenu
	            				iconButtonElement={<IconButton style={IconButtonStyle}><i className="material-icons">more_vert</i></IconButton>}
			            		onChange={this.handleChange}
			            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			            		menuStyle={{minWidth: '150px'}}>
			            		<MenuItem
			              			primaryText="Details"
			              			style={{fontSize: '14px', lineHeight: '48px'}}
			                        />
	            				<MenuItem
									primaryText="Refresh"
									style={{fontSize: '14px', lineHeight: '48px'}}
									/>
	          				</IconMenu>
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
							<IconMenu
	            				iconButtonElement={<IconButton style={IconButtonStyle}><i className="material-icons">more_vert</i></IconButton>}
			            		onChange={this.handleChange}
			            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			            		menuStyle={{minWidth: '150px'}}>
			            		<MenuItem
			              			primaryText="Details"
			              			style={{fontSize: '14px', lineHeight: '48px'}}
			                        />
	            				<MenuItem
									primaryText="Refresh"
									style={{fontSize: '14px', lineHeight: '48px'}}
									/>
	          				</IconMenu>
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
							<IconMenu
	            				iconButtonElement={<IconButton style={IconButtonStyle}><i className="material-icons">more_vert</i></IconButton>}
			            		onChange={this.handleChange}
			            		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			            		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			            		menuStyle={{minWidth: '150px'}}>
			            		<MenuItem
			              			primaryText="Details"
			              			style={{fontSize: '14px', lineHeight: '48px'}}
			                        />
	            				<MenuItem
									primaryText="Refresh"
									style={{fontSize: '14px', lineHeight: '48px'}}
									/>
	          				</IconMenu>
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
			<section className="chapter">
				<article className="article">
					<h2
		              className={classnames('article-title', {
		                'bg-color-medlight': ['11'].indexOf(colorOption) >= 0,
		                'bg-color-meddark': ['21'].indexOf(colorOption) >= 0,
		                'bg-color-primary': ['12', '22'].indexOf(colorOption) >= 0,
		                'bg-color-success': ['13', '23'].indexOf(colorOption) >= 0,
		                'bg-color-info': ['14', '24'].indexOf(colorOption) >= 0,
		                'bg-color-warning': ['15', '25'].indexOf(colorOption) >= 0,
		                'bg-color-danger': ['16', '26'].indexOf(colorOption) >= 0
		                  })}>
		                  <i className="material-icons">dashboard</i> Dashboard</h2>
				  	<QueueAnim type="bottom" className="ui-animate main-content">
						<div key="1"><Statusboxes /></div>
  				        <div key="2"><Main /></div>
  				        <div key="3"><Engagement /></div>
  			      	</QueueAnim>
				</article>
			</section>
		);
  	}
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});


module.exports = connect(
    mapStateToProps
)(DashboardContent);
