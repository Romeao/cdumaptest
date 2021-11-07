import React from 'react'
import { Text, View, StyleSheet } from "react-native";
import Btn from "../components/Btn";
import firebase from 'firebase/app';
import "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Loginscreen({navigation}) {
    return <SafeAreaView style={styles.view}>
        <Text style={{fontSize: 34, fontWeight: "800", marginBottom: 20}}>Are you Sure?</Text>
        <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
        </SafeAreaView>
}

const styles = StyleSheet.create({
    view: {
       position:'absolute',
        width: "40%",
        justifyContent: "center",
        alignItems: "center"
    }
})