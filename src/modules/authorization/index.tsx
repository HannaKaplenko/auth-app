import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const AuthorizationScreen = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const navigation = useNavigation ();
  const [timer, setTimer] = useState(0);
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev >= 10 ? 0 : prev + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer >= 8) {
      setTextColor('red');
    } else {
      setTextColor('black');
    }
  }, [timer]);

  const OnChangeLogin = (text: string) => {
    setForm(prev => ({...form, username: text}));
  };

  const OnChangePassword = (text: string) => {
    setForm(prev => ({...form, password: text}));
  };
  const [showPassword, setShowPassword] = useState(true);

  const onAuthorize = async () => {
    // const [error, setError] = useState ("")
    try {
      // console.log('Form:', form);
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });
      const data = await response.json();

if (data.accessToken) {
  navigation.navigate("ProductsList");
  // console.log ("Login succsessful", data);
}
 
      // console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Ur Needs</Text>
          <Text style={styles.label}>Введіть username</Text>
          <TextInput
            value={form.username}
            onChangeText={OnChangeLogin}
            placeholder="Введіть логін"
            style={styles.input}
          />

          <Text style={styles.label}>Введіть password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.password}
              onChangeText={OnChangePassword}
              placeholder="Введіть пароль"
              // secureTextEntry={!showPassword}

              style={styles.input}
            />
            {/* <TouchableOpacity style={styles.eyeButton} onPressIn={() => setShowPassword (!showPassword)}>
            <Image source= {require("../img/eye.png")} style= {styles.Image} accessibilityLabel="eye"/> 
            </TouchableOpacity> */}
          </View>
          <Text style={styles.message}>
            Якщо ви забули пароль зверніться до адміністратора
          </Text>

          <TouchableOpacity style={styles.button} onPress={onAuthorize}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={[styles.timerText, {color: textColor}]}>
            Timer:{timer}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
