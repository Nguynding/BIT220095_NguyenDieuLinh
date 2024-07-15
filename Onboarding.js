import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../../img/1.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image 
          source={require('../../img/2.png')}
          style={styles.image} 
        />
        <View style={styles.container}>
          <Text style={styles.title}>  Welcome {"\n"}to our Store</Text>
          <Text style={{color:'#FCFCFC',marginBottom:20,fontSize:17,}}>Get your groceries in as fast as one hour {"\n"} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 380,
  },
  image: {
    marginBottom: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '500',
    color: 'white',
  },
  button: {
    width: 353,
    height: 67,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Onboarding;