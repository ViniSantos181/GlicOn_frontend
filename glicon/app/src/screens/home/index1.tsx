import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export default function Home(){
  return(
    <View style = {styles.container}>
     
      <Text style={styles.eventName}>   
        Registre-se  
      </Text>

      <TextInput style={styles.input}/>
      
    </View>
  )
}