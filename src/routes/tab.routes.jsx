import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';


const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <Feather
                    name="home"
                    size={24}
                    color={focused ? '#FFD700' : '#36393f'}
                    />
                ),
                tabBarLabel: 'Home',
                tabBarActiveTintColor: '#FFD700',
                tabBarInactiveTintColor: '#36393f',
            }}
            />
          
          
           
        </Tab.Navigator>
    );
}

export default TabRoutes;
