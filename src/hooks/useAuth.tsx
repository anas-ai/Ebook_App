import { View, Text } from 'react-native'
import React from 'react'
import { AuthContext } from '../context/AuthContext'

const useAuth = () => {
const context = React.useContext(AuthContext);
if(!context){
    throw new Error('useAuthContext must be used within an AuthProvider')
}
return context
}

export default useAuth