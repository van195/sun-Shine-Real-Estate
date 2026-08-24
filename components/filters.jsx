import { categories } from '@/constants/data';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

const Filters = () => {
  const params = useLocalSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(params.filter || "All");
  const handleCategory = (category) => {
    if(selectedCategory === category){
        setSelectedCategory('All');
         router.setParams({
         filter: 'All',
        });
    }
    setSelectedCategory(category);
    router.setParams({
      filter: category,
    });
  };
  return (
    <ScrollView horizontal 
     showsHorizontalScrollIndicator={false} 
     style={{width:'100%', marginTop:10,marginBottom:5}}>
     {categories.map((items,index)=>(
        <TouchableOpacity  key={index} onPress={()=>handleCategory(items.category)} style={[{marginLeft:10,flex:1, flexDirection:'column',alignItems:'flex-start',justifyContent:'center', paddingHorizontal:20,height: 30 ,borderRadius:20},selectedCategory === items.category ? {backgroundColor:'#308af1',color:'#fff'}:{backgroundColor:'#308af115'}]} >
            <Text style={[{fontWeight:600},selectedCategory === items.category ? {color:'#fff'}:{color:'#000'}]}>{items.title}</Text>
        </TouchableOpacity>
     ))}
    </ScrollView>
  )
}

export default Filters