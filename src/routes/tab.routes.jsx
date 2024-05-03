import {createBottonTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Listamaquinas from '../screens/Listamaquinas';
import SphereSoluctions from '../screens/SphereSoluctions';

const Tab = createBottonTabNavigator();

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
            <Tab.Screen
            name="Listamaquinas"
            component={Listamaquinas}
            options={{
                tabBarIcon: ({focused}) => (
                    <Feather
                    name="list"
                    size={24}
                    color={focused ? '#FFD700' : '#36393f'}
                    />
                ),
                tabBarLabel: 'Listamaquinas',
                tabBarActiveTintColor: '#FFD700',
                tabBarInactiveTintColor: '#36393f',
            }}
            />
            <Tab.Screen
            name="SphereSoluctions"
            component={SphereSoluctions}
            options={{
                tabBarIcon: ({focused}) => (
                    <Feather
                    name="settings"
                    size={24}
                    color={focused ? '#FFD700' : '#36393f'}
                    />
                ),
                tabBarLabel: 'SphereSoluctions',
                tabBarActiveTintColor: '#FFD700',
                tabBarInactiveTintColor: '#36393f',
            }}
            />
           
        </Tab.Navigator>
    );
}

export default TabRoutes;
