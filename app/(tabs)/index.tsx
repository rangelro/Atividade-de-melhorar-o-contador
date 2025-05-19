import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Contador App</Text>

        {/* Valor do Contador */}
        <View style={styles.contadorContainer}>
          <Text style={styles.contador}>{contador}</Text>
        </View>

        {/* Botões de Controle - Usando o componente Button padrão */}
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuir}>
            <Text style={styles.botaoTexto}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
            <Text style={styles.botaoTexto}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAumentar} onPress={aumentar}>
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/*Rodapé*/}
      <View  style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Aprenda React Native com Expo!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  conteudo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight:'bold',
    marginBottom: 60,
  },


  contador: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'#000',
  },
  contadorContainer:{
    width: 120,            
    height: 120,           
    borderRadius: 60,      
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:20,

    elevation:2, //sombreamento no android
    //sombreamento no IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },


  botoes: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginTop:20,

  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoAumentar:{
    width: 60,            
    height: 60,           
    borderRadius: 30,
    backgroundColor:'#1EF787',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:2, 
  },
  botaoDiminuir:{
    width: 60,            
    height: 60,           
    borderRadius: 30,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:2, 
  },
  botaoReset:{
    width: 60,            
    height: 60,           
    borderRadius: 30,
    backgroundColor:'#1ED5F7',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:2, 
  },


  rodape:{
    height: 80, 
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',

  },
  rodapeTexto:{
    color: '#000',
    fontSize: 12,
  },
});
