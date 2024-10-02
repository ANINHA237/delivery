import Login from "./screens/login/login.jsx";
import Home from "./screens/home/home.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="home" component={Home} options={{
                headerShown: false
            }} />

            <Stack.Screen name="login" component={Login} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;