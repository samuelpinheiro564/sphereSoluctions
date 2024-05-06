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
        name="SphereSoluctions"
        component={SphereSoluctions}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="SphereSoluctions"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "SphereSoluctions",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
     
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
      <Stack.Screen
        name="CadastrarMaq"
        component={CadastrarMaq}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Cadastrar Maquina"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Cadastrar Maquina",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Login"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Login",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="PesquisaMaqs"
        component={PesquisaMaqs}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Pesquisa Maquinas"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Pesquisa Maquinas",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="PesquisarEmps"
        component={PesquisarEmps}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Pesquisar Empresas"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Pesquisar Empresas",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="NotaFinalEmp"
        component={NotaFinalEmp}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Nota Final Empresa"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Nota Final Empresa",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="DicasEmp"
        component={DicasEmp}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Dicas Empresa"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Dicas Empresa",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="DicasMaq"
        component={DicasMaq}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Dicas Maquina"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Dicas Maquina",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="PlantaDicasEmp"
        component={PlantaDicasEmp}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Planta Dicas Empresa"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Planta Dicas Empresa",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="Recursos"
        component={Recursos}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Recursos"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Recursos",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="StatusMaq"
        component={StatusMaq}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Status Maquina"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Status Maquina",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="RanqueGlobalEmps"
        component={RanqueGlobalEmps}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Ranque Global Empresas"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Ranque Global Empresas",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="PaginaGastosLucros"
        component={PaginaGastosLucros}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Pagina Gastos Lucros"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Pagina Gastos Lucros",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="Paginamaqsmelhor"
        component={Paginamaqsmelhor}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Pagina Maquinas Melhores"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Pagina Maquinas Melhores",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="IaGuia"
        component={IaGuia}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Ia Guia"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Ia Guia",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="paginaADM"
        component={paginaADM}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="pagina ADM"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "pagina ADM",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="plantaEmp"
        component={plantaEmp}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="planta Emp"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "planta Emp",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
