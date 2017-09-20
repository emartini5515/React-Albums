import React, { Component } from 'react';
import { Text, View } from 'react-native';
//We use a library called Axios to make http ajax requests.
import axios from 'axios';

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

    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

//Make component available to other parts of the app.
export default AlbumList;
