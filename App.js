import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
const [stdId, setID] = useState('');
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [myData, addData] = useState([]);

const addValues = () => {
  let datas = myData;
  myData.push({
    'id' : stdId,
    'name' : name,
    'age' : age,
  })
  
  addData(datas);
  console.log(datas);
  setID('');
  setName(''); 
  setAge('');
}
  return (
    <View style={styles.container}>

      <View>
        <TextInput
        placeholder='Student ID' onChangeText={setID}
        />
        <TextInput
        placeholder='Student Name' onChangeText={setName}
        />
        <TextInput
        placeholder='Student Age' onChangeText={setAge}
        />
      </View>

      <View>
        <Button
        title='Submit' onPress={addValues}
        />
      </View>

      <View style={{flex: 4, borderTopWidth: 5}}>
        {
          myData.map((obj, index) => <Text key={index}> {  obj.id + ', ' + obj.name + ', ' + obj.age }</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignContent: 'center',
  },
});
