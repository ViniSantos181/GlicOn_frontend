import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function RegisterPage(){
  
  /* função para fazer o registro */
  function handleRegister(){
    console.log("fazer o registro")
  }
  /* função que direciona para a página de login */
  function handleLoginPage(){
    console.log("ir para a pagina de login")
  }
  
  return(
    <View style = {styles.container}>
     
     {/* saída de texto */}
      <Text style={styles.eventName}>   
        Registre-se  
      </Text>
      {/* espaço entre os textos/entradas de dado/botões */}
      <Text style={styles.space}/>
      {/* entradas de texto */}
      <TextInput 
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#CDCDCD"
      />
      
      <Text style={styles.space}/>
      
      <TextInput 
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#CDCDCD"
        keyboardType="email-address"
      />
      
      <Text style={styles.space}/>
      
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#CDCDCD"
      />
      
      <Text style={styles.space}/>
      
      <TextInput 
        style={styles.input}
        placeholder="Confirme a senha"
        placeholderTextColor="#CDCDCD"
      />

      <Text style={styles.space}/>
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