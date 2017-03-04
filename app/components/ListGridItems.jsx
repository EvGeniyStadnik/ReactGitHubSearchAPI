const React = require('react');

const GridItem = require('GridItem');

class ListGridItems extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {grid} = this.props;
        //console.log('grid: ', grid);
        const renderGrid = () => {
            return grid.map((item) => {
                return <GridItem key={item.id} name={item.name} gitUrl={item.html_url} description={item.description} watchers={item.watchers} homepage={item.homepage}/>
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

