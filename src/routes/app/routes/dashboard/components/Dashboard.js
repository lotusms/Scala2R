import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import KPIsChart from './KPIsChart';
import AquisitionChart from './AquisitionChart';
import StatBoxes from './StatBoxes';
import EngagementStats from './EngagementStats';
import BenchmarkChart from './BenchmarkChart';

class DashboardContent extends React.Component {
  	render() {
    	const { colorOption } = this.props;

		const Main = () => (
	  		<div className="row">
		    	<div className="col-xl-6">
					<div
		              className={classnames('box', {
		                'bg-color-medlight': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
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
		                'bg-color-medlight': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
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
                'bg-color-medlight': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
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
		                'bg-color-light': ['11', '21'].indexOf(colorOption) >= 0,
		                'bg-color-dark': ['21', '31'].indexOf(colorOption) >= 0,
		                'bg-color-primary': ['22', '32'].indexOf(colorOption) >= 0,
		                'bg-color-success': ['23', '33'].indexOf(colorOption) >= 0,
		                'bg-color-info': ['24', '34'].indexOf(colorOption) >= 0,
		                'bg-color-warning': ['25', '35'].indexOf(colorOption) >= 0,
		                'bg-color-danger': ['26', '36'].indexOf(colorOption) >= 0
		                  })}>
		                  Dashboard</h2>
				  	<QueueAnim type="bottom" className="ui-animate main-content">
  				        <Main />
  				        <div key="2"><StatBoxes /></div>
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
