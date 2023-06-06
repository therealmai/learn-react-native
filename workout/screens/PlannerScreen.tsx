import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}: any) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='Go to Home' onPress={() => navigation.push("Home")} />
        </View>
    )
}