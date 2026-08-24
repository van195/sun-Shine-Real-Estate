import { Card, FeatureCard } from "@/components/cardes";
import Filters from "@/components/filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Orbitron_400Regular } from "@expo-google-fonts/orbitron";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
   
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
      <ScrollView  style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={true}>
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
          <View style={{marginVertical:-12, width:300 ,height:100,paddingHorizontal:10}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: "space-between", alignItems: "center",}}>
              <Text style={{ color:'#070707',fontWeight:900,fontSize:18}}>Featured</Text>
              <TouchableOpacity>
              <Text style={{ color:'#308fd7',fontWeight:900}}>Sell All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View >
        <View style={{flex:1, flexDirection:'row', gap:5,}}>
          <FeatureCard/>
          <FeatureCard/>
        </View>
        <View style={{marginVertical:127, width:300 ,height:100,paddingHorizontal:10}}>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: "space-between", alignItems: "center",}}>
            <Text style={{ color:'#070707',fontWeight:900,fontSize:18}}>Our recommendation</Text>
            <TouchableOpacity>
            <Text style={{ color:'#308fd7',fontWeight:900}}>Sell All</Text>
            </TouchableOpacity>
          </View>
          <Filters/>  
        </View>
        <View style={{flex:1, flexDirection:'row', gap:5,}}>
          <Card/>
          <Card/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}