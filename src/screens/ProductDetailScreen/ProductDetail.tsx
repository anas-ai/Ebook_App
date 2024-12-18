// import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
// import React from 'react';
// import {colors} from '../../styles/colors';

// const ProductDetail = ({route}: any) => {
//   const {bookDetails} = route.params;

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{uri: bookDetails?.bookCover}} style={styles.bookCover} />
//       <Text style={styles.bookName}>{bookDetails?.bookName}</Text>
//       <Text style={styles.author}>by {bookDetails?.author}</Text>
//       <Text style={styles.price}>{bookDetails?.price}</Text>
//       <Text style={styles.detail}>{bookDetails?.detail}</Text>
//       <Text style={styles.sku}>SKU: {bookDetails?.sku}</Text>
//       <Text style={styles.rating}>Rating: {bookDetails?.rating} ⭐</Text>
//       <Text style={styles.tags}>Tags: {bookDetails?.tags}</Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: colors.white,
//   },
//   bookCover: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   bookName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: colors.black,
//     marginBottom: 8,
//   },
//   author: {
//     fontSize: 16,
//     color: colors.gray,
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: colors.primary,
//     marginBottom: 16,
//   },
//   detail: {
//     fontSize: 14,
//     color: colors.black,
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   sku: {
//     fontSize: 14,
//     color: colors.gray,
//     marginBottom: 8,
//   },
//   rating: {
//     fontSize: 16,
//     color: colors.black,
//     marginBottom: 8,
//   },
//   tags: {
//     fontSize: 14,
//     color: colors.primary,
//   },
// });

// export default ProductDetail;
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles/globalStyles';
import GoBackCustomButton from '../../components/GoBackButtonComponent/GoBackCustomButton';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import {colors} from '../../styles/colors';
 const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
const ProductDetail = ({route, navigation}: any) => {
  const {bookDetails} = route.params;
  return (
    <SafeAreaView style={globalStyles.globalStylesMainStack}>
      <GoBackCustomButton navigation={navigation} />
      <View style={style.container}>
        <Image
          source={{uri: bookDetails?.bookCover}}
          style={style.bookCoverStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
    elevation:5,
    backgroundColor:colors.white,
    borderRadius:10,
    marginTop:20,
  },
  bookCoverStyle: {
    height:screenHeight *0.5 ,
    width: screenWidth *0.6,
    resizeMode: 'contain',
  },
});
export default ProductDetail;
