import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import app from "../../db/index.js";

export default function PesquisaEmps() {
  const [nome, setNome] = useState("");
  const [empresas, setEmpresas] = useState([]);

  const Pesquisar = async () => {
    try {
      const response = await app.get(`/Emps/nome/${nome}`);
      if (response.status === 404) {
        ClearInputs();
        setEmpresas([]);
        setMsgerrorADM("Empresa não encontrada.");
      } else {
        const empresasExibidas = response.data.slice(0, 8); // Limita a exibição a no máximo 8 empresas
        setEmpresas(empresasExibidas);
        ClearInputs();
      }
    } catch (error) {
      console.error("Erro ao pesquisar empresas:", error);
    }
  };

  const ClearInputs = () => {
    setNome("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Empresas Cadastradas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da empresa"
        value={nome}
        onChangeText={setNome}
      />
      <TouchableOpacity style={styles.botao} onPress={Pesquisar}>
        <Text style={styles.textobotao}>Pesquisar</Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        {empresas.map((empresa, index) => (
          <View key={index} style={styles.card}>
            <Text>{empresa.nome}</Text>
            <Text>{empresa.email}</Text>
            {/* Adicione outros campos do objeto 'empresa' conforme necessário */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  textobotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
});
