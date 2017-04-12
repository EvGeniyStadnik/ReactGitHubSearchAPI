const React = require('react');
import {observer, inject} from 'mobx-react';

const ListGridItems = require('ListGridItems');
const SearchGidAPI = require('SearchGidAPI');
const GridItemSearch = require('GridItemSearch');
import filteredGridStore from 'filteredGridStore';

@observer(['filteredGridStore'])
class SearchApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            grid: undefined,
            errorMessage: '',
            searchText: ''
        }
    }

    hendleSearch = () => {
        if(!this.state.grid){
            this.setState({isLoading: true});
            SearchGidAPI.getGridGit().then((items) => {
                this.setState({
                    grid:  items,
                    isLoading: false
                })
            }, (e) => {
                this.setState({
                    errorMessage: e.message
                });
            })
        }
    };

    render(){
        const {grid, errorMessage, isLoading} = this.state;
        const searchText = this.props.filteredGridStore.searchText || "";
        console.log('grid: ', grid);
        const showListGrid = () => {
            if (isLoading) {
                return <div>Loading...</div>
            } else if(grid) {
                const filteredGrid = SearchGidAPI.filterItems(grid, searchText);
                filteredGridStore.setFilteredGrid(filteredGrid);
                return (
                    <div>
                        <GridItemSearch />
                        <ListGridItems />
                    </div>
                )
            } else if(errorMessage){
                return <p>{errorMessage}</p>
            }
        };
        return (
            <div onClick={this.hendleSearch} className="row">
                <div className="column small-centered small-8 medium-6 large-4 main-section">
                    <p>Search Git repositories that have been written in JavaScript</p>
                    <p>Sorted by stars in descending order</p>
                    <button className="button">GitHub Search API</button>
                    {showListGrid()}
                </div>
            </div>
        )
    }
}

module.exports = SearchApp;