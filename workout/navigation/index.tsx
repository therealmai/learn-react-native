
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Workout' component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export type RootBottomTabParamList = {
    HomeScreen: undefined;
    PlannerScreen: undefined;
}

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName='HomeScreen'>
            <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
            <BottomTab.Screen name="PlannerScreen" component={PlannerScreen} />
        </BottomTab.Navigator>
    )
}