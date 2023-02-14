import React from 'react'
import { StyleSheet, Pressable, View,Image,FlatList  } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { setSelectedProduct } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    return (
        <View>
            <FlatList 
            data={products}
            numColumns={2}
            renderItem={({ item })=> (
                <Pressable onPress={() => {
                    dispatch(setSelectedProduct(item.id))
                    navigation.navigate("Product Details")
                }} style={styles.itemContainer}>
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