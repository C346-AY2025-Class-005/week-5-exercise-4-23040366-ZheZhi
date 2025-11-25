import React from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { datasource } from './data.js';

const Add = () => {
    const [mod, setMod] = useState('');
    const [grade, setGrade] = useState('');
    return(
        <View>
            <Text>Letter:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={setLetter} />
            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label="Vowels" value="Vowels" />
                <Picker.Item label="Consonants" value="Consonants" />
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