import styles from "./styles.js"
import { View,ScrollView,Text } from "react-native";
export default function Home() {
    return (
      <ScrollView>
<View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.container}>
     <Text style={styles.titulo}>Conheça nossa equipe </Text>
     <TouchableOpacity style={styles.button}>
     <View style={styles.perfil}>
        <Image source={require('../../../assets/image1.png')} style={styles.imagem}/>
        <Text>Samuel Pinheiro</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
     <View style={styles.perfil}>
        <Image source={require('../../../assets/image1.png')} style={styles.imagem}/>
        <Text>Andrey Botero</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
     <View style={styles.perfil}>
        <Image source={require('../../../assets/image1.png')} style={styles.imagem}/>
        <Text>Giulia Marques</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
     <View style={styles.perfil}>
        <Image source={require('../../../assets/image1.png')} style={styles.imagem}/>
        <Text>Stefanny Rodrigues</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
     <View style={styles.perfil}>
        <Image source={require('../../../assets/image1.png')} style={styles.imagem}/>
        <Text>Gabriel Picirili</Text>
     </View>
     </TouchableOpacity>
        </View>
      </ScrollView>
       
       <ScrollView>
        <View style={styles.container}>
        <Text style={styles.subtitulo}>Qual é a missão SphereSoluctions?</Text>
<View style={styles.missaoCont}>
    <Text style={styles.texto}>Nossa missão na SphereSolutions é facilitar a transição para operações mais sustentáveis e eficientes em grandes edifícios comerciais e plantas industriais. Fornecemos soluções tecnológicas inovadoras e acessíveis que promovem a gestão responsável de recursos naturais, aprimoram a eficiência operacional e impulsionam a conscientização ambiental.
    </Text>
</View>
<View style={styles.missaoCont}>
    <Text style={styles.texto}>
    Nossa missão na SphereSolutions é facilitar a transição para operações mais sustentáveis e eficientes em grandes edifícios comerciais e plantas industriais. Fornecemos soluções tecnológicas inovadoras e acessíveis que promovem a gestão responsável de recursos naturais, aprimoram a eficiência operacional e impulsionam a conscientização ambiental.
    </Text>
</View>
        </View>
     </ScrollView>
     </View>
   </ScrollView>
    );
  }