import {observable, action} from 'mobx';

class FilteredGridStore {

    @observable filteredGrid;
    @observable searchText;

    @action setFilteredGrid = (filteredGrid) => {
        this.filteredGrid = filteredGrid;
    };

    @action onhandleSearch = (searchText) => {
        this.searchText = searchText;
    }

}

const filteredGridStore = new FilteredGridStore();

export default filteredGridStore;
