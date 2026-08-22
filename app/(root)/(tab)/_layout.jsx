import icons from '@/constants/icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'
const TabIcons = ({focused,Icons,title,color})=>(
    <View style={[{ width:60,borderRadius:10, flex:1, alignItems:'center'},{backgroundColor:color,borderRadius:10,}]}>
        <Image source={Icons} style={{ width:25, height:25}} resizeMode='contain' tintColor={focused ? '#0061ff':'#666876'}/>
        <Text style={{ color:'#2c3545', fontSize:12, textAlign:'center'}}>{title}</Text>
    </View>
)
const TabsLayout = () => {
  return (
    <Tabs 
        screenOptions={
            {
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'#fff',
                    position:'absolute',
                    borderTopColor:'#0061FF1A',
                    borderTopWidth:1,
                    minHeight:30,
                }
            }
        }
     >
        <Tabs.Screen
            name='index'
            options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcons Icons={icons.home} focused={focused} title='Home' color={focused ? '#dfe2fc':''}/>
                )
            }}
        />
        <Tabs.Screen
            name='explore'
            options={{
                title:'Explore',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcons Icons={icons.search} focused={focused} title='Explore' color={focused ? '#d5daff':''} />
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title:'Profile',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcons Icons={icons.person} focused={focused} title='Profile' color={focused ? '#d5daff':''}/>
                )
            }}
        />
      <Text>TabsLayout</Text>
    </Tabs>
  )
}

export default TabsLayout