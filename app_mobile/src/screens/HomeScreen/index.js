import { View, Text, StyleSheet, Button, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextH1, TextH2, Paragraf, TextH3 } from '../../components/Texts';
import Cards from '../../components/Cards';
import Banners from '../../components/Banners';
import Api from '../../config/Api';
import { useEffect } from 'react';

export default function HomeScreen(props) {

    function renderItem(dados) {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Cards />
                <View>
                    <TextH3>Produto</TextH3>
                    <Text>{dados.item.id} - {dados.item.nome}</Text>
                </View>
                
                
            </View>
        )
    }

    async function getData() {
        const response = await Api.get("produtos");
        
    }

    useEffect(() => {
        getData();
    }, []);
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <TouchableHighlight onPress={() => props.navigation.toggleDrawer()} >
                        <Feather name="menu" size={32} color="black" />
                    </TouchableHighlight> 
                </View>
                <View>
                    B
                </View>    
            </View>

            <View>
                <TextH1>Olá, jovem</TextH1>
                <Paragraf>Seja bem-vindo!</Paragraf>
            </View>       
            
            <View style={{ height: 90 }}>
                <ScrollView horizontal style={{ marginTop: 10 }}>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                </ScrollView>
            </View>
            <Banners />
            <Banners />
            <Banners />

            <View>
                <FlatList 
                    data={[
                        { id: 1, nome: 'Ana' },
                        { id: 2, nome: 'Maria' },
                        { id: 3, nome: 'Eduardo' },
                    ]}
                    renderItem={renderItem}
                />
            </View>
                    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
