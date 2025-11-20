import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';

const datasource = [
    {data: [
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'}
        ], title: "Vowels", bgcolor: 'skyblue'},
    {data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'}
        ], title: "Consonants", bgcolor: 'khaki'}
];

const renderItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.opacityStyle} >
            <Text style={styles.textStyle} >{item.key}</Text>;
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View>
            <SectionList
                contentContainerStyle = {{padding: 10}}
                sections={datasource}
                renderItem ={renderItem}
                renderSectionHeader = {({section:{title, bgcolor}}) => (
                    <Text style={[styles.headertext, {backgroundColor: bgcolor}]}>{title}</Text>
                )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
    opacityStyle: {
        borderWidth: 1
    },
    headertext: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default App;