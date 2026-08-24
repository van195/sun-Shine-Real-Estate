import icons from '@/constants/icons';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams()
    const [search , setSearch] = useState(params.query);
    const DebounceSearch = useDebouncedCallback((value)=>
        router.setParams({query: value}),1000)
    const handleSearch = (text)=>{
        setSearch(text)
        DebounceSearch(text);
    }
  return (
    <View style={{alignSelf: "center", flex:1, flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:25,paddingHorizontal:5,paddingVertical:5,width:'100%', backgroundColor:'#d3e2e6fd',marginTop:20,}}>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',zIndex:50,}}>
       <Image source={icons.search} style={{width:20,height:20}}/>
       <TextInput
         value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          placeholderTextColor="#666"
            style={{
                color: "#000000",
                fontSize: 16,
                fontWeight: "400",
                opacity: 1,
                marginLeft: 10,
                width:'90%',
                height:'100%',
            }}
       />
      
      </View>

    </View>
  )
}

export default Search