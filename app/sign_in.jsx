import icons from '@/constants/icons'
import images from '@/constants/images'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#fff',height:'100vh'}}>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <Image source={images.onboarding} 
               resizeMode='contain'
               style={{marginTop:20,width:'100%', height:'67%'}}
        />
        <View style={{width:'100%', paddingHorizontal:'30px'}}>
          <Text style={{ marginTop:-30, textAlign:'center' , fontFamily:'Orbitron',fontSize:13, fontWeight:100, color:'#00000092'}}>
            Welcome To Sun Shine
          </Text>
          <Text style={{ marginTop:20,textAlign:'center' , fontFamily:"Orbitron-Black",fontSize:32,fontWeight:900, color:'#000000e1'}}>
            Let's Get You to {"\n"}
            <Text style={{color:'#0061FF'}}>Your Dream Hom</Text>
          </Text>
          <TouchableOpacity style={{marginTop:15,marginLeft:20, width:'90%' , paddingVertical:5, borderRadius:20, elevation: 4,}}>
            <View style={{width:'100%',height:40, justifyContent:'center',alignItems:'center', flexDirection:'row', gap:10}}>
              <Image source={icons.google}
                resizeMode='contain'
                style={{width:20, height:40}}
                />
                <Text style={{color:'#000', fontWeight:700, fontSize:15 }}>continue with google</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn