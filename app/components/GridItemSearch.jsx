const React = require('react');

class GridItemSearch extends React.Component{
    constructor(props){
        super(props)
    }

    handleChange = () => {
        let searchText = this.refs.searchText.value;
        this.props.onSearch(searchText);
    };

    render(){
        return(
            <input type="text" ref='searchText' placeholder="Search by name of repositories" onChange={this.handleChange}/>
        )
    }
}

module.exports = GridItemSearch;

