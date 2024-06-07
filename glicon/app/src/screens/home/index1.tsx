import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export default function Home(){
  return(
    <View style = {styles.container}>
     
      <Text style={styles.eventName}>   
        Registre-se  
      </Text>
      <Text style={styles.space}/>
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
      
      
    </View>
  )
}