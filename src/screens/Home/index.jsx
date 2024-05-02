import styles from "./styles.js"
import { TouchableOpacity, View ,Image} from "react-native";
export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo1}>A </Text>
        <Text style={styles.titulo}>SUSTENTABILIDADE</Text>
        <Text style={styles.titulo}> NÃO É</Text>
        <Text style={styles.titulo}> UM CUSTO</Text>
        <Text style={styles.titulo}> PARA A </Text>
        <Text style={styles.titulo}>  INDÚSTRIA, </Text>
        <Text style={styles.titulo}>   É UM </Text>
        <Text style={styles.titulo}> INVESTIMENTO </Text>
        <Text style={styles.titulo2}>  NO NOSSO PLANETA.</Text>

        <Text style={styles.subtitulo}>Venha descobrir como anda a 
            produção de seus maquinários!
        </Text>

        <Text style={styles.tema}>Avalie suas máquinas conosco.
        Entenda quão sustentável ela é e como pode ser ainda melhor!</Text>
        <TouchableOpacity style={styles.button}>
            <Text>Cadastre sua Máquina</Text>
        </TouchableOpacity>
<Image source={require('../../assets/maquina.png')} style={styles.imagem} />
      </View>
    );
  }