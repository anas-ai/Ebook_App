import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useAuth from '../../hooks/useAuth';
import {colors} from '../../styles/colors';
import {TextHeading} from '../../utils/typography';
import {axiosInstance} from '../../utils/api';
import {ApiConfig} from '../../config/ApiConfig';
import {Icon} from '@rneui/themed';
import {Rating} from 'react-native-ratings';
import {moderateScale} from 'react-native-size-matters';
import {ScreenName} from '../../constants/ScreensNames';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

const ProductCard = (props: any) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const {logout, loading, setLoading} = useAuth();
  const [currentIndex, setcurrentIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const Ref = useRef<FlatList<Product>>(null);

  const GetProductData = async () => {
    try {
      const res = await axiosInstance.get(ApiConfig.GET_PRODUCT);
      setProducts(res?.data?.data);
      setLoading(false); // Updated to stop loading after data fetch
      console.log(res?.data, 'Fetched product data');
    } catch (error) {
      console.log('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    GetProductData();
  }, []);

  const ProductsItem = ({item}: any) => {
    return (
      <SafeAreaView style={{flex: 1, marginBottom: 20}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            props.navigation.navigate(ScreenName.PRODUCT_DETAILS_SCREEN, {
              bookDetails: item,
            })
          }>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: colors.white,
              marginHorizontal: 10,
              elevation: 10,
            }}>
            <Image
              source={{uri: item?.bookCover}}
              style={{
                height: screenHeight * 0.4,
                width: screenWidth * 0.6,

                resizeMode: 'contain',
              }}
            />
            <View style={{paddingVertical: 8, paddingLeft: 18}}>
              <TextHeading
                title={
                  item?.bookName.length > 30
                    ? item?.bookName.slice(0, 30) + '...'
                    : item?.bookName
                }
                fontWeight="500"
                fontColor={colors.black}
                fontSize={14}
              />

              <Rating
                imageSize={16}
                readonly
                startingValue={item?.rating}
                style={{alignItems: 'flex-start', paddingVertical: 8}}
              />
              <TextHeading
                title={item?.author}
                fontColor={colors.gray}
                fontSize={12}
                fontWeight="600"
                headingStyles={{paddingBottom: 2}}
              />
              <TextHeading
                title={`$${item?.price}`}
                fontColor={colors.primary}
                fontSize={12}
                fontWeight="600"
              />
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View style={{marginVertical: 10}}>
      <Animated.FlatList
        ref={Ref}
        data={products}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'gray'}} />
        )}
        renderItem={({item}) => (
          <ProductsItem item={item} navigation={props.navigation} />
        )}
        keyExtractor={item =>
          item?.id ? item.id.toString() : Math.random().toString()
        }
        nestedScrollEnabled={true}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
      />

      {/* {products.length > 0 && (
          <>
            <Animated.View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  const newIndex = currentIndex + 1;
                  if (newIndex < products.length) {
                    setcurrentIndex(newIndex);
                    Ref.current?.scrollToIndex({
                      animated: true,
                      index: newIndex,
                    });
                  }
                }}
                style={{
                  position: 'absolute',
                  left: '85%',
                  bottom: 100,
                  backgroundColor: colors.gray,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                }}>
                <Icon name="arrow-forward" size={20} color={colors.black} />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  const newIndex = currentIndex - 1;
                  if (newIndex >= 0) {
                    setcurrentIndex(newIndex);
                    Ref.current?.scrollToIndex({
                      animated: true,
                      index: newIndex,
                    });
                  }
                }}
                style={{
                  position: 'absolute',
                  left: '5%',
                  bottom: 100,
                  backgroundColor: colors.gray,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                }}>
                <Icon name="arrow-back" size={20} color={colors.black} />
              </TouchableOpacity>
            </Animated.View>
          </>
        )}  */}
    </View>
  );
};

export default ProductCard;
