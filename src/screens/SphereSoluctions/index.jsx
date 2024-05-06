import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";



const Home = () => {
  const teamMembers = [
    { name: "Samuel Pinheiro", image: require('../../../assets/samuel.jpeg') },
    { name: "Andrey Botero", image: require('../../../assets/picirili.jpeg') },
    { name: "Giulia Marques", image: require('../../../assets/giu.jpeg') },
    { name: "Stefanny Rodrigues", image: require('../../../assets/stef.jpeg') },
    { name: "Gabriel Picirili", image: require('../../../assets/picirili.jpeg') },
  ];

  return (
   <ScrollView>
   <View style={styles.conTitu}>
   <Text style={styles.titulo}>Conheça nossa equipe</Text>
   </View>
    <ScrollView horizontal>
      <View style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <TouchableOpacity key={index} style={styles.memberContainer}>
            <Image source={member.image} style={styles.memberImage} />
            <Text style={styles.memberName}>{member.name}</Text>
          </TouchableOpacity>
        ))}
         </View>
         </ScrollView>
         <View style={styles.Linha}></View>
         <View style={styles.container}>
        <Text style={styles.subtitulo}>Qual é a missão SphereSoluctions?</Text>
        <View style={styles.missaoCont}>
          <Text style={styles.texto}>Nossa missão na SphereSolutions é facilitar a transição para operações mais sustentáveis e eficientes em grandes edifícios comerciais e plantas industriais. Fornecemos soluções tecnológicas inovadoras e acessíveis que promovem a gestão responsável de recursos naturais, aprimoram a eficiência operacional e impulsionam a conscientização ambiental.</Text>
        </View>
        <View style={styles.missaoCont}>
          <Text style={styles.texto}>Nossa missão na SphereSolutions é facilitar a transição para operações mais sustentáveis e eficientes em grandes edifícios comerciais e plantas industriais. Fornecemos soluções tecnológicas inovadoras e acessíveis que promovem a gestão responsável de recursos naturais, aprimoram a eficiência operacional e impulsionam a conscientização ambiental.</Text>
        </View>
     
        </View>
   
    </ScrollView>
  );
};

const styles = {
  teamContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    background: '#1ed27c',
    borderRadius: 15,
    margin: 10,
  },
  missaoCont: {
   padding: 10,
   borderRadius: 5,
   margin: 18,
   boxShadow: "0px 0px 5px 0px #000",
 },
 conTitu: {
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 10,
 },
   titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    },
 texto: {
   fontSize: 16,
   color: "#000",
 },
  memberContainer: {
    marginRight: 20,
    alignItems: 'center',
    margin: 5,
    marginLeft:15,
    marginRight:12,
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  titulo: {
   fontSize: 20,
   fontWeight: 'bold',
   marginBottom: 10,
 },
  memberName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
 container: {
   alignItems: 'center',
   justifyContent: 'center',
   },
  subtitulo: {
   fontSize: 18,
   color: '#000',
   marginBottom: 20,
 },
   Linha: {
      borderBottomWidth: 3,
      borderBottomColor: '#07351F',
      marginBottom: 20,
      marginTop: 20,
      whidth: "90%",
   },
};

export default Home;
