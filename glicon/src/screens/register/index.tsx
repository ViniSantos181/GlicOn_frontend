import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { LoginPage } from '../login';

export function RegisterPage(){
  
  /* função para fazer o registro */
  function handleRegister(){
    console.log("fazer o registro")
  }
  /* função que direciona para a página de login */
  function handleLoginPage(){
    return(
      console.log("direcionar para a pagina de login")
    );
  }
  
  return(
    <View style = {styles.container}>
     
     {/* saída de texto */}
      <Text style={styles.eventName}>   
        Registre-se  
      </Text>
      {/* entradas de texto */}
      <TextInput 
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#CDCDCD"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#CDCDCD"
        keyboardType="email-address"
      />

      <TextInput 
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#CDCDCD"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Confirme a senha"
        placeholderTextColor="#CDCDCD"
      />
      {/* botão para registar */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>
          Registrar
        </Text>
      </TouchableOpacity>
      {/* frase junto com o botão de ir para a página de login */}
      <View style={styles.form}>
        <Text style={styles.button2}>   
          Já possui conta? 
        </Text>

        <TouchableOpacity onPress={handleLoginPage}>
          <Text style={styles.buttonText2}>
            Faça Login
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}