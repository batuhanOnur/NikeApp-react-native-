import React from 'react'
import { StyleSheet, Pressable, View,Image,FlatList  } from 'react-native'
import products from '../data/products'

const ProductsScreen = ({ navigation }) => {
    return (
        <View>
            <FlatList 
            data={products}
            numColumns={2}
            renderItem={({ item })=> (
                <Pressable onPress={() => navigation.navigate("Product Details")} style={styles.itemContainer}>
                    <Image 
                    source={{ uri: item.image}}
                    style={styles.image}
                    />
                </Pressable>
            )}
        />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    image:{
        width: '100%',
        aspectRatio: 1
    },
    itemContainer:{
        width: '50%',
        padding: 1,
    }
});