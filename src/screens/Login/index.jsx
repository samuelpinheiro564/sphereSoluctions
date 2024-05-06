import styles from "./styles.js";
import { TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import app from "../../db/index.js";

export default function Login() {
  const [nome, setNome] = useState("");

  const navigation = useNavigation();

  const Entrar = async () => {
      try {
        
          await app.get("/usuarios/:id");
          navigation.navigate("paginaADM");

      } catch (error) {
        console.error(error.message);
      }
    } 
    const ClearInputs = () => {
        setNome("");
        };

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Empresas Cadastradas</Text>
<TextInput style={styles.input} placeholder="digite a empresa" value={nome} onChangeText={setNome} />

      </View>
    );
  };

