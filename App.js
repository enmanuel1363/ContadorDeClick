import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Boton from './Componentes/Boton';
import { useState } from 'react';


export default function App() {

const [contador, setContador] = useState(0);

const FuncionMas = () => {
  setContador(contador + 1)
}

const FuncionReload = () => {
  setContador(0)
}

  return (
    <View style={styles.container}>
     <View style={styles.containerLogo}>
      <Image source={require('./Imagenes/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.containerBoton}>
        <View style={styles.containerContador}>
          <Text style={styles.numero}>{contador}</Text>
          </View> 
        <Boton 
          boton="clic"
          color='blue'
          colorText='white'
          onPress={FuncionMas}>
        </Boton>

        <Boton
          boton="Reiniciar"
          color='green'
          colorText='white'
          onPress={FuncionReload}>
        </Boton>

      </View>
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B17',
 
  },
  containerBoton: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  containerContador: {
 backgroundColor: '0B0B17',
 width: '60%',
 height: 200,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'white',
  borderWidth: 5,
  marginTop: 10, 
  },
  containerLogo: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#0B0B17',
    
  },
  numero: {
    fontSize: 100,
    color: 'white',
    paddingLeft: 20
  },
  logo: {
    height:200,
    width: "100%",
  },
  
});
