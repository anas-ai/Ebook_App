import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../styles/globalStyles';
import StatusBarComponent from '../../components/StatusBarComponent/statusBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import {TextHeading} from '../../utils/typography';
import SortIcon from '../../assets/images/svg/sort';
import {PNG_IMG} from '../../constants/images';
import FilterIconSvg from '../../assets/images/svg/filter';
import {Button} from '@rneui/themed';
import CustomSwiper from '../../components/PromoSwiperComponent/PromoCard';
import ProductCard from '../../components/ProducCardComponent/ProductCard';
import useAuth from '../../hooks/useAuth';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenName} from '../../constants/ScreensNames';

const Home = (props: any) => {
  const {logout} = useAuth();

  return (
    <SafeAreaView style={globalStyles.globalStylesMainStack}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingVertical: 4}}>
        <StatusBarComponent backgroundColor={colors.lightGray} />
        <HeaderComponent {...props} />

        <View style={{paddingHorizontal: 8, marginVertical: 20}}>
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
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
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
            <TouchableOpacity onPress={logout}>
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
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: colors.white,
                paddingHorizontal: 8,
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
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {[...Array(5)].map((item, index) => (
            <View key={index}>
              <Image
                source={PNG_IMG.GETSTARTED_SCREEN}
                style={{
                  height: 56,
                  width: 56,
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

        <View>
          <CustomSwiper />
        </View>

        <View>
          <ProductCard {...props} />
        </View>

        <View style={{marginVertical: 10}}>
          <View
            style={{
              padding: 8,
              width: '100%',
              backgroundColor: colors.PingBg,
              borderRadius: 8,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{paddingHorizontal: 4, paddingVertical: 4}}>
                <TextHeading
                  title="Trending Products "
                  fontColor={colors.white}
                  fontWeight="500"
                  fontSize={16}
                />

                <View
                  style={{
                    paddingTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <Icon
                    name="calendar-outline"
                    size={16}
                    color={colors.white}
                  />
                  <TextHeading
                    title="Last Date 29/02/22 "
                    fontColor={colors.white}
                    fontSize={12}
                    fontWeight="400"
                  />
                </View>
              </View>
              <View>
                <Button
                  title="View All"
                  type="outline"
                  buttonStyle={{
                    borderColor: colors.white,
                    borderWidth: 1,
                    borderRadius: 6,
                  }}
                  titleStyle={{color: colors.white, fontSize: 14}}
                  containerStyle={{width: '100%'}}
                  iconRight
                  icon={
                    <Icon
                      name="arrow-forward"
                      size={18}
                      color={colors.white}
                      style={{marginLeft: 10}}
                    />
                  }
                  size="sm"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
