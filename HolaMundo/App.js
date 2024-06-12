// Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Componentes
export default function App() {
  return (
    // Vista (componente padre)
    <View style={styles.container}>
      {/* Texto */}
      <Text>Hola mundo ReactNative</Text>
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
