import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, FlatList, SectionList, TouchableOpacity, Image } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const datasource = [
  {data: [
    {key: 'Zapdos', image: {uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_145.png'}},
    {key: 'Pikachu', image: {uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25.png'}},
  ], title: "ELECTRIC", bgcolor: 'gold', icon: 'bolt'},
  {data: [
    {key: 'Blastoise', image: {uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9.png'}},
    {key: 'Squirtle', image: {uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7.png'}},
  ], title: "WATER", bgcolor: 'skyblue', icon: 'droplet'}
];

const renderItem = ({item, section}) => {
  let img = null;
  if (item.image) {
    img = (
      <Image style={styles.card} source={item.image} />
    );
  }
  return(
    <TouchableOpacity style={styles.opacityStyle} >
      <View style={[styles.row, {backgroundColor: section.bgcolor}]}>
        <Text style={styles.textStyle} >{item.key}</Text>
        {img}
      </View>
    </TouchableOpacity>
  )
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>ADD POKEMON</Text>
        </TouchableOpacity>
      </View>
      <SectionList
      style = {{flex: 1}}
      contentContainerStyle = {{padding: 20}}
      sections={datasource}
      renderItem ={renderItem}
      renderSectionHeader = {({section:{title, bgcolor, icon}}) => (
        <Text style={[styles.headertext, {backgroundColor: bgcolor}]}>
          <FontAwesome6 name={icon} size={20}/>{title}</Text>

)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  opacityStyle: {
    borderWidth: 1
  },
  headertext: {
    fontSize: 20,
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
  },
  button: {
    backgroundColor: 'skyblue',
    marginTop: 30,
    marginBottom: 25,
    alignSelf: 'center',
    width: '90%',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: 200,
    height: 290,
    resizeMode: 'contain'
  },
});

export default App;