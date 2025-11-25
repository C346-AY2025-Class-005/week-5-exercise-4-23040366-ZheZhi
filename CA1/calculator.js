import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from './Data.js';



const styles = StyleSheet.create({
	textStyle: {
    	fontSize: 15,
    	margin: 10,
   		textAlign: 'left',
 	 },
   opacityStyle: {
      borderWidth: 1,
   },
   headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight:'bold',
  },
});

const Calculator = ({navigation}) => {

  const renderItem = ({item, index, section, grade}) => {
    return (
    <TouchableOpacity style={styles.opacityStyle}
    onPress ={()=>
      {
        navigation.navigate("Edit", {index:index, type:section.title, key:item.key, grade:item.grade});
      }
    }>
      <Text style={styles.textStyle}>{item.key}{item.grade}</Text>
    </TouchableOpacity>
    );
  };
  
   return (
    <View style={{flex:1, margin: 10, marginTop: 30}}>
      <StatusBar/>
	<Button title='Add Letter' onPress={()=>{navigation.navigate("add")}}/>
      <SectionList sections={datasource} renderItem={renderItem} 
      renderSectionHeader={({section:{title,bgcolor}})=>(
      <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
        {title}
      </Text>
      )}/>
    </View>
  );
};

export default Calculatoralculator;