import { StyleSheet,StatusBar,SafeAreaView } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <ClerkProvider publishableKey={"pk_test_Y29vbC1jaGVldGFoLTU4LmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <SafeAreaView style={styles.container}> 
        <SignedIn>
            <NavigationContainer>
              <TabNavigation/>
            </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
      </SafeAreaView>
      <StatusBar/>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
