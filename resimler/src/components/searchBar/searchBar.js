import React,{Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            search : ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.pressEnter = this.pressEnter.bind(this);
        this.searchImage = this.searchImage.bind(this);
    }

    inputChange(event) {
    this.setState({
        search: event.target.value
    })
    }

    searchImage(){
        this.props.onSearchImage(this.state.search);
    }

    pressEnter(e){
        if(e.key==='Enter'){
            this.searchImage();
        }
    }

    render() {
        return(
            <div className='search-bar-container ui input'>
                <input  type='text'
                        placeholder='Ara'
                        value={this.state.search}
                        onChange={this.inputChange}
                        onKeyPress={this.pressEnter}
                />
                <button className="ui icon button"
                onClick={this.searchImage}>
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }
}


export default SearchBar;