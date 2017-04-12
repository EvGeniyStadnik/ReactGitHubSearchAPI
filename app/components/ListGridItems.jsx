const React = require('react');
import {observer, inject} from 'mobx-react';

const GridItem = require('GridItem');

@inject(['filteredGridStore'])
class ListGridItems extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const grid = this.props.filteredGridStore.filteredGrid;
        const renderGrid = () => {
            return grid.map((item) => {
                return <GridItem key={item.id} {...item}/>
            })
        };

        return (
            <div>
                {renderGrid()}
            </div>
        )
    }
}

module.exports = ListGridItems;

