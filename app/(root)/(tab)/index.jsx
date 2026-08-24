import { Card, FeatureCard } from "@/components/cardes";
import Filters from "@/components/filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Orbitron_400Regular } from "@expo-google-fonts/orbitron";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
   
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
       <FlatList 
         data={[1,2]}
         renderItem={({item}) => <Card/>}
         keyExtractor={(item)=>item.toString}
         numColumns={2}
         contentContainerStyle={{paddingBottom:52}}
         columnWrapperStyle={{flex:1, gap:5,paddingHorizontal:5}}
         showsHorizontalScrollIndicator={false}
         ListHeaderComponent={
          <>
          <View style={{paddingHorizontal:20}}>
          <View style={{ flex: 1, marginTop:5, flexDirection:'row', justifyContent: "space-between", alignItems: "center", }}> 
          <View style={{flex: 1, flexDirection:'row',alignItems: "center",}}>
              <Image source={images.avatar} style={{width:60,height:60, borderRadius:50}}/>
              <View  style={{flex:1, flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:20}} >
                <Text style={{color:'#969595' , fontSize:14, fontWeight:300}}>Good morning</Text>
                <Text style={{fontFamily:Orbitron_400Regular, color:'#010000' , fontSize:16, fontWeight:800}}>andriw</Text>
              </View>
          </View>
          <Image source={icons.bell} style={{width:20,height:20, borderRadius:50}}/>
          </View>
          <Search/>
          <View style={{marginVertical:-12, width:'100%', height:300, paddingVertical:10,paddingHorizontal:10}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: "space-between", alignItems: "center",}}>
              <Text style={{ color:'#070707',fontWeight:900,fontSize:18}}>Featured</Text>
              <TouchableOpacity>
              <Text style={{ color:'#308fd7',fontWeight:900}}>Sell All</Text>
              </TouchableOpacity>
            </View>
              <FlatList 
                data={[1,2,3]}
                renderItem={({item})=> <FeatureCard/>}
                keyExtractor={(item)=>item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap:12, height:200, paddingVertical:20,paddingRight:10}}
              />
          </View>
        </View >
        
        <View style={{marginVertical:127, width:300 ,height:100,paddingHorizontal:10, marginTop:-30}}>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: "space-between", alignItems: "center",}}>
            <Text style={{ color:'#070707',fontWeight:900,fontSize:18}}>Our recommendation</Text>
            <TouchableOpacity>
            <Text style={{ color:'#308fd7',fontWeight:900}}>Sell All</Text>
            </TouchableOpacity>
          </View>
          <Filters/>  
        </View>
        
        </>
         }
       />
         
    </SafeAreaView>
  );
}