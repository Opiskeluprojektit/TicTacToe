import { View, Text } from 'react-native';
import styles from '../style/style';

export default function App() {
  return (
    <View style={styles.footer}>
      <Text style={styles.author}>
        Author: Laura Vikström
      </Text>
    </View>
  );
}
