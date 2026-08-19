import {
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
  Orbitron_900Black,
} from "@expo-google-fonts/orbitron";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Orbitron: Orbitron_400Regular,
    "Orbitron-Medium": Orbitron_500Medium,
    "Orbitron-SemiBold": Orbitron_600SemiBold,
    "Orbitron-Bold": Orbitron_700Bold,
    "Orbitron-ExtraBold": Orbitron_800ExtraBold,
    "Orbitron-Black": Orbitron_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{headerShown:false}}/>;
} 