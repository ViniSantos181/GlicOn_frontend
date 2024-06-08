import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4C33CC',
      padding: 24
    },
  
    eventName: {
      color: '#FDFCFE',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 120
    },

    input: {
      width: 364,
      height: 52,
      backgroundColor: '#FDFCFE',
      borderRadius: 5,
      color: '#000000',
      padding: 16, 
      fontSize: 14,
    },

    space: {
      fontSize: 9
    },
    
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'condensedBold'
    },

    button: {
      width: 364,
      height: 52,
      borderRadius: 5,
      backgroundColor: '#322285',
      alignItems: 'center',
      justifyContent: 'center'
    },

    button2: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '300',
    },

    buttonText2: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5
    },

    form: {
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5
    }

  });