import {StyleSheet, View, Image} from "react-native";
import * as React from "react";

export default function GalleryItem({image}) {
  let pic = {
    uri: image,
  };

  return (
    <View style={styles.post}>
      <Image style={styles.image} source={pic} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    borderRadius: 12
  },
  post: {
    padding: 5
  },
});