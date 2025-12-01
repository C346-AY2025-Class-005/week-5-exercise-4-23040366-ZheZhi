import React from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { datasource } from './Data.js';

const Add = ({navigation}) => {
    const [mod, setMod] = useState('');
    const [grade, setGrade] = useState('');
    return(
        <View>
            <Text>Module Name:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={setMod} />
            <Text>Grade:</Text>
            <Picker onValueChange={(value) => setGrade(value)}>
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C+" value="C+" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="D+" value="D+" />
                <Picker.Item label="D" value="D" />
                <Picker.Item label="E" value="E" />
                <Picker.Item label="F" value="F" />
            </Picker>
            <Button title='Submit'
            onPress={()=>{
            if (mod === '' || grade === '') {
                Alert.alert('Please fill in all fields');
                return;
            }
                datasource[0].data.push({key: mod, grade: grade});
                navigation.navigate("Home");
            }
        }
        />
        </View>
    )
}

export default Add;