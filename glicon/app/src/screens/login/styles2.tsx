import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /* estilização do fundo */
    container: {
      flex: 1,
      backgroundColor: '#4C33CC',
      padding: 24
    },
    /* estilização da saída de texto "registrar-se" */
    eventName: {
      color: '#FDFCFE',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 170
    },
    /* estilização das entradas de texto */
    input: {
      width: 364,
      height: 52,
      backgroundColor: '#FDFCFE',
      borderRadius: 5,
      color: '#000000',
      padding: 16, 
      fontSize: 14,
    },
    /* estilização do espaçamento */
    space: {
      fontSize: 9
    },
    /* estilização do botão "registrar" */
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'condensedBold'
    },
    /* estilização da frase dentro do botão de registrar */
    button: {
      width: 364,
      height: 52,
      borderRadius: 5,
      backgroundColor: '#322285',
      alignItems: 'center',
      justifyContent: 'center'
    },
    /* estilização da frase antes do botão de ir para a página de login */
    button2: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '300',
    },
    /* estilização do botão de ir para a página de login*/
    buttonText2: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5
    },
    /* estilização geral da frase e do botão "já possui conta? fazer login" */
    form: {
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5
    }

  });