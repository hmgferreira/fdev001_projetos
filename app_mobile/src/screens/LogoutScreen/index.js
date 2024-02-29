import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AuthContext from "../../contexts/AuthContext";
import Util from "../../config/Util";

export default function LogoutScreen() {

    const{ setLogado } = useContext(AuthContext);

    useEffect(() => {
        Util.removeToken();
        setLogado(false);
    }, []);

    return (
        <View>
            <Text>Logout</Text>
        </View>
    )
}