import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import {globalStyles} from '../../styles/globalStyles';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import StatusBarComponent from '../../components/StatusBarComponent/statusBar';
import {Icon, SearchBar} from '@rneui/themed';
import {colors} from '../../styles/colors';

const Home = () => {
  const {logout} = useAuth();
  const navigation = useNavigation();
  const [search, setSearch] = useState();

  const updateSearch = (txt: any) => {
    setSearch(txt);
  };

  return (
    <SafeAreaView style={globalStyles.globalContainer}>
      <StatusBarComponent />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <HeaderComponent />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop:20
          }}>
          <SearchBar
            placeholder="Search any Product.."
            onChangeText={updateSearch}
            value={search}
            platform="android"
            containerStyle={{
              flex: 1,
              backgroundColor: 'transparent',
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
            }}
            inputContainerStyle={{
              backgroundColor: '#fff',
              borderBottomWidth: 1,
              paddingRight: 40, 
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#C0C0C0',
            }}
            inputStyle={{
              color: '#000',
            }}
            placeholderTextColor="#999"
            searchIcon={{size: 24, color: colors.GrayPlaceHolderTextColor}}
          />
          <Icon
            name="mic"
            type="Feather"
            color={colors.GrayPlaceHolderTextColor}
            containerStyle={{
              position: 'absolute',
              right: 10,
              paddingTop:20
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;


