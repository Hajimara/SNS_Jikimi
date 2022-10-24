import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <SafeAreaView>
      <Image 
      style={styles.stretch}
      source={require('../assets/images/loadingbg.jpg')} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    stretch: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
      },
});
export default Loading;
