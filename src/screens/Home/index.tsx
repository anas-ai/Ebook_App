import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
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
const Home = () => {
  const {logout} = useAuth();
  const navigation = useNavigation();
  const [search, setSearch] = useState();

  const updateSearch = (txt: any) => {
    setSearch(txt);
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
          }}>
          <TextHeading
            fontSize={20}
            fontColor={colors.black}
            fontWeight="600"
            title="All Featured"
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
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
                fontSize={16}
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
                fontSize={16}
                fontWeight="400"
                fontColor={colors.black}
                title="Filter"
              />
              <SortIcon />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
