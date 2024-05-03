import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Listamaquinas from "../screens/Listamaquinas";
import SphereSoluctions from "../screens/SphereSoluctions";
import Cadastrar from "../screens/Cadastrar";
import CadastrarMaq from "../screens/CadastrarMaq";
import Login from "../screens/Login";
import pesquisarMaqs from "../screens/pesquisarMaqs";
import pesquisaEmps from "../screens/pesquisaEmps";
import NotaFinalEmp from "../screens/NotaFinalEmp";
import DicasEmp from "../screens/DicasEmp";
import DicasMaq from "../screens/DicasMaq";
import PlantaDicasEmp from "../screens/PlantaDicasEmp";
import Recursos from "../screens/Recursos";
import StatusMaq from "../screens/StatusMaq";
import RanqueGlobalEmps from "../screens/RanqueGlobalEmps";
import PaginaGastosLucros from "../screens/PaginaGastosLucros";
import Paginamaqsmelhor from "../screens/Paginamaqsmelhor";
import iaGuia from "../screens/iaGuia";
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
      <Stack.Screen
        name="CadastrarMaq"
        component={CadastrarMaq}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Cadastrar Máquina"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Cadastrar Máquina",
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
        name="pesquisarMaqs"
        component={pesquisarMaqs}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Pesquisar Máquinas"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Pesquisar Máquinas",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="pesquisaEmps"
        component={pesquisaEmps}
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
        name="Listamaquinas"
        component={Listamaquinas}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Listar Máquinas"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Listar Máquinas",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />

      <Stack.Screen
        name="SphereSoluctions"
        component={SphereSoluctions}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="Sphere Soluctions"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Sphere Soluctions",
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
              name="Dicas Máquina"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Dicas Máquina",
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
              name="Status Máquina"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Status Máquina",
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
              name="Página Gastos Lucros"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Página Gastos Lucros",
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
              name="Página Máquinas Melhores"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Página Máquinas Melhores",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
      <Stack.Screen
        name="iaGuia"
        component={iaGuia}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="IA Guia"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "IA Guia",
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
              name="Página ADM"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Página ADM",
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
              name="Planta Empresa"
              size={24}
              color={focused ? "#FFD700" : "#36393f"}
            />
          ),
          StackBarLabel: "Planta Empresa",
          StackBarActiveTintColor: "#FFD700",
          StackBarInactiveTintColor: "#36393f",
        }}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
