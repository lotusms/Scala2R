import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import JSONP from 'jsonp';
import ToggleDisplay from 'react-toggle-display';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';


const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class HeaderSearch extends React.Component {
	constructor(props) {
	    super(props);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.state = {
	      	dataSource : [],
	      	inputValue : '',
			show: false
		}
	}

	onUpdateInput(inputValue) {
		const self = this;
	    this.setState({
      		inputValue: inputValue
	    }, function() {
      		self.performSearch();
	    });
	}

	performSearch() {
	    const
      		self = this,
      		url  = googleAutoSuggestURL + this.state.inputValue;

	    if(this.state.inputValue !== '') {
      		JSONP(url, function(error, data) {
				let searchResults, retrievedSearchTerms;

        		if(error) return error;

        		searchResults = data[1];

        		retrievedSearchTerms = searchResults.map(function(result) {
          			return result[0];
        		});

        		self.setState({
          			dataSource: retrievedSearchTerms
        		});
      		});
	    }
  	}

	handleClick() {
	    this.setState({
	      	show: !this.state.show
	    });
  	}

	render() {
		return (
			<span>
				<ToggleDisplay show={this.state.show}>
					<AutoComplete
						dataSource    = {this.state.dataSource}
						onUpdateInput = {this.onUpdateInput}
						/>
				</ToggleDisplay>		
				<span className="open-search">
					<a href="javascript:;" onClick={ () => this.handleClick() }>
						<i className="material-icons">search</i>
					</a>
				</span>
			</span>
		);
	}
}

module.exports = HeaderSearch;
