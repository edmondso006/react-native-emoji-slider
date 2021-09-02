import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {

  const [rating, setRating] = React.useState(3);

  const getRatingEmoji = () => {
    if (rating === 1){ return '😡' }

    if (rating === 2) { return '😫' } 

    if (rating === 3) { return '😶' } 

    if (rating === 4)  { return '🙂' } 

    if (rating === 5) { return '😁' } 
  }

  return (
    <View style={styles.container}>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={1}
        maximumValue={5}
        step={1}
        onValueChange={setRating}
      />  
      <Text style={{ fontSize: 50 }}>
        {getRatingEmoji()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
