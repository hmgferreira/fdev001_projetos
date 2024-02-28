import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

const Util = {
    setToken: async (token) => {
        try {
            await AsyncStorage.setItem('token@projetoApp', token);
        } catch (e) {
            Alert.alert('Oops', 'Erro ao armazenar o token', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    },
    getToken: async () => {
        try {
            const token = await AsyncStorage.getItem('token@projetoApp');
            return token;
        } catch (e) {
            Alert.alert('Oops', 'Erro ao consultar o token', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    },
    removeItem: async () => {
        try {
            await AsyncStorage.removeItem('token@projetoApp');
        } catch (e) {
            Alert.alert('Oops', 'Erro ao remover o token', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    }
};

export default Util;