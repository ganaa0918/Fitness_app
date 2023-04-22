import * as React from "react"
import {View, Text, Image, StyleSheet } from "react-native"
import Tseej from '../workout_nav/athome_pics/tseej.png'
function Exercises() {
  return (
    <View style={styles.container}>
      <Image source={Tseej} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  image: {
    width: "100%",
  },
});
export default Exercises