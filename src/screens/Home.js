import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.screen}>
        
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

})