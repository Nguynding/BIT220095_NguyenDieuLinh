// src/screens/SignIn.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../img/3.png')} style={{ marginTop: -79 }} />
      <View style={styles.content}>
        <Text style={styles.title }>Get your groceries {"\n"}with nectar</Text>
        <View style={styles.horizontalView}>
          <Image source={require('../../img/4.png')} style={styles.icon} />
          <TextInput
            style={[styles.input, { color: 'black', fontWeight: '500' }]}
            placeholder="+880"
            keyboardType="number-pad"
          />
        </View>
        <Text style={{ marginTop:20, fontSize:14, marginBottom:20, color: 'gray' }}>Or connect with social media {"\n"}</Text>
        <Image source={require('../../img/5.png')} style={{ marginBottom:10, marginLeft: 10, }} />
        <Image source={require('../../img/6.png')} style={{ marginBottom:10, marginLeft: 10, }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    marginTop: 50, // Điều chỉnh giá trị này để di chuyển toàn bộ nội dung xuống
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'left',
    marginLeft: -100,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft: 40,
  },
  input: {
    
    fontSize: 17,
    width: '80%',
    height: 40,
    borderBottomColor: '#D3D3D3',
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1,
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    marginEnd: 20,
  },
});

export default SignIn;
