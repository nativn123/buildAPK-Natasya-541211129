import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

// Import komponen Card jika Anda ingin menggunakannya
// import { Card } from 'react-native-paper';

// Import komponen AssetExample jika Anda ingin menggunakannya
// import AssetExample from './components/AssetExample';

//portofolio page

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('./assets/natasya.jpg')}
        />
        <Text style={styles.title}>Natasya Ivana</Text>
        <Text style={styles.subTitle}>
          Saya lahir di Tasikmalaya.
          Saya sekolah di SMK Telkom Purwokerto jurusan RPL.
          Saya anak kedua dari dua bersaudara.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('oooo')}>
          <Text style={styles.textButton}>Contact Me</Text>
        </TouchableOpacity>
        <Text style={styles.Recent}>My Recent Project</Text>
        <Image
          style={styles.kotak}
          source={require('./assets/abon.jpg')}
        />
        <Text style={styles.projectTitle}>Project Title</Text>

        <Text style={styles.Design}>Web Design</Text>
        <TouchableOpacity style={styles.buton} onPress={() => Alert.alert('oooo')}>
          <Text style={styles.textButton}>More</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require('./assets/nts.png')}
        />
        <Text style={styles.projectTitle}>Project Title</Text>
        <Text style={styles.Design}>Web Design</Text>
        <TouchableOpacity style={styles.buton} onPress={() => Alert.alert('oooo')}>
          <Text style={styles.textButton}>More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFE4E1",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 7
  },
  subTitle: {
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 200,
    height: 300,
    borderRadius: 200,
  },
  button: {
    backgroundColor: '#B0C4DE',
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white'
  },
  Recent: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  kotak: {
    width: 225,
    height: 230,
    borderRadius: 3,
    marginTop: 10,
  },
  projectTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  Design: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'Bold',
    marginTop: 2,
  },
  buton: {
    backgroundColor: '#B0C4DE',
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
  image: {
    width: 225,
    height: 230,
    borderRadius: 3,
    marginTop: 15,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
