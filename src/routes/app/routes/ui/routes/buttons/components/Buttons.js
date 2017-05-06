import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import QueueAnim from 'rc-queue-anim';


const mWidthStyle = {
  minWidth: '135px'
};

class PageContent extends React.Component {
  render() {
    const { colorOption } = this.props;
    const FAB = () => (
      <div className="row">
        <div className="col-xl-6">
          <div
            className={classnames('box', {
				'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
				'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
              })}>
            <div className="box-header">FAB</div>
            <div className="box-body text-center">

              <FloatingActionButton>
                <ContentAdd />
              </FloatingActionButton>
              <span className="space" />

              <FloatingActionButton mini>
                <ContentAdd />
              </FloatingActionButton>
              <span className="space space-md" />

              <FloatingActionButton secondary>
                <ContentAdd />
              </FloatingActionButton>
              <span className="space" />

              <FloatingActionButton mini secondary>
                <ContentAdd />
              </FloatingActionButton>
              <span className="space space-md" />

              <FloatingActionButton disabled>
                <ContentAdd />
              </FloatingActionButton>
              <span className="space" />

              <FloatingActionButton mini disabled>
                <ContentAdd />
              </FloatingActionButton>

            </div>
          </div>

        </div>
        <div className="col-xl-6">

			<div
              className={classnames('box', {
				    'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
  					'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                })}>
            <div className="box-header">Icon Button</div>
            <div className="box-body text-center">

              <IconButton> <ContentAdd /> </IconButton>
              <span className="space" />

              <IconButton> <ContentAdd /> </IconButton>
              <span className="space" />

              <IconButton disabled> <ContentAdd /> </IconButton>

            </div>
          </div>

        </div>
      </div>
    );

    const Raised = () => (
      <div className="row">
        <div className="col-xl-6">

			<div
              className={classnames('box', {
					'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
  					'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                })}>
            <div className="box-header">Raised</div>
            <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="Default" /><div className="divider" />
              <RaisedButton style={mWidthStyle} label="Primary" primary /><div className="divider" />
              <RaisedButton style={mWidthStyle} label="Secondary" secondary /><div className="divider" />
              <RaisedButton style={mWidthStyle} label="Disabled" disabled /><div className="divider" />
            </div>
          </div>

        </div>
        <div className="col-xl-6">

			<div
              className={classnames('box', {
			  		'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
					'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
                })}>
            <div className="box-header">Flat</div>
            <div className="box-body text-center">
              <FlatButton style={mWidthStyle} label="Default" /><div className="divider" />
              <FlatButton style={mWidthStyle} label="Primary" primary /><div className="divider" />
              <FlatButton style={mWidthStyle} label="Secondary" secondary /><div className="divider" />
              <FlatButton style={mWidthStyle} label="Disabled" disabled /><div className="divider" />
            </div>
          </div>

        </div>
      </div>
    );

    const Raised2 = () => (
      <div className="row">
        <div className="col-xl-6">
			<div
			  className={classnames('box', {
				'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
  				'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
				})}>
            <div className="box-header">Raised</div>
            <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="Left Icon" labelPosition="after" primary icon={<ContentAdd />} /><div className="divider" />
              <RaisedButton style={mWidthStyle} label="Right Icon" labelPosition="before" secondary icon={<ContentAdd />} /><div className="divider" />
              <RaisedButton style={mWidthStyle} label="Link Button" href="https://github.com/" target="_blank" secondary /><div className="divider" />
            </div>
          </div>

        </div>
        <div className="col-xl-6">
			<div
			  className={classnames('box', {
				'bg-color-medlight': ['11', '12', '13', '14', '15', '16'].indexOf(colorOption) >= 0,
				'bg-color-meddark': ['21', '22', '23', '24', '25', '26'].indexOf(colorOption) >= 0
				})}>
            <div className="box-header">Flat</div>
            <div className="box-body text-center">
              <FlatButton style={mWidthStyle} label="Left Icon" labelPosition="after" primary icon={<ContentAdd />} /><div className="divider" />
              <FlatButton style={mWidthStyle} label="Right Icon" labelPosition="before" secondary icon={<ContentAdd />} /><div className="divider" />
              <FlatButton style={mWidthStyle} label="Link Button" href="https://github.com/" target="_blank" secondary /><div className="divider" />
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
                		Material Buttons</h2>

          		<QueueAnim type="bottom" className="ui-animate main-content">
            		<div key="1"><FAB /></div>
		            <div key="2"><Raised /></div>
		            <div key="3"><Raised2 /></div>
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
)(PageContent);
