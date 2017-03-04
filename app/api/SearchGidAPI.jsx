const axios = require('axios');

const requestUrl = 'https://api.github.com/search/repositories?q=language:js&sort=stars&order=desc';

module.exports = {
    getGridGit(){
        return axios.get(requestUrl).then((res) => {
            if(res.status !== 200){
                throw new Error(res.data.message);
            } else {
                return res.data.items;
            }
        }, (err) => {
            throw new Error(err.response.data.message)
        })
    },

    filterItems(grid, searchText){
        let filteredItems = grid.filter((item) => {
            return item.name.toLowerCase().indexOf(searchText) !== -1 || searchText.trim() === '';
        });
        return filteredItems;
    }
};