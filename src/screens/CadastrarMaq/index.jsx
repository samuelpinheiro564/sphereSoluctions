import styles from "./styles.js"
import { TouchableOpacity, View ,TextInput} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function CadastrarMaq() {

const [numerodeserie, setnumerodeserie] = useState('');
const [funcao, setfuncao] = useState('');
const [marca, setmarca] = useState('');
const [modelo, setmodelo] = useState('');
const [tipoCombustivel, settipoCombustivel] = useState('');
const [potencia, setpotencia] = useState('');
const [quantidade, setquantidade] = useState('');
const [usodiariohoras, setusodiariohoras] = useState('');
const [dataAquisicao, setdataAquisicao] = useState('');

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

    <Text style = {styles.titulo}>Cadastrar Maquina</Text>
    <TextInput
        style={styles.input}
        placeholder="Numero de Serie"
        value={numerodeserie}
        onChangeText={setnumerodeserie}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Função"
        value={funcao}
        onChangeText={setfuncao}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setmarca}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={setmodelo}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Tipo de Combustivel"
        value={tipoCombustivel}
        onChangeText={settipoCombustivel}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Potencia"
        value={potencia}
        onChangeText={setpotencia}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setquantidade}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Uso Diario Horas"
        value={usodiariohoras}
        onChangeText={setusodiariohoras}
    />
    <View style={styles.Linha}></View>
    <TextInput
        style={styles.input}
        placeholder="Data de Aquisição"
        value={dataAquisicao}
        onChangeText={setdataAquisicao}
    />
       <TouchableOpacity style={styles.button} >
        <Text>Terminar Cadastro</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Listamaquinas')}>
        <Text>Visualizar maquinas cadastradas</Text>
    </TouchableOpacity>
      </View>
    );
  }