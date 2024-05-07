import React from 'react';
import { View, StyleSheet } from 'react-native';
import WomenProductList from "../ProductList/WomenProductList"

const ForWomens = () => {
  return (
    <View style={styles.container}>
      <WomenProductList />
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

export default ForWomens;
// import React from 'react'
// import { View , Text } from 'react-native-web';
// import WomenProductList from "../ProductList/WomenProductList"
// export default function ForMens() {
//     return (

//         <View>
//           <WomenProductList/> 
        
//         </View>

//     );


// };

