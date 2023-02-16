import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={{ marginLeft: 15,
    }}>
      <Text style={{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        {props.name}
      </Text> 
    </View>
  )
}

export default Header

