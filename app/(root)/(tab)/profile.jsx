import { settings } from '@/constants/data';
import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const SettingItems = ({icon,title,onPress,textStyle,showArrow=true})=>{
    return(
    <TouchableOpacity onPress={onPress} style={{ marginTop:10,flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <View style={{flex:1, flexDirection:'row',gap:10, alignItems:'center'}}>
        <Image source={icon} style={{width:25, height:25}}/>
        <Text style={{fontWeight:200, fontSize:14,}}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} style={{width:20, height:20}}/>}
    </TouchableOpacity>)
}
const Profile = () => {
  const handleLogout = ()=>{};
  return (
    <SafeAreaView style={{height:'100vh', backgroundColor:'#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:22, paddingHorizontal:20}}
       >
        <View style={{flex:1, flexDirection:'row' ,alignItems:'center', justifyContent:'space-between', marginTop:20}}>
         <Text style={{fontWeight:700, fontSize:18,}}>Profile</Text>
         <Image source={icons.bell} style={{width:20, height:20}}/>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
           <View style={{flex:1, flexDirection:'column' ,alignItems:'center', position:'relative', marginTop:20}}>
              <Image source={images.avatar} style={{width:100,height:100, borderRadius:50}}/>
              <TouchableOpacity style={{position:'absolute',bottom:30,right:90}}>
                 <Image source={icons.edit} style={{width:25, height:25}}/>
              </TouchableOpacity>
              <Text style={{marginTop:10,fontWeight:200, fontSize:14,}}>Andriw | JS mastery</Text>
           </View>
        </View>
        <View style={{flex:1, flexDirection:'column', marginTop:10}}>
           <SettingItems icon={icons.calendar} title='My booking' />
           <SettingItems icon={icons.wallet} title='Payment' />
        </View>
        <View style={{flex:1, flexDirection:'column', marginTop:5}}>
           {settings.slice(2).map((items,index)=>(
            <SettingItems  key={index}  icon={items.icon} title={items.title}/>
           ))}
        </View>
        <View style={{flex:1, flexDirection:'column', marginTop:10}}>
            <SettingItems icon={icons.logout} title='Log out' showArrow={false}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile