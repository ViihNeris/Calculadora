import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';


export default function App() {

const [num, setNUM] = useState('');
const [num2, setNUM2] = useState('');

  function soma(){
      const resultado = parseFloat (num) + parseFloat (num2);
      alert('Calculadora diz: \n \n O resultado da sua soma é ' + resultado + '.');
  }

  function sub(){
      const resultado = parseFloat (num) - parseFloat (num2);
      alert('Calculadora diz: \n \n O resultado da sua subtração é ' + resultado + '.');
  }

  function mult(){
      const resultado = parseFloat (num) * parseFloat (num2);
      alert('Calculadora diz: \n \n O resultado da sua multiplicação é ' + resultado + '.');
  }

  function div(){
      const resultado = parseFloat (num) / parseFloat (num2);
      alert('Calculadora diz: \n \n O resultado da sua divisão é ' + resultado + '.');
  }

  
  return (
    <View style = {styles.container}>
        <Image style = {styles.img2} source = {require ('./assets/linha.png')}/>
        <Text style = {styles.tit}>Calculadora</Text>

        <Image style = {styles.img} source = {require ('./assets/calc.png')}/>

        <TextInput style={styles.input} value = {num} keyboardType = 'numeric' onChangeText = {(num)=> setNUM(num)} placeholder = 'Digite um número'/>
        <TextInput style={styles.input} value = {num2} keyboardType = 'numeric'  onChangeText = {(num2)=> setNUM2(num2)} placeholder = 'Digite um número'/>

        <TouchableOpacity style = {styles.botao}  onPress = {soma}>
        <Text style = {styles.botText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botao} onPress = {sub}>
        <Text style = {styles.botText}>─</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botao} onPress = {mult}>
        <Text style = {styles.botText}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botao} onPress = {div}>
        <Text style = {styles.botText}>/</Text>
        </TouchableOpacity>
        <Image style = {styles.img3} source = {require ('./assets/linha.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
    textAlign: 'center',
  },
  tit: {
    color: 'white',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    backgroundColor: '#CDC8FA',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    fontWeight: 500,
    fontSize: 20
  },
  botao:{
    backgroundColor: '#948AB5',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 20,
    borderRadius: 5,
  },
  botText:{
    color: 'white',
    textAlign: 'center',
    padding: 20,
    fontSize: 15
  },
  img: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    marginBottom: 15
  },
   img2: {
    width: 332,
    height: 10,
    alignSelf: 'center',
  },
    img3: {
    width: 332,
    height: 10,
    alignSelf: 'center',
    marginTop: 30
  }
});
