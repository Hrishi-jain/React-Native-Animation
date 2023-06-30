/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  fontFamily,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const LoginPage = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name,setname]=useState();
  const [email,setEmail]=useState();
  const [Password,setPassword]=useState();

const login =async()=>{
      const {data}=await axios.post('http://192.168.29.151:3000/login',{name:name,email:email});
      console.log(data);
      if(data){
        navigation.navigate('Front',{name:name,email:email});
      }
}

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Format</Text>
      <Text
        style={[
          styles.description,
          {
            fontFamily: 'DancingScript-Bold',
            fontSize: 20,
          },
        ]}>
        You can reach us anywhere via any@hrishi.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setname}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={Password}
          onChangeText={setPassword}
        />
      </View>
      <View
        style={[
          styles.wrapper,
          {
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 20,
            paddingRight: 10,
          },
        ]}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text
          style={[
            styles.wrapperText,
            {
              paddingLeft: 20,
              paddingTop: 5,
            },
          ]}>
          I have read and agreed with the T&C
        </Text>
      </View>
      <TouchableOpacity
        onPress={login}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: toggleCheckBox ? '#007aff' : '#aaaaaa',
            marginTop: toggleCheckBox ? 10 : 100,
          },
        ]}
        disabled={!toggleCheckBox}>
        <Text style={styles.buttonText}>Logins</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontFamily: 'bold',
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
  },
  multiineStyle: {},
});

export default LoginPage;
