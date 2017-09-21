import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//We use a library called Axios to make http ajax requests.
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

//Component base class is from the React library which our class extends.
//Class based components must always define a Render method which returns JSX.
class AlbumList extends Component {
    //Setting up default state with a class level property.
    //Initializing the component level state. 
    state = { albums: [] };

    //Lifecycle methods: Anytime our component is about to be rendered to the screen this event will be called.
    componentWillMount() {
        //This will return a promise. 
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //Set the initial state on the callback. 
        //Always use setState() to modify state
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        //.map is an array helper that takes in a fat arrow function which will be called for each item in the array.
        //{} wrapper references the js object within. 
        //key property is used to identify elements in the array. This should be unique. Ex. Guid
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state);

        return (
            //Allows for scrolling on the screen. The root view must have a style of flex: 1
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

//Make component available to other parts of the app.
export default AlbumList;
