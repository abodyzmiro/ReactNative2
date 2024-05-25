// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
  
      
    
//     <View style={styles.ScreenContainer}>
//       <View style={styles.CardContainer}>
//         <View style={styles.CardTopContainer}>
//         <Image
//         style={styles.ImageContainer}
//         source={require('./src/assets/picther.jpg')}/>
//         <View style={styles.TextContainer}>
//           <Text style={styles .Text}>
//             abody
//           </Text>
//           <Text style={styles .Text}>
//             zmiro
//           </Text>
//         </View>
//         <View>


//         </View>
//      </View>
//         <Text style={styles .TextBottomContainer}>
//           ID:112005

          
         
         
//         </Text>

//       </View>
//   </View>
//  )
// }
// export default App;
// const styles = StyleSheet.create({
// ScreenContainer:{
//   flex: 1,
//   backgroundColor:'black',
//   justifyContent:'center',
//   alignItems:'center',
// },
// CardContainer:{
//   height:500,
//   width:500,
//   backgroundColor:'grey',
//   justifyContent:'center',
//   alignItems:'center',
//   borderRadius:20,
//   marginTop:50,
  
// },
// TextContainer:{
//   flex: 1,
//   alignSelf: 'stretch',
//   justifyContent:'flex-start',
//   alignItems: 'flex-start',
//   paddingLeft:20,
//   marginTop:30,

// },
// CardTopContainer:{
//   flex: 1,
//   alignSelf:'stretch',
//   flexDirection: 'row',
// },
// TextBottomContainer:{
//   flex: 1,
//   fontSize:40,
// },
// ImageContainer:{
//   height:"100%",
//   width:"50%",
// },
// Text:{
//   fontSize: 25,
// },


// })


// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <View style={styles.CardContainer}>
//         <View style={styles.CardTopContainer}>
//           <Image
//             style={styles.ImageContainer}
//             source={require('./src/assets/picther.jpg')}
//           />
//           <Image
//             style={styles.ImageContainer}
//             source={require('./src/assets/picther.jpg')}
//           />
//           <View style={styles.TextContainer}>
//             <Text style={styles.Text}>abody</Text>
//             <Text style={styles.Text}>zmiro</Text>
//           </View>
//         </View>
//         <Text style={styles.TextBottomContainer}>
//           ID:112005
//         </Text>
//       </View>
//     </View>
//   )
// }
// export default App;

// const styles = StyleSheet.create({
//   ScreenContainer:{
//     flex: 1,
//     backgroundColor:'black',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   CardContainer:{
//     height:500,
//     width:500,
//     backgroundColor:'grey',
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius:20,
//     marginTop:50,
//   },
//   TextContainer:{
//     flex: 1,
//     alignSelf: 'stretch',
//     justifyContent:'flex-start',
//     alignItems: 'flex-start',
//     paddingLeft:20,
//     marginTop:30,
//   },
//   CardTopContainer:{
//     flex: 1,
//     alignSelf:'stretch',
//     flexDirection: 'row',
//   },
//   TextBottomContainer:{
//     flex: 1,
//     fontSize:40,
//   },
//   ImageContainer:{
//     height:"100%",
//     width:"50%",
//   },
//   Text:{
//     fontSize: 25,
//   },
// })


// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <View style={styles.CardContainer}>
//         <View style={styles.CardTopContainer}>
//           <View style={styles.ContentContainer}>
//             <Image
//               style={styles.ImageContainer}
//               source={require('./src/assets/picther.jpg')}
//             />
//             <Text style={styles.Text}>klok</Text>
//             <Text style={styles.Text}>zmiro</Text>
//           </View>
//           <View style={styles.ContentContainer}>
//             <Image
//               style={styles.ImageContainer}
//               source={require('./src/assets/picther.jpg')}
//             />
//             <Text style={styles.Text}>abody</Text>
//             <Text style={styles.Text}>zmiro</Text>
//           </View>
//         </View>
//         <Text style={styles.TextBottomContainer}>
//           ID:00000
//         </Text>
//       </View>
//     </View>
//   )
// }
// export default App;

// const styles = StyleSheet.create({
//   ScreenContainer:{
//     flex: 1,
//     backgroundColor:'black',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   CardContainer:{
//     height:500,
//     width:500,
//     backgroundColor:'grey',
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius:20,
//     marginTop:100,
//   },
//   TextContainer:{
//     flex: 1,
//     alignSelf: 'stretch',
//     justifyContent:'flex-start',
//     alignItems: 'flex-start',
//     paddingLeft:20,
//     marginTop:30,
//   },
//   CardTopContainer:{
//     flex: 1,
//     alignSelf:'stretch',
//     flexDirection: 'row',
//   },
//   TextBottomContainer:{
//     flex: 1,
//     fontSize:40,
//   },
//   ContentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ImageContainer:{
//     height:"100%",
//     width:"50%",
//   },
//   Text:{
//     fontSize: 25,
//   },
// })

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.CardContainer}>
        <View style={styles.CardTopContainer}>
          <TouchableOpacity style={styles.ContentContainer}>
            <Image
              style={styles.ImageContainer}
              source={require('./src/assets/picther.jpg')}
            />
            <Text style={styles.Text}>klok</Text>
            <Text style={styles.Text}>zmiro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContentContainer}>
            <Image
              style={styles.ImageContainer}
              source={require('./src/assets/picther.jpg')}
            />
            <Text style={styles.Text}>abody</Text>
            <Text style={styles.Text}>zmiro</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.TextBottomContainer}>
          ID:00000      
        </Text>
      </View>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  ScreenContainer:{
    flex: 1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  CardContainer:{
    height:500,
    width:500,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:100,
  },
  TextContainer:{
    flex: 1,
    alignSelf: 'stretch',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    paddingLeft:20,
    marginTop:30,
  },
  CardTopContainer:{
    flex: 1,
    alignSelf:'stretch',
    flexDirection: 'row',
  },
  TextBottomContainer:{
    flex: 1,
    fontSize:40,
  },
  ContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer:{
    height:"100%",
    width:"50%",
  },
  Text:{
    fontSize: 25,
  },
})

