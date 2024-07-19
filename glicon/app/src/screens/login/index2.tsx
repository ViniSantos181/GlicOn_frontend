import { RegisterPage } from '../register/index1';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles2';

export function LoginPage(){
  
  /* função para fazer o login */
  function handleLogin(){
    console.log("fazer o login")
  }
  /* função que direciona para a página de Registro */
  function handleRegisterPage(){
    return(
        console.log("direcionar para a pagina de login")
      );
  }
  
  return(
    
    <View style = {styles.container}>
     
     {/* saída de texto */}
      <Text style={styles.eventName}>   
        Login  
      </Text>
      {/* entradas de texto */}
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
      {/* botão para entrar */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
      {/* frase junto com o botão de ir para a página de registro */}
      <View style={styles.form}>
        <Text style={styles.button2}>   
          Não possui conta? 
        </Text>

        <TouchableOpacity onPress={handleRegisterPage}>
          <Text style={styles.buttonText2}>
            Registre-se
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}