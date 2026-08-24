import icons from '@/constants/icons'
import images from '@/constants/images'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const FeatureCard = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width:'101%' ,paddingLeft:20,marginTop:-20,flex:1,flexDirection:'column',alignItems:'flex-start', width:60,height:80 ,position:'relative'}}>
      <Image source={images.japan} style={{width:150, height:200, borderRadius:15}}/>
      <Image source={images.cardGradient} style={{width:150, height:200, borderRadius:15,position:'absolute',top:0,left:20}}/>
      <View style={{ paddingHorizontal:10,paddingVertical:5, flex:1, flexDirection:'row',alignItems:'center',gap:5, backgroundColor:'#fff' , borderRadius:15,position:'absolute',top:15,left:90}}>
        <Image source={icons.star}/>
        <Text style={{fontWeight:800}}>4.4</Text>
      </View>
      <View style={{width:100,  flex:1, flexDirection:'column',alignItems:'flex-start' ,position:'absolute',left:40, top:110}}>
        <Text style={{color:'#fff',fontSize:17,fontWeight:800}} numberOfLines={1}>Modern Apartement</Text>
        <Text style={{width:100, color:'#ffffffd7',fontSize:12,fontWeight:300}} > 22 w 15th St,New york NY 10011 </Text>
        <Text style={{width:100, color:'#ffffff',fontSize:18,fontWeight:900}} > $2,699 </Text>
        <Image source={icons.heart } style={{width:20, height:20,position:'absolute',bottom:0,left:100}}/>
      </View>
    </TouchableOpacity>
  )
}

export const Card = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width:'100%' , height:250, backgroundColor:'#fff', padding:10,marginTop:-130, elevation:4 , flex:1, position:'relative'}}>
        <View style={{ paddingHorizontal:10,paddingVertical:5, flex:1, flexDirection:'row',alignItems:'center',gap:5, backgroundColor:'#fff' ,zIndex:3, borderRadius:15,position:'absolute',top:20,left:70}}>
            <Image source={icons.star}/>
            <Text style={{fontWeight:800}}>4.4</Text>
        </View>
        <Image source={images.newYork } style={{width:'100%', height:140,borderRadius:15}}/>     
        <View style={{width:100,  flex:1, flexDirection:'column',alignItems:'flex-start' ,position:'absolute',left:15, top:160}}>
            <Text style={{color:'#030303',fontSize:16,fontWeight:800}} numberOfLines={1}>Modern Apartement</Text>
            <Text style={{width:100, color:'#4e4e4ed7',fontSize:12,fontWeight:300}} > 22 w 15th St,New york NY 10011 </Text>
            <Text style={{marginTop:5, width:100, color:'#25a0ed',fontSize:18,fontWeight:900}} > $2,699 </Text>
            <Image source={icons.heart } style={{width:20, height:20,position:'absolute',top:-40,left:90}}/>
      </View>
    </TouchableOpacity>
  )
}
