import { View, Text, Image,StyleSheet} from 'react-native'
import React from 'react'
import app from '../../assets/images/app.png';
import colors from '../../assets/shared/colors';
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={app} style={styles.appImage}/>
      <View style={styles.appContainer}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={styles.subText}>Book Appointments Effortlessly and manage your health journey</Text>
        <SignInWithOAuth/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:colors.LIGHT_GRAY
  },
  appImage:{
    width:300,
    height:500,
    objectFit:'contain',
    marginTop:50
  },
  appContainer:{
    backgroundColor:colors.white, 
    padding:25, 
    alignItems:'center', 
    marginTop:-50, 
    borderTopLeftRadius:20, 
    borderTopRightRadius:20},
  heading:{
    fontSize:25,
    fontWeight:'bold'
  },
  subText:{
    textAlign:'center', 
    marginTop:20
  },
})