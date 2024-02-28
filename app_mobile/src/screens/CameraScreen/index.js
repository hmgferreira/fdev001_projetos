import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    async function getPermission() {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        requestPermission(cameraPermission);
    }

    if(!permission) {
        getPermission();
        return <Text>Camera não permitida. Por favor, permita acesso a sua camera</Text>
    }

    if(permission.granted === false) {
        getPermission();
        return <Text>Camera não permitida. Por favor, permita acesso a sua camera</Text>
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
  

   
    return (
        <>
            <View style={styles.container}>
                <Camera style={styles.camera} type={type}>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  