/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 
 // import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {
   SafeAreaView,
   ScrollView,
   TouchableOpacity,
   StatusBar,
   StyleSheet,
   Text,
   Button,
   Image,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
  //  const Stack = createNativeStackNavigator();
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
   
   return (
     <SafeAreaView style={backgroundStyle, {backgroundColor: "#E91E05"}}>
       <StatusBar barStyle='light-content' />
       {/* <ScrollView */}
         {/* contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}> */}
         <View
           style={{
             backgroundColor: "#E91E05",
             height:"100%"
           }}>
           <View>
 
           <Text style={styles.headingText}>wonderbites
       </Text>
           </View>
           <Image source = {require("./src/images/bg-Img.png")}
    style = {{ width: "100%"}}
    /> 
     
          <TouchableOpacity onPress={() => navigation.navigate('ask_for_address')} style={styles.buttonStyle}>
          <Button color = "#FFFFFF" title="Sign In Or Join"
       />
     
 </TouchableOpacity>
 
 <TouchableOpacity onPress={() => navigation.navigate('ask_for_address')}  style={styles.lightButton}>
          <Button color = "#000000" title="Order Now"
         onPress={() => navigation.navigate('ask_for_address')}
       />
       </TouchableOpacity>
       
         </View>
         
       {/* </ScrollView> */}
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   headingText: {
     alignSelf: "center",
     color:"#FFFFFF",
     fontWeight:"bold",
     fontSize: 35,
     marginTop: 50
   },
 
   buttonStyle: {
     borderWidth: 1,
     borderColor: "#FFFFFF",
     backgroundColor:"#E91E05",
     borderRadius: 12,
     textAlign: "center",
     alignSelf: "center",
     width: "70%",
     margin:20
   },
 
   lightButton: {
     borderColor: "#FFFFFF",
     backgroundColor: "#eaeaea",
     borderRadius: 12,
     alignSelf: "center",
     fontWeight:'bold',
     textAlign: "center",
     width: "70%",
    
   },
 });
 
 export default App;
 