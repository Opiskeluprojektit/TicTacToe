import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  header: {
    marginTop: 70,
    marginBottom: 30,
    backgroundColor: '#006699',
    flexDirection: 'row'
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },

  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },

  item: {
    margin: 15,
    padding: 5
  },

  flex: {
    flexDirection: "row"
  },

  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#006699",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#ffffff",
    fontSize: 20
  },

  footer: {
    marginTop: 20,
    backgroundColor: '#006699',
    flexDirection: 'row'
  },
  
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});