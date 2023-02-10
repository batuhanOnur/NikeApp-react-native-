import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import products from './src/data/products'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        numColumns={2}
        renderItem={({ item })=> (
          <View style={styles.itemContainer}>
            <Image 
              source={{ uri: item.image}}
              style={styles.image}
            />
          </View>
        )}
      />
      <StatusBar style="auto" />
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
  image:{
    width: '100%',
    aspectRatio: 1
  },
  itemContainer:{
    width: '50%',
    padding: 1,
  }
});
