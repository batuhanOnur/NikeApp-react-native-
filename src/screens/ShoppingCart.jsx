import { StyleSheet, Text, View,FlatList,Pressable,ScrollView,useWindowDimensions  } from 'react-native'
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux'
import { selectSubTotal,selectDeliveryPrice,selectTotal } from '../store/cartSlice';


const ShoppingCartTotals = () => {
    
    const subTotal = useSelector(selectSubTotal)
    const deliveryFee = useSelector(selectDeliveryPrice)
    const total = useSelector(selectTotal)
    
    return (

    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>{subTotal} $</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>{deliveryFee} $</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{total} $</Text>
        </View>

        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
    </View>
    )
}



const ShoppingCart = () => {

    const cart = useSelector(state => state.cart.item)

    return (
        <>
        <View>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <CartListItem cartItem={item}/>
                )}
                ListFooterComponent={ShoppingCartTotals}
            />
        </View>
        </>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer:{
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    text:{
        fontSize: 16,
        color: 'gray'
    },
    textBold:{
        fontSize: 16,
        fontWeight: '500'
    },
    button:{
        backgroundColor: 'black',
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})