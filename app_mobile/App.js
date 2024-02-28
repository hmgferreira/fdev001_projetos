import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PublicRoutes from './src/routes/PublicRoutes';
import PrivateRoutes from './src/routes/PrivateRoutes';

import AuthContext from './src/contexts/AuthContext';
import { useEffect, useState } from 'react';

import 'react-native-gesture-handler';
import Util from './src/config/Util';

export default function App() {

  const[logado, setLogado] = useState(false);

  async function checaLogado() {
    const token = await Util.getToken();
    
    if(token != null) {
      setLogado(true);
    }
  }

  useEffect(() => {
    checaLogado();
  }, []);

  return (
    <AuthContext.Provider value={{ logado, setLogado }}>
      <View style={styles.container}>
        {logado ? <PrivateRoutes /> : <PublicRoutes />}
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
