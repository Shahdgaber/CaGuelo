<<<<<<< HEAD
// import React from 'react'
// import { View , Text } from 'react-native-web';
// import ChildProductList from "../ProductList/ChildProductList"

// export default function ForChildrens() {
//     return (

//         <View>
//             <ChildProductList/>
        
//         </View>

//     );


// };

=======
>>>>>>> origin/firebase
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChildProductList from "../ProductList/ChildProductList"

const ForChildrens = () => {
  return (
    <View style={styles.container}>
      <ChildProductList />
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

export default ForChildrens;
