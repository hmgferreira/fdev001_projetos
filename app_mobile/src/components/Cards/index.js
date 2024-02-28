import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export default function Cards() {
    return (
        <TouchableHighlight>
            <View style={styles.container}>
                <Text>Teste</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        borderRadius: 5,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7

    }
});
