import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackHeaderProps, NativeStackScreenProps,  } from '@react-navigation/native-stack';
import { RootBottomTabParamList } from '../navigation';



export default function PlannerScreen({ navigation }: NativeStackScreenProps<RootBottomTabParamList, 'PlannerScreen'>) {


    useEffect(() => {
        console.log("Rending Planner Screen");
    }, [])

    return (
        <View>
            <Text>PlannerScreen</Text>
            <Button title='Go to Home' onPress={() => navigation.navigate("PlannerScreen")} />
        </View>
    )
}