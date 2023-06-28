import {StyleSheet, Text, View, Image} from "react-native";
import * as React from "react";

export default function Post({title, image, description, date}) {
  let pic = {
    uri: image,
  };

  return (
    <View style={styles.post}>
      <Image style={styles.image} source={pic} />

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: '#ccc'
  },
  description: {
    fontSize: 14,
  },
  post: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
});