import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function StackNavigator(){


    return(

        <NavigationContainer>
            <Stack.Navigator>

            </Stack.Navigator>
        </NavigationContainer>
    )
}