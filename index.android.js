//index.android.js; place code in here for android

//Import a library to help create a component.
import React from 'react';
//import destructure technique '{}' - I only want one more propery of this library
import { /*Text, */AppRegistry, View } from 'react-native';
//component nesting - the fully qualified path is needed because the file name may not be unique.
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component.
/*Other way to write the below with ESLint errors
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};
*/

const App = () => (
    //jsx
    // <Text>Some Text</Text>
    //Multiple different components must be wrapped in a View.
    //flex: 1 will expand the component to fill the entire area of the screen.
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);


/*
Render it to the device.

Render an application called albums and 
call a function that returns the first function 
to run in the application.


*/

AppRegistry.registerComponent('albums', () => App);