import { AuthContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout(){
    const {loading,isLoggedIn} = useContext(AuthContext)
    if(loading){
       return(
        <SafeAreaView style={{backgroundColor:"#fff",height:'100%',flex:1, justifyContent:'center',alignItems:'center'}}>
           <ActivityIndicator/>
        </SafeAreaView>
       )
    }
    if(!isLoggedIn){
      return <Redirect href='/sign_in'/>
    }
    return <Slot/>
}