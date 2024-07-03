// src/screens/CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from '../components/ProductItem';


const CartScreen = ({onRemoveFromCart}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    fetchCart();
  }, []);

  const removeFromCart = async (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <ScrollView>
          <View style={styles.topheader}>
        <Image
          source={require('../../assets/Logo.png')} 
          style={styles.image}
        />
        <Image
          source={require('../../assets/Search.png')} 
          style={styles.searchImage}
        />          
      </View>

      <View style={styles.secondheader}>
        <Text style={styles.text}>CHECKOUT</Text>
      </View>

      <View style={styles.list}>
        <View style={styles.one}>
          <Image
              source={require('../../assets/dress1.png')}
              style={styles.listimage}
          >
          </Image>
          <View style={styles.textContainer}>
            <View style={styles.imagetext}>
                <Text style={styles.describe}>OFFICE WEAR</Text> 
                <Text>Office wear for your office</Text>
                <Text>$120</Text>
            </View>
            <TouchableOpacity>
              <Image 
                source={require('../../assets/remove.png')} 
                style={styles.remove}
              >
              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.one}>
          <Image
              source={require('../../assets/dress4.png')}
              style={styles.listimage2}
          >
          </Image>
          <View style={styles.textContainer}>
            <View style={styles.imagetext}>
                <Text style={styles.describe}>LAMEREI</Text> 
                <Text>Recycle Boucle Knit Cardigan Pink</Text>
                <Text>$120</Text>
            </View>
            <TouchableOpacity>
              <Image 
                source={require('../../assets/remove.png')} 
                style={styles.remove}
              >
              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.one}>
          <Image
              source={require('../../assets/dress3.png')}
              style={styles.listimage2}
          >
          </Image>
          <View style={styles.textContainer}>
            <View style={styles.imagetext}>
                <Text style={styles.describe}>CHURCH WEAR</Text> 
                <Text>Recycle Boucle Knit Cardigan Pink</Text>
                <Text>$120</Text>
            </View>
            <TouchableOpacity>
              <Image 
                source={require('../../assets/remove.png')} 
                style={styles.remove}
              >
              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3
  },
  topheader: {
    alignItems: 'center', 
    justifyContent: 'space-between', 
    height: 50, 
    backgroundColor: '#ffffff', 
    flexDirection: 'row'
  },
  secondheader: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20
  },
  image: {
    resizeMode: 'contain',
    margin: 10   
  },
  searchImage: {
    margin: 20,
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10
  },
  textContainer: {
    flexDirection: 'column',
  },
  remove: {
    position: 'absolute',
    top: 7,
    right: 20,
    marginTop: 30,
    width: 30,
    height: 30
  },
  listimage: {
    marginTop: 15
  },
  listimage2: {
  marginLeft: 20
  },
  imagetext: {
    margin: 10,
    fontSize: 20
  },
  describe: {
    shadowOpacity: 5,
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  }
});

export default CartScreen;
