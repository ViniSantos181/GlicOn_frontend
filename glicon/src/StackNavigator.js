import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "./screens/login";
import { RegisterPage } from "./screens/register";

const Stack = createNativeStackNavigator()

export default function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={LoginPage}/>
                <Stack.Screen name="Navigation" component={RegisterPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}