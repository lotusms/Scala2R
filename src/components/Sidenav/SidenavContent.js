import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {Link, hashHistory} from 'react-router';
import moment from 'moment';
import 'jquery-slimscroll/jquery.slimscroll.min';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';


import Button from 'material-ui/Button';

class SidebarContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: moment()
		};
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({date: moment()});
	}

	getHours() {
    	return this.state.date.format('HH')
  	}
  	getMinutes() {
	    return this.state.date.format('mm')
  	}

  	getSeconds() {
	    return this.state.date.format('ss')
  	}


	componentDidMount() {

		this.timerID = setInterval(() => this.tick(), 1000);
		const nav = this.nav;
		const $nav = $(nav);

		// scroll
		$nav.slimscroll({height: '100%'});

		// Append icon to submenu
		// Append to child `div`
		$nav.find('.prepend-icon').children('div').prepend('<i class="material-icons">keyboard_arrow_right</i>');

		// AccordionNav
		const slideTime = 250;
		const $lists = $nav.find('ul').parent('li');
		$lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
		const $As = $lists.children('a');

		// Disable A link that has ul
		$As.on('click', event => event.preventDefault());

		// Accordion nav
		$nav.on('click', (e) => {

			const target = e.target;
			const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
			if (!$parentLi.length)
				return; // return if doesn't click on li
			const $subUl = $parentLi.children('ul');

			// let depth = $subUl.parents().length; // but some li has no sub ul, so...
			const depth = $parentLi.parents().length + 1;

			// filter out all elements (except target) at current depth or greater
			const allAtDepth = $nav.find('ul').filter(function() {
				if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
					return true;
				}
				return false;
			});
			allAtDepth.slideUp(slideTime).closest('li').removeClass('open');

			// Toggle target
			if ($parentLi.has('ul').length) {
				$parentLi.toggleClass('open');
			}
			$subUl.stop().slideToggle(slideTime);

		});

		// HighlightActiveItems
		const $links = $nav.find('a');
		const currentLocation = hashHistory.getCurrentLocation();
		function highlightActive(pathname) {
			const path = `#${pathname}`;

			$links.each((i, link) => {
				const $link = $(link);
				const $li = $link.parent('li');
				const href = $link.attr('href');
				// console.log(href);

				if ($li.hasClass('active')) {
					$li.removeClass('active');
				}
				if (path.indexOf(href) === 0) {
					$li.addClass('active');
				}
			});
		}

		highlightActive(currentLocation.pathname);
		hashHistory.listen((location) => {
			highlightActive(location.pathname);
		});
	}

	render() {
        const { colorOption } = this.props;
		return (
			<ul className="nav"	ref={(c) => { this.nav = c;  }}>
				<li className="today">
					<Row className="clock" center="xs">
				    	<Row center="xs">
							<span className="hours">{this.getHours()}</span>
							<span>:</span>
							<span className="min">{this.getMinutes()}</span>

							<span className="sec">{this.getSeconds()}</span>
				    	</Row>
					</Row>
					<Row className="date" center="xs">
						<p className="today-is">{this.state.date.format('MMM DD')}, {this.state.date.format('YYYY')}</p>
					</Row>
				</li>
				<li className="nav-header">
					<span>Navigation</span>
				</li>
				<li>
					<Button href="#/app/dashboard">
						<i className="nav-icon material-icons">dashboard</i>
						<span className="nav-text">Dashboard</span>
					</Button>
				</li>
				<li>
					<Button href="#/app/playlist">
						<i className="nav-icon material-icons">featured_play_list</i>
						<span className="nav-text">Playlist</span>
					</Button>
				</li>
			</ul>
		);
	}
}

const mapStateToProps = state => ({
    colorOption: state.settings.colorOption
});


module.exports = connect(
    mapStateToProps
)(SidebarContent);
