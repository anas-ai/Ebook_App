import { View, Text } from 'react-native'
import React from 'react'
import { TextHeading } from '../../utils/typography'
import { colors } from '../../styles/colors'
import { CardTitleProps } from '@rneui/base/dist/Card/Card.Title'
import { titleprops } from '../../constants/types'

const Title:React.FC<titleprops> = ({title,title2}) => {
  return (
    <View>
        <TextHeading
          title={title}
          fontColor={colors.black}

          fontWeight="700"
          fontSize={36}
        />
        <TextHeading
          title={title2}
          fontColor={colors.black}
          fontWeight="700"
          fontSize={36}
        />
      </View>
  )
}

export default Title