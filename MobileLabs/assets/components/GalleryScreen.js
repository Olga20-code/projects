import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryScreen({navigation}) {
  const [newsState, setItems] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Olga20-code/projects/master/MobileLabs/news.json');
      const json = await response.json();
      setItems(json.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData()
  }, [])


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <View style={{paddingTop: 20, paddingBottom: 10, flexDirection: 'row', backgroundColor: "#f1f1f1"}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.navBtn}>

          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/icon/home.png')}
          />

          <Text>Головна</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Gallery')}
          style={styles.navBtn}>

          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/icon/gallery-a.png')}
          />

          <Text style={{color: "#1080fd"}}>Галерея</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.navBtn}>

          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/icon/profile.png')}
          />

          <Text>Профіль</Text>
        </TouchableOpacity>
      </View>

      <FlatList style={{width: "100%"}} data={newsState} renderItem={({item}) => (
        <GalleryItem
          image={item.image}
        />
      )}/>
      <Text>Сурікова Ольга Андріївна, ЗІПЗКх-19-1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold"
  },
  navBtn: {
    color: '#8d8d8d',
    flex: 1,
    flexDirection: 'column',
    fontWeight: 700,
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
});