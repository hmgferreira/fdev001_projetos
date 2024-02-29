import { Text, TouchableHighlight, View } from "react-native";

export default function ButtonCircle(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={{ 
            width: 50, 
            height: 50, 
            borderRadius: '50%', 
            backgroundColor: 'green',
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <View>
                <Text style={{ color: '#FFF', fontSize: 40, marginTop: -8 }}>
                    {props.title}
                </Text>
            </View>
        </TouchableHighlight>
    )
}