import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import LogoutScreen from "../screens/LogoutScreen";
import ClientesListaScreen from "../screens/ClientesScreen/ClientesListaScreen";
import ClientesFormScreen from "../screens/ClientesScreen/ClientesFormScreen";

// const Stack = createNativeStackNavigator();
const Stack = createDrawerNavigator();

export default function PrivateRoutes() {
    return(
        <NavigationContainer>
             <Stack.Navigator initialRouteName="Clientes">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Contatos" component={HomeScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: true }} /> */}
                <Stack.Screen name="Clientes" component={ClientesListaScreen} options={{ headerShown: true }} />
                <Stack.Screen name="ClientesNovo" component={ClientesFormScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Sair" component={LogoutScreen} options={{ headerShown: false }} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}