import React from 'react';
//The View property is a wrapper for other props
import { Text, View } from 'react-native';

const Header = (props) => {
    //destructuring
    const { textStyle, viewStyle } = styles;

    return (
    //This syntax is called a prop in ReactNative
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

//In ReactNative the styling is always included in the component itself.
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        //camel case instead of dashed spacing
        fontSize: 20
    } 
};

//Make component available to other parts of the app.
export default Header;
