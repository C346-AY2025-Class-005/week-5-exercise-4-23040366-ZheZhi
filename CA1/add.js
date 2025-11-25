import React from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { datasource } from './Data.js';

const Add = ({Navigation}) => {
    const [mod, setMod] = useState('');
    const [grade, setGrade] = useState('');
    return(
        <View>
            <Text>Module Name:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={setMod} />
            <Text>Grade:</Text>
            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label="grade" value="A" />
                <Picker.Item label="grade" value="B+" />
                <Picker.Item label="grade" value="B" />
                <Picker.Item label="grade" value="C+" />
                <Picker.Item label="grade" value="C" />
                <Picker.Item label="grade" value="D+" />
                <Picker.Item label="grade" value="D" />
                <Picker.Item label="grade" value="E" />
                <Picker.Item label="grade" value="F" />
            </Picker>
            <Button title='Submit'
            onPress={()=>{
                let item = {key: mod, grade: grade};
                let indexnum = 1;
                if (type === 'Vowels') {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                Navigation.navigate("Home");
            }
        }
        />
        </View>
    )
}

export default Add;