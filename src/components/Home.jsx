import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Veja meus repositórios</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReposList')}>
        <Text>Repositórios</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RepoDetails', { repoName: 'ExemploRepo' })}>
        <Text>Detalhes do Repositório</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'pink',
  },
});

export default Home;
