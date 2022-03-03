import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from './navigation/Navigator'

export default function App() {
  return <Navigator />
}

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'teal'
  },
  text : {
    color : '#ffffff',
    fontWeight : 'bold'
  }
})