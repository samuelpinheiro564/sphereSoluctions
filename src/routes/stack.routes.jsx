import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Descricao from "../screens/Descricao";
import ListPlanets from "../screens/ListPlanets";
import Conquistador from "../screens/Conquistador";
import CriarPlanetas from "../screens/CriarPlanetas";
import {planet} from '../data/UserPlanet';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{
        StackBarIcon: ({focused}) => (
          <Feather
          name="home"
          size={24}
          color={focused ? '#FFD700' : '#36393f'}
          />
        ),
        StackBarlabel:"Inicial",
        StackBarActiveTintColor: '#FFD700',
        StackBarInactiveTintColor: '#36393f',
      }}
      />
      <Stack.Screen 
      name="Descricao"
       component={Descricao} 
       initialParams={{data:planet}}
       options={{
        StackBarIcon: ({focused}) => (
          <Feather
          name="Descrição"
          size={24}
          color={focused ? '#FFD700' : '#36393f'}
          />
        ),
        StackBarlabel:"Descrição",
        StackBarActiveTintColor: '#FFD700',
        StackBarInactiveTintColor: '#36393f',
      }}
        />
      <Stack.Screen 
      name="ListPlanets" 
      component={ListPlanets}  
      initialParams={{data:planet}}
      options={{
        StackBarIcon: ({focused}) => (
          <Feather
          name="Lista de Planetas"
          size={24}
          color={focused ? '#FFD700' : '#36393f'}
          />
        ),
        StackBarlabel:"Lista de Planetas",
        StackBarActiveTintColor: '#FFD700',
        StackBarInactiveTintColor: '#36393f',
      }}
      />
      <Stack.Screen 
      name="Conquistador" 
      component={Conquistador} 
      options={{
        StackBarIcon: ({focused}) => (
          <Feather
          name="Conquistador"
          size={24}
          color={focused ? '#FFD700' : '#36393f'}
          />
        ),
        StackBarlabel:"Conquistador",
        StackBarActiveTintColor: '#FFD700',
        StackBarInactiveTintColor: '#36393f',
      }}
      />
      <Stack.Screen 
      name="CriarPlanetas" 
      component={CriarPlanetas}
      initialParams={{planet: null,edit: false}}
      options={{
        StackBarIcon: ({focused}) => (
          <Feather
          name="Criar Planetas"
          size={24}
          color={focused ? '#FFD700' : '#36393f'}
          />
        ),
        StackBarlabel:"Criar Planetas",
        StackBarActiveTintColor: '#FFD700',
        StackBarInactiveTintColor: '#36393f',
      }} 
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;