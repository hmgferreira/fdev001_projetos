import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export default function Banners() {
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
        width: '100%',
        height: 100,
        borderRadius: 5,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    }
});
