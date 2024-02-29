import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Api from '../../config/Api';
import { Paragraf, TextH1, TextH3 } from '../../components/Texts';
import ButtonCircle from '../../components/ButtonCircle';
export default function ClientesListaScreen(props) {

    const[list, setList] = useState([]);

    async function getClientes() {
        const response = await Api.get('clientes');
        setList(response.data);
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <>
            <View style={{ padding: 20, backgroundColor: '#F7F7F7' }}>

                <View style={{ alignItems: 'end', marginBottom: 10 }}>
                    <ButtonCircle title="+" onPress={() => props.navigation.navigate('ClientesNovo')} />
                </View>

                {list.map((item, indice) => (
                    <View key={indice} style={styles.card}>
                        <TextH3>{item.nome}</TextH3>
                        <Paragraf>{item.cpf}</Paragraf>
                    </View>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {},
    card: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#F1F1F1',
        borderBottomWidth: 1,
        borderColor: '#CCC'
        
    }
});