import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href='/sign_in'>sign In</Link>
      <Link href='/explore'>explore</Link>
      <Link href='/properties/1'>property List</Link>
      <Link href='/profile'>profile</Link>
    </View>
  );
}