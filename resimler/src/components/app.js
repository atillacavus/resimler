import React, {Component} from 'react';
import SearchBar from './searchBar/searchBar';
import './app.css';
import axios from 'axios';
import ImageList from "./image/imageList";

class App extends Component {

    state = {
        images: []
    }

    onSearchImage = async (search) => {
       const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: search
            },
            headers: {
                Authorization: 'Client-ID 42361e2a1e01e0492d8ec725a903fb556208db55f2f1643ddcc9f7c71581a4fd'
            }
        })

        this.setState({
            images: result.data.results
        });

    }

    render() {
        return (
            <div className='app-container'>
                <SearchBar onSearchImage={this.onSearchImage}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}


export default App;

