import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
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
// import PromoCard from '../../components/PromoSwiperComponent/PromoCard';

const SwiperData = [
  {
    id: 1,
    backgroundColor: '#FFA4B3',
    discount: '50-40% OFF',
    product: 'New Collection',
    colorsoff: 'All colors available',
    image: PNG_IMG.GOOGLE_PNG,
  },
  {
    id: 2,
    backgroundColor: colors.bgYellow,
    discount: '50-40% OFF',
    product: 'New Collection',
    colorsoff: 'All colors available',
    image: PNG_IMG.GOOGLE_PNG,
  },
  {
    id: 3,
    backgroundColor: colors.green,
    discount: '50-40% OFF',
    product: 'New Collection',
    colorsoff: 'All colors available',
    image: PNG_IMG.GOOGLE_PNG,
  },
];
const Home = () => {
  const {logout} = useAuth();
  const navigation = useNavigation();
  const [search, setSearch] = useState();
  const screenWidth = Dimensions.get('screen').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}: any) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: 189,
            width: screenWidth,
            backgroundColor: item.backgroundColor,
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 10,
          }}></View>
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
              height: 10,
              width: 10,
              backgroundColor: activeIndex === index ? 'green' : 'red',
              borderRadius: 5,
              marginHorizontal: 2,
            }}></View>
        ))}
      </View>
    );
  };

  const handleScrool = (event: any) => {
    const scrollPostion = event.nativeEvent.contentOffset.x;
    console.log({scrollPostion});

    const index = Math.round(scrollPostion / screenWidth);
    setActiveIndex(index);
    console.log({index});
  };
  return (
    <SafeAreaView style={globalStyles.globalStylesMainStack}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingVertical: 20}}>
        <StatusBarComponent backgroundColor={colors.lightGray} />
        <HeaderComponent />

        <View style={{paddingHorizontal: 8, marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              borderRadius: 10,
              height: 50,
              backgroundColor: colors.white,
              shadowColor: colors.black,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 2,
            }}>
            <Icon
              name="search"
              size={20}
              color={colors.SearchIconColor}
              style={{marginRight: 10}}
            />
            <TextInput
              placeholder="Search any Product..."
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.black,
                textDecorationLine: 'none',
              }}
              placeholderTextColor={colors.SearchIconColor}
            />
            <Icon
              name="mic"
              size={20}
              color={colors.SearchIconColor}
              style={{marginRight: 10}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: 10,
          }}>
          <TextHeading
            fontSize={18}
            fontColor={colors.black}
            fontWeight="600"
            title="All Featured"
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: colors.white,
                paddingHorizontal: 8,
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: colors.black,
                elevation: 4,
                borderRadius: 6,
                gap: 5,
              }}>
              <TextHeading
                fontSize={14}
                fontWeight="400"
                fontColor={colors.black}
                title="Sort"
              />
              <SortIcon />
            </View>

            <View
              style={{
                backgroundColor: colors.white,
                paddingHorizontal: 8,
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: colors.black,
                elevation: 4,
                borderRadius: 6,
                gap: 5,
              }}>
              <TextHeading
                fontSize={14}
                fontWeight="400"
                fontColor={colors.black}
                title="Filter"
              />
              <FilterIconSvg />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {[...Array(5)].map((item, index) => (
            <View key={index}>
              <Image
                source={PNG_IMG.GETSTARTED_SCREEN}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 50,
                  resizeMode: 'cover',
                }}
              />
              <View>
                <TextHeading
                  fontSize={12}
                  fontColor={colors.black}
                  fontWeight="400"
                  title="Beauty"
                  headingStyles={{textAlign: 'center'}}
                />
              </View>
            </View>
          ))}
        </View>
        <View style={{marginTop: 16}}>
          <FlatList
            data={SwiperData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScrool}
            snapToAlignment="center" // Align to the center for better snapping
            decelerationRate="fast"
          />

          {renderDotIndicators()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
