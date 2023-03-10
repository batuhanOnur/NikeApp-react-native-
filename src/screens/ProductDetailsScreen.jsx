import { StyleSheet, Text, View,Image, FlatList, useWindowDimensions, ScrollView,Pressable } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { addCartItem } from '../store/cartSlice'

const ProductDetailsScreen = () => {
    
    
    const product = useSelector(state => state.products.selectedProduct)
    const dispatch = useDispatch()
    
    const { width } = useWindowDimensions()

    
    const addToCart = () => {
        dispatch(addCartItem({
            product
        }))
    }
    
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
        <Pressable onPress={addToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
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
    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})