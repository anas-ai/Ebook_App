import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useAuth from '../../hooks/useAuth';
import {colors} from '../../styles/colors';
import {TextHeading} from '../../utils/typography';
import { axiosInstance } from '../../utils/api';
import { ApiConfig } from '../../config/ApiConfig';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductCard = () => {
  const screenWidth = Dimensions.get('window').width;

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

  const renderloading = () => {
    if (loading) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }
  };

  

  const ProductsItem = ({item}: any) => {
    return (
      <SafeAreaView style={{flex: 1,marginVertical:20}}>
        {/* <View
          style={{
            backgroundColor: colors.white,
            margin: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderBottomColor: colors.black,
              borderBottomWidth: 1,
              padding: 5,
            }}>
            <Image
              source={{uri: item?.bookCover }}
              style={{
                width: 170,
                height: 150,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{marginTop: 5, padding: 5, paddingBottom: 20}}>
            <TextHeading
              title={
                item?.author.length > 30
                  ? item?.author.slice(0, 30) + '...'
                  : item?.author
              }
              fontWeight="500"
              fontColor={colors.black}
              fontSize={12}
            />
            <TextHeading
              title={
                item?.description.length > 30
                  ? item?.description.slice(0, 30) + '...'
                  : item?.description
              }
              fontWeight="400"
              fontColor={colors.black}
              fontSize={10}
            />
            <TextHeading
              title={`$${
                item?.price.length > 30
                  ? item?.price.slice(0, 30) + '...'
                  : item?.price
              }`}
              fontWeight="500"
              fontColor={colors.black}
              fontSize={12}
            />

            
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              {Array.from({length: 5}, (_, index) => (
                <Icon
                  key={index}
                  name={
                    index < Math.round(item?.rating?.rate) ? 'star' : 'star-o'
                  } 
                  size={15} 
                  color="#FFD700" 
                />
              ))}
              <TextHeading
                title={` (${item?.rating?.count} reviews)`}
                fontWeight="400"
                fontColor={colors.black}
                fontSize={10}
              />
            </View>
          </View>
        </View> */}

        <View
          style={{
            alignItems: 'center',
            borderRadius: 10,
            padding:10,
            elevation:10,
            backgroundColor:colors.white,
            marginHorizontal:10,
          
          }}>
          <Image
            source={{uri: item?.bookCover}}
            style={{
              height: screenWidth * 0.5, 
              width: screenWidth * 0.5,  
              resizeMode: 'contain', 
              borderRadius: 10, 
            }}
          />
          <View style={{paddingVertical: 5, alignItems: 'center'}}>
            <TextHeading
              title={
                item?.bookName.length > 30
                  ? item?.bookName.slice(0, 30) + '...'
                  : item?.bookName
              }
              fontWeight="500"
              fontColor={colors.black}
              fontSize={14}
              headingStyles={{textAlign: 'center', width: '100%'}}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Animated.FlatList
          ref={Ref}
          data={products}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: 'gray'}} />
          )}
          renderItem={ProductsItem}
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
        )} */}
      </View>
    </View>
  );
};

export default ProductCard;
