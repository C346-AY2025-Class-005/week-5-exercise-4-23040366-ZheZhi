import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from './data.js';



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

const calculator = ({navigation}) => {

  const renderItem = ({item, index, section}) => {
    return (
    <TouchableOpacity style={styles.opacityStyle}
    onPress ={()=>
      {
        navigation.navigate("Edit", {index:index, type:section.title, key:item.key, grade:item.grade});
      }
    }>
      <Text style={styles.textStyle}>{item.key}</Text>
    </TouchableOpacity>
    );
  };
  
   return (
    <View style={{flex:1, margin: 10, marginTop: 30}}>
      <StatusBar/>
	<Button title='Add Letter' onPress={()=>{navigation.navigate("Add")}}/>
      <SectionList sections={datasource} renderItem={renderItem} 
      renderSectionHeader={({section:{title,bgcolor}})=>(
      <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
        {title}
      </Text>
      )}/>
    </View>
  );
};

export default calculator;