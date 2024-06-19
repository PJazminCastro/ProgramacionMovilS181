// Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

// Componente propio
const Texto = () => {
  const [contenido, setcontenido] = useState('Hola :)')
  const actualizarTexto = () => { setcontenido('Adiós :(') }
  return (
    <Text onPress={actualizarTexto}> {contenido} </Text>
  )
}
// Ejecución de proyecto
export default function App() {
  return (
    // Vista (componente padre)
    <View style={styles.container}>
      {/* Texto
      <Text>Hola mundo ReactNative</Text> */}

      {/* Llamar componente de "texto" */}
      <Texto>  </Texto>
      <Texto>  </Texto>

      <Button title='Saludar' color={'#f194ff'}>  </Button>

      {/* Estatus bar, solo en teléfono */}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
