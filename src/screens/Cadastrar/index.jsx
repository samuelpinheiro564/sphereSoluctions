import styles from "./styles.js"
import { TouchableOpacity, View ,TextInput} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [areaAtuacao, setAreaAtuacao] = useState('');
    const [tipoUser,setTipoUser] = useState('');
    const [cnpj,setCnpj] = useState('');
    const [cep,setcep] = useState('');

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

    <Text style = {styles.titulo}>Cadastrar Usuario</Text>
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
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setcep}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
    />

   
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastrar')}>
        <Text>Não possui uma conta? Clique Aqui.</Text>
    </TouchableOpacity>
      </View>
    );
  }