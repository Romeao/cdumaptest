import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const TabTwo = (props) => {
    return (
       <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
           <Text>TabTwo</Text>
       </SafeAreaView>
    )
}

export default TabTwo;
