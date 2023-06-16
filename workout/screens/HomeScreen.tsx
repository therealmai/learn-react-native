import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootBottomTabParamList } from '../navigation'




export default function HomeScreen({ navigation }: NativeStackScreenProps<RootBottomTabParamList, 'HomeScreen'>) {

    useEffect(() => {
        console.log("rendering homescreen ")
    }, [])

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='Go to planner' onPress={() => navigation.navigate("HomeScreen")} />
        </View>
    )
}
