import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Listamaquinas from "../screens/Listamaquinas";
import SphereSoluctions from "../screens/SphereSoluctions";
import Cadastrar from "../screens/Cadastrar";
import CadastrarMaq from "../screens/CadastrarMaq";
import Login from "../screens/Login";
import PesquisaMaqs from "../screens/PesquisaMaqs";
import PesquisarEmps from "../screens/PesquisarEmps";
import NotaFinalEmp from "../screens/NotaFinalEmp";
import DicasEmp from "../screens/DicasEmp";
import DicasMaq from "../screens/DicasMaq";
import PlantaDicasEmp from "../screens/PlantaDicasEmp";
import Recursos from "../screens/Recursos";
import StatusMaq from "../screens/StatusMaq";
import RanqueGlobalEmps from "../screens/RanqueGlobalEmps";
import PaginaGastosLucros from "../screens/PaginaGastosLucros";
import Paginamaqsmelhor from "../screens/Paginamaqsmelhor";
import IaGuia from "../screens/IaGuia";
import paginaADM from "../screens/paginaADM";
import plantaEmp from "../screens/plantaEmp";
import { Feather } from "@expo/vector-icons";
import React from "react";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Home",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Cadastrar Usuario"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Cadastrar Empresa",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
     
    </Stack.Navigator>
  );
};
export default StackRoutes;
