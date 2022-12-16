import React, { Component } from 'react';
import store from '../redux/store';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        store.dispatch({
            type: 'SEARCH',
            payload: {
                searchLine: this.state.searchLine
            }
        });
    }
   
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        <p className='search-box__text'>Search movie by title:</p> 
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="For example, Chelovek Pauk"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;