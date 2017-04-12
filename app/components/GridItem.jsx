const React = require('react');

class GridItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, homepage, description, html_url, watchers} = this.props;
        return (
            <div className="grid-item_links">
                <a href={homepage} title={description} target="_blank">{name}</a>
                <div>Stars: {watchers} <a href={html_url} target="_blank">Git</a></div>
            </div>
        )
    }
}

module.exports = GridItem;