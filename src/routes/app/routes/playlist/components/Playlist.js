import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import classnames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import DetailsIcon from 'material-ui/svg-icons/action/info-outline';
import InfoIcon from 'material-ui/svg-icons/navigation/more-vert';
import HealthyIcon from 'material-ui/svg-icons/places/fitness-center';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

const IconButtonStyle = {
	color: '#eee'
};

class PlaylistContent extends React.Component {
  	render() {
    	const { colorOption } = this.props;

		const styles = {
			propContainer: {
				width: 200,
				overflow: 'hidden',
				margin: '20px auto 0',
			},
			propToggleHeader: {
				margin: '20px auto 10px',
			},
			};
     const filters = {
		 
	 }
const tableData = [
		{
			"id": 1866,
			"name": "fdg",
			"playlistType": "DATA_PLAYLIST",
			"lastModified": "2017-04-26 09:27:10",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/68590_medium.png",
				"small": "/resources/thumbnails/68590_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/68590_playlist.png",
				"medium": "/resources/thumbnails/68590_large.png",
				"large": "/resources/thumbnails/68590_extraLarge.png"
			},
			"prettifyDuration": "(0:00:07.00)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 148,
			"name": "Master_2732x3840",
			"description": "A simple playlist that includes the 3 videos commissioned for the grand opening of the wall. It also includes \"black.jpg\" in between each video to control the length of the pause between each.",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2017-04-24 13:07:40",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/7042_medium.png",
				"small": "/resources/thumbnails/7042_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/7042_playlist.png",
				"medium": "/resources/thumbnails/7042_large.png",
				"large": "/resources/thumbnails/7042_extraLarge.png"
			},
			"prettifyDuration": "(0:05:21.71 - 0:05:35.71)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": false
		},
		{
			"id": 1859,
			"name": "ant",
			"description": "adf",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2017-04-21 13:53:10",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/8792_medium.png",
				"small": "/resources/thumbnails/8792_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/8792_playlist.png",
				"medium": "/resources/thumbnails/8792_large.png",
				"large": "/resources/thumbnails/8792_extraLarge.png"
			},
			"prettifyDuration": "(0:01:46.76 - 0:02:00.76)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": false
		},
		{
			"id": 1861,
			"name": "New Test Playlist",
			"description": "This is a new playlist for testing this feature",
			"playlistType": "DATA_PLAYLIST",
			"lastModified": "2017-04-05 08:06:06",
			"prettifyDuration": "(0)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 1860,
			"name": "Scala UI/UX Playlist",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2017-03-30 11:04:06",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/68588_medium.png",
				"small": "/resources/thumbnails/68588_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/68588_playlist.png",
				"medium": "/resources/thumbnails/68588_large.png",
				"large": "/resources/thumbnails/68588_extraLarge.png"
			},
			"prettifyDuration": "(17:05:14.00)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 1858,
			"name": "Luis",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2017-02-15 14:07:22",
			"prettifyDuration": "(0)",
			"enableSmartPlaylist": true,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 358,
			"name": "16:9 Transparent (DO NOT EDIT OR DELETE)",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2014-08-21 15:35:02",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/6780_medium.png",
				"small": "/resources/thumbnails/6780_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/6780_playlist.png",
				"medium": "/resources/thumbnails/6780_large.png",
				"large": "/resources/thumbnails/6780_extraLarge.png"
			},
			"prettifyDuration": "(0:00:00.00)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 149,
			"name": "Smart Playlist Example",
			"description": "An example of how smart playlists can be used to serve up new content automatically. The best way to do this is via categories or file name conventions. E.g. Museum marketing files are always uploaded with \"MusMrkt_\" as a prefix to the file name.",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2014-08-21 15:34:19",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/8795_medium.png",
				"small": "/resources/thumbnails/8795_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/8795_playlist.png",
				"medium": "/resources/thumbnails/8795_large.png",
				"large": "/resources/thumbnails/8795_extraLarge.png"
			},
			"prettifyDuration": "(0:00:10.00)",
			"enableSmartPlaylist": true,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 366,
			"name": "Calibration",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2014-08-21 15:23:10",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/8792_medium.png",
				"small": "/resources/thumbnails/8792_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/8792_playlist.png",
				"medium": "/resources/thumbnails/8792_large.png",
				"large": "/resources/thumbnails/8792_extraLarge.png"
			},
			"prettifyDuration": "(0:00:07.00)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 363,
			"name": "sub-playlist",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2014-08-05 04:25:10",
			"thumbnailDownloadPaths": {
				"extraSmall": "/webapp/images/html.png",
				"small": "/webapp/images/html.png",
				"mediumSmall": "/webapp/images/html.png",
				"medium": "/webapp/images/html.png",
				"large": "/webapp/images/html.png"
			},
			"prettifyDuration": "(0:00:30.00)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": true
		},
		{
			"id": 359,
			"name": "16:9 Content",
			"playlistType": "MEDIA_PLAYLIST",
			"lastModified": "2014-08-04 20:37:31",
			"thumbnailDownloadPaths": {
				"extraSmall": "/resources/thumbnails/6788_medium.png",
				"small": "/resources/thumbnails/6788_mediumLarge.png",
				"mediumSmall": "/resources/thumbnails/6788_playlist.png",
				"medium": "/resources/thumbnails/6788_large.png",
				"large": "/resources/thumbnails/6788_extraLarge.png"
			},
			"prettifyDuration": "(0:00:30.12)",
			"enableSmartPlaylist": false,
			"readOnly": false,
			"healthy": false
		}
];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '500px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

   getInitialState= () => {
        return { showResults: false };
    };
    onClick = () =>{
        this.setState({ showResults: true });
    };

  render() {
    return (
      <article className="article">
        <div className="row">
          <div className="col-xl-9">
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
                        >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
                            >

                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Name">Playlist Type</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Status">Playlist Name</TableHeaderColumn>
				  <TableHeaderColumn>Playlist Health</TableHeaderColumn>
				  <TableHeaderColumn>Total Items</TableHeaderColumn>
				  <TableHeaderColumn tooltip="Click for more Info">Details</TableHeaderColumn>
				  <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
                            >
                {tableData.map((row, index) => (
                  <TableRow key={index} selected={row.selected}>
                    <TableRowColumn>{index}</TableRowColumn>
					<TableRowColumn>{row.playlistType}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn tooltip="Healthy"><HealthyIcon/></TableRowColumn>
					<TableRowColumn>5</TableRowColumn>
					<TableRowColumn><DetailsIcon/></TableRowColumn>
					<TableRowColumn><InfoIcon/></TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
                            >
                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Name">Playlist Type</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Status">Playlist Name</TableHeaderColumn>
				  <TableHeaderColumn>Playlist Health</TableHeaderColumn>
				  <TableHeaderColumn>Total Items</TableHeaderColumn>
				  <TableHeaderColumn>Details</TableHeaderColumn>
				  <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div id="table-filters" className="col-xl-3">
            <h6>Table Properties</h6>
            <TextField
              floatingLabelText="Table Body Height"
              defaultValue={this.state.height}
              onChange={this.handleChange}
            />
            <Toggle
              name="fixedHeader"
              label="Fixed Header"
              onToggle={this.handleToggle}
              defaultToggled={this.state.fixedHeader}
            />
            <Toggle
              name="fixedFooter"
              label="Fixed Footer"
              onToggle={this.handleToggle}
              defaultToggled={this.state.fixedFooter}
            />
            <Toggle
              name="selectable"
              label="Selectable"
              onToggle={this.handleToggle}
              defaultToggled={this.state.selectable}
            />
            <Toggle
              name="multiSelectable"
              label="Multi-Selectable"
              onToggle={this.handleToggle}
              defaultToggled={this.state.multiSelectable}
            />
            <Toggle
              name="enableSelectAll"
              label="Enable Select All"
              onToggle={this.handleToggle}
              defaultToggled={this.state.enableSelectAll}
            />
            <h6>TableBody Properties</h6>
            <Toggle
              name="deselectOnClickaway"
              label="Deselect On Clickaway"
              onToggle={this.handleToggle}
              defaultToggled={this.state.deselectOnClickaway}
            />
            <Toggle
              name="stripedRows"
              label="Stripe Rows"
              onToggle={this.handleToggle}
              defaultToggled={this.state.stripedRows}
            />
            <Toggle
              name="showRowHover"
              label="Show Row Hover"
              onToggle={this.handleToggle}
              defaultToggled={this.state.showRowHover}
            />
            <h6>Multiple Properties</h6>
            <Toggle
              name="showCheckboxes"
              label="Show Checkboxes"
              onToggle={this.handleToggle}
              defaultToggled={this.state.showCheckboxes}
            />
          </div>
        </div>
      </article>
    );
  }
}

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
		                  <i className="material-icons">featured_play_list</i> Playlist</h2>
				  	<QueueAnim type="bottom" className="ui-animate main-content">
  				        <div key="1"><Main /></div>
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
)(PlaylistContent);
