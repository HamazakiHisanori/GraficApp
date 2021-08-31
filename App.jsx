import React from 'react';
import {
  Text, StyleSheet, View, ImageBackground, TouchableOpacity, Animated,
} from 'react-native';

const image = require('./assets/snow.png');

export default function App() {
  return (
    <ImageBackground source={image} style={styles.image}>

      <View style={styles.container}>

        <View style={styles.link}>
          <TouchableOpacity style={styles.linkText}>
            <Animated.Text style={styles.text}>sample</Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>sample</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>sample</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>sample</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'yellow',
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 32,
    padding: 16,
  },
});
