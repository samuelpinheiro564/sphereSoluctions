import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36393f",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo1: {
    color: "#FFD700",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  titulo: {
    color: "#FFD700",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  backgroundimage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    opacity: 0.5,
    resizeMode: "cover",
    width: 200, // Largura desejada da imagem
    height: 200, // Altura desejada da imagem
    position: "absolute",
    top: 50, // Posição superior
    left: 50, // Posição esquerda
    // Você pode ajustar top, bottom, left ou right conforme necessário para posicionar a imagem
  },
  titulo2: {
    color: "#FFD700",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  tema: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 7,
    marginTop: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
export default styles;