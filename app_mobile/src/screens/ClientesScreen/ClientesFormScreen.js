import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Api from '../../config/Api';
import ButtonCircle from '../../components/ButtonCircle';

export default function ClientesFormScreen(props) {
    
    const[nome, setNome] = useState('');
    const[cpf, setCpf] = useState('');

    async function salvarCliente() {
        await Api.post('clientes', {
            nome: nome,
            cpf: cpf
        });

        setNome('');
        setCpf('');

        alert("Cliente registrado com sucesso!")
    }

    return (
        <>
            <View style={{ padding: 20, backgroundColor: '#F7F7F7' }}>

                <View style={{ alignItems: 'end', marginBottom: 10 }}>
                    <ButtonCircle title="<-" onPress={() => props.navigation.navigate('Clientes')} />
                </View>

                <Text>Nome</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput 
                        onChangeText={(value) => setNome(value)}
                        value={nome}
                        style={styles.input}
                    />  
                </View>

                <Text>CPF</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput 
                        onChangeText={(value) => setCpf(value)}
                        value={cpf}
                        style={styles.input}
                    />  
                </View>

                <Button title='Salvar Cliente' onPress={salvarCliente} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: '20',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: 10
    },
    card: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#F1F1F1',
        borderBottomWidth: 1,
        borderColor: '#CCC'
        
    }
});
