import styles from "./styles.js";
import { TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import appUsuarioADM from "../../db/UsuarioADM/index.js";
import appEmpresa from "../../db/Empresa/index.js";

export default function Login() {
    const [inputs, setInputs] = useState(true);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("");
  const [tipoUser, setTipoUser] = useState("");
  const [ExistusuarioADM, setExistusuarioADM] = useState(false);
  const [msgerrorADM, setMsgerrorADM] = useState("");
  const [msgerrorEmpresa, setMsgerrorEmpresa] = useState("");
  const [ExistusuarioEmpresa, setExistusuarioEmpresa] = useState(false);

  const navigation = useNavigation();

  const Entrar = async () => {
    if (setTipoUser == "UsuarioADM") {
      try {
        if (response.status == 404) {
           setExistusuarioADM(true);
           setInputs(false);
           ClearInputs();
           setMsgerrorADM("UsuarioAdm não existe! Cadastre-se para entrar.");
           return;
        } else {
          await appUsuarioADM.get("/usuarios/:id");
          navigation.navigate("paginaADM");
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      try {
        if (response.status == 404) {
           setExistusuarioEmpresa(true);
           setInputs(false);
           ClearInputs();
           setMsgerrorEmpresa("UsuarioEmpresa não existe! Cadastre-se para entrar.");
              return;
        } else {
          await appEmpresa.get("/empresas/:id");
          navigation.navigate("Home");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    const ClearInputs = () => {
        setNome("");
        setEmail("");
        setSenha("");
        setAreaAtuacao("");
        setTipoUser("");
        };

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <View style={styles.Linha}></View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.Linha}></View>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
        />
        <View style={styles.Linha}></View>
        <TextInput
          style={styles.input}
          placeholder="Area de Atuação"
          value={areaAtuacao}
          onChangeText={setAreaAtuacao}
        />
        <View style={styles.Linha}></View>
        <TextInput
          style={styles.input}
          placeholder="Tipo de Usuario"
          value={tipoUser}
          onChangeText={setTipoUser}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={Entrar}
        >
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cadastrar")}
        >
          <Text>Não possui uma conta? Clique Aqui.</Text>
        </TouchableOpacity>
        {errorMessage !== "" && <View><Text style={styles.errorMessageusuarioAdm}>{errorMessage}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CadastrarEmpresa")}>
            <Text style={styles.textBotton}>Clique Para Iniciar o Cadastro.</Text>
          </TouchableOpacity>
          </View>
        }
        {errorMessage !== "" && <View>
            <Text style={styles.errorMessageEmpresa}>{errorMessage}</Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CadastrarEmpresa")}>
            <Text style={styles.textBotton}>Clique Para Iniciar o Cadastro.</Text>
          </TouchableOpacity>
          </View>
        }
      </View>
    );
  };
}
