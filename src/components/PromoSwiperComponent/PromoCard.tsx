import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import {TextHeading} from '../../utils/typography';
import {TouchableOpacity} from 'react-native';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PNG_IMG } from '../../constants/images';

export const data = [{}];

const PromoCard = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 24}}>
      <View
        style={{
          height: 189,
          width: 343,
          backgroundColor: '#FFA4B3',
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 24,
          flexDirection: 'row',
          justifyContent:"space-between",
          alignItems:'center'
        }}>
        <View>
          <TextHeading
            title="50-40% OFF"
            fontSize={24}
            fontColor={colors.white}
            fontWeight="700"
          />
          <TextHeading
            title="Now in (product)"
            fontSize={14}
            fontColor={colors.white}
            fontWeight="500"
          />
          <TextHeading
            title="All colours"
            fontSize={14}
            fontColor={colors.white}
            fontWeight="500"
          />
          <View style={{paddingTop: 16}}>
            <Button
              title="Shop Now"
              type="outline"
              buttonStyle={{
                borderColor: colors.white,
                borderWidth: 1,
                borderRadius: 5,
                width: '70%',
                paddingVertical: 6,
              }}
              titleStyle={{color: colors.white}}
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
        <View>
          <Image source={PNG_IMG.GOOGLE_PNG} style={{height:70,width:70}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PromoCard;
