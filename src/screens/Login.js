import React from 'react';
import {ImageBackground, Text, SafeAreaView, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={styles.view}>
      <ImageBackground 
        source={require('../assets/images/loginbg.png')}
        style={styles.image}
        blurRadius={1}
      >
      <Text>hi login</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
    }
});

// const style = StyleSheet.create/

export default Login;
