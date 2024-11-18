import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import {globalStyles} from '../../styles/globalStyles';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import StatusBarComponent from '../../components/StatusBarComponent/statusBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import {TextHeading} from '../../utils/typography';
import SortIcon from '../../assets/images/svg/sort';
import {PNG_IMG} from '../../constants/images';
import FilterIconSvg from '../../assets/images/svg/filter';
import {Button} from '@rneui/themed';

const SwiperData = [
  {
    id: 1,
    // backgroundColor: '#FFA4B3',
    // discount: '50-40% OFF',
    // product: 'New Collection',
    // colorsoff: 'All colors available',
    // buttonTitle: 'Shop Now', // Add button title here
    image: PNG_IMG.BG_1_HOME,
  },
  {
    id: 2,
    // backgroundColor: colors.bgYellow,
    // discount: '50-40% OFF',
    // product: 'New Collection',
    // colorsoff: 'All colors available',
    // buttonTitle: 'Discover', // Add button title here
    image: PNG_IMG.BG_2_HOME,
  },
  {
    id: 3,
    // backgroundColor: colors.green,
    // discount: '50-40% OFF',
    // product: 'New Collection',
    // colorsoff: 'All colors available',
    // buttonTitle: 'Explore Now',
    image: PNG_IMG.BG_3_HOME,
  },
  {
    id: 4,
    // backgroundColor: colors.green,
    // discount: '50-40% OFF',
    // product: 'New Collection',
    // colorsoff: 'All colors available',
    // buttonTitle: 'Explore Now',
    image: PNG_IMG.BG_4_HOME,
  },
];
const CustomSwiper = () => {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % SwiperData.length;
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const renderItem = ({item}: any) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View
          style={{
            height: 189,
            width: 360,
            backgroundColor: item.backgroundColor,
            borderRadius: 5,
            marginTop: 8,
            marginHorizontal: 2,
          }}>
           <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
              paddingRight: 30,
            }}>
            <View>
              <TextHeading
                title={item?.discount}
                fontColor={colors.white}
                fontSize={20}
                fontWeight="700"
              />
              <TextHeading
                title={item?.product}
                fontColor={colors.white}
                fontSize={20}
                fontWeight="700"
              />
              <TextHeading
                title={item?.colorsoff}
                fontColor={colors.white}
                fontSize={20}
                fontWeight="700"
              />

              <Button
                title={item?.buttonTitle}
                type="outline"
                buttonStyle={{
                  borderColor: colors.white,
                  borderWidth: 1,
                  borderRadius: 6,
                }}
                titleStyle={{color: colors.white}}
                containerStyle={{width: '70%', paddingTop: 16}}
                iconRight
                icon={
                  <Icon
                    name="arrow-forward"
                    size={20}
                    color={colors.white}
                    style={{marginLeft: 10}}
                  />
                }
              />
            </View>

            
          </View> 
        </View> */}

        <View
          style={{
            width: screenWidth,
            height: 200,
            marginLeft: 10,
            backgroundColor: colors.bgBlack,
          }}>
          <Image
            source={item?.image}
            style={{resizeMode: 'stretch', height: '100%', width: '100%'}}
          />
        </View>
      </SafeAreaView>
    );
  };

  const renderDotIndicators = () => {
    return (
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        {SwiperData.map((dot, index) => (
          <View
            key={index}
            style={{
              height: 8,
              width: 8,
              backgroundColor: activeIndex === index ? '#FFA4B3' : '#DEDBDB',
              borderRadius: 5,
              marginHorizontal: 2,
            }}></View>
        ))}
      </View>
    );
  };

  const handleScrool = (event: any) => {
    const scrollPostion = event.nativeEvent.contentOffset.x;
    // console.log({scrollPostion});

    const index = Math.round(scrollPostion / screenWidth);
    setActiveIndex(index);
    // console.log({index});
  };

  return (
    <SafeAreaView style={{paddingVertical: 20}}>
      <View>
        <FlatList
          data={SwiperData}
          ref={flatListRef}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScrool}
          snapToAlignment="start"
          decelerationRate="fast"
          removeClippedSubviews
          contentContainerStyle={{padding: 0, margin: 0}}
        />

        {renderDotIndicators()}
      </View>
    </SafeAreaView>
  );
};

export default CustomSwiper;
