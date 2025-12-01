import React from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { datasource } from './Data.js';

const Edit = ({navigation, route}) => {
    const [mod, setMod] = useState(route.params.key);
    const [grade, setGrade] = useState(route.params.grade);
    return(
        <View>
            <Text>Module:</Text>
            <TextInput value={mod} style={{borderWidth: 1}} onChangeText={setMod} />
            
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

        </View>
    )
}

export default Edit;