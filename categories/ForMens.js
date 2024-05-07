// import React from 'react'
// import { View , Text } from 'react-native-web';
// import  MensProductList from "../ProductList/MensProductList"
// export default function ForMens() {
//     return (

//         <View>
//           < MensProductList/> 
        
//         </View>

//     );


// };

import React from 'react';
import { View, StyleSheet } from 'react-native';
import  MensProductList from "../ProductList/MensProductList"

const ForMens = () => {
  return (
    <View style={styles.container}>
      <MensProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    flexWrap: "wrap",
  },
});

export default ForMens;
