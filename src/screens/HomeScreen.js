import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from '../components/ProductItem';



const HomeScreen = ({onAddToCart}) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <ScrollView>
    <View>
      <View style={styles.topheader}>
        <Image
          source={require('../../assets/Menu.png')} 
          style={styles.image}
        />
        <Image
          source={require('../../assets/Logo.png')} 
          style={styles.image}
        />
        <Image
          source={require('../../assets/Search.png')} 
          style={styles.searchImage}
        />
        <Image
          source={require('../../assets/shoppingBag.png')} 
          style={styles.image}
        />               
      </View>
      <View style={styles.topheader}>
        <Text style={styles.roboto}>OUR STORY</Text>
        <Image
          source={require('../../assets/Listview.png')} 
          style={styles.viewImage}
        />
        <Image
          source={require('../../assets/Filter.png')} 
          style={styles.image}
        />               
      </View>

   
        <View style={styles.list}>
            <View style={styles.one}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress1.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>Office Wear</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>

            <View style={styles.two}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress2.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>Black</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>      
        </View>


        <View style={styles.list}>
            <View style={styles.one}>
            <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress3.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>Church Wear</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>

            <View style={styles.two}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress4.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer} onPress={onAddToCart}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>Lamerei</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>      
        </View>


        <View style={styles.list}>
            <View style={styles.one}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress5.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>21WN</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>

            <View style={styles.two}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress6.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>Lopo</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>      
        </View>


        <View style={styles.list}>
            <View style={styles.one}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress7.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>21WN</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
            </View>

            <View style={styles.two}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/dress3.png')}
                        style={styles.listimage}
                    >
                        <TouchableOpacity style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/add_circle.png')}
                            style={styles.overlayImage}
                        />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.imagetext}>
                    <Text>lame</Text> 
                    <Text>reversible angora cardigan</Text>
                    <Text>$120</Text>
                </View>
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
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'space-between', // Center the image vertically
    height: 50, // Adjust the height as needed
    backgroundColor: '#f8f8f8', // Optional: set a background color
    flexDirection: 'row'
  },
  roboto: {
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  image: {
    resizeMode: 'contain',
    margin: 10
  },
  searchImage: {
    marginRight: -80
  },
  viewImage: {
    marginRight: -200
  },
  listimage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  list: {
    flexDirection: 'row',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 7,
    right: 3,
  },
  overlayImage: {
    width: 25,  
    height: 25, 
  },
  imagetext: {
    marginLeft: 10
  }
});


export default HomeScreen;