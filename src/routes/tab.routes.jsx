import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Spheresoluctions from '../screens/SphereSoluctions';
import PesquisaEmps from '../screens/PesquisarEmps';


const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator>
                <Tab.Screen
            name="PesquisaEmps"
            component={PesquisaEmps}
            options={{
                tabBarIcon: ({focused}) => (
                    <Feather
                    name="PesquisaEmps"
                    size={24}
                    color={focused ? '#FFD700' : '#36393f'}
                    />
                ),
                tabBarLabel: 'PesquisaEmps',
                tabBarActiveTintColor: '#FFD700',
                tabBarInactiveTintColor: '#36393f',
            }}
            />
                 <Tab.Screen
            name="Spheresoluctions"
            component={Spheresoluctions}
            options={{
                tabBarIcon: ({focused}) => (
                    <Feather
                    name="Spheresoluctions"
                    size={24}
                    color={focused ? '#FFD700' : '#36393f'}
                    />
                ),
                tabBarLabel: 'Spheresoluctions',
                tabBarActiveTintColor: '#FFD700',
                tabBarInactiveTintColor: '#36393f',
            }}
            />

          
           
        </Tab.Navigator>
    );
}

export default TabRoutes;
