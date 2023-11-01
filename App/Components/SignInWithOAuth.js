import React from "react";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";
import colors from "../../assets/shared/colors";

WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity style={styles.login} onPress={onPress}>
      <Text style={styles.loginText}>Login with Google</Text>
    </TouchableOpacity>
);
}
export default SignInWithOAuth;
const styles = StyleSheet.create({
  login:{
    padding:16,
    backgroundColor:colors.PRIMARY,
    borderRadius:90,
    alignItems:'center',
    marginTop:20,
    width:Dimensions.get('screen').width*0.4,
  },
  loginText:{
    fontSize:17,
    color:colors.white
  }
})