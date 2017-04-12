let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
import {observer, Provider} from 'mobx-react';

let SearchApp = require('SearchApp');

import filteredGridStore from 'filteredGridStore';

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

const stores = {filteredGridStore};

ReactDOM.render(
    <Provider {...stores}>
        <SearchApp/>
    </Provider>,
    document.getElementById('app')
)
