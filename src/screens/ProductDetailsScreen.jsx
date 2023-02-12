import React from 'react'
import { StyleSheet, Text, View,Image, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import products from '../data/products'


const ProductDetailsScreen = () => {
    
    const product = products[0];

    const { width } = useWindowDimensions()
    
    return(
        <View>
        {/* Image Carousel */}
        <ScrollView>
            <FlatList 
                data={product.images}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) => (
                    <Image 
                        source={{ uri: item }}
                        style={{ width: width, aspectRatio: 1}}
                    />
                )}
            />
            
            <View style={{ padding: 20 }}>
                {/* Title */}
                <Text style={styles.title}>{ product.name }</Text>
                
                {/* Price */}
                <Text style={styles.price}>${ product.price }</Text>
                
                {/* Description */}
                <Text style={styles.description}>{ product.description }</Text>
            </View>
        </ScrollView>

        {/* Add Cart Button */}
        </View>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price:{
        fontWeight: '500',
        fontSize:16,
        letterSpacing:1.5
    },
    description: {
        marginVertical:10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300',
    }
})