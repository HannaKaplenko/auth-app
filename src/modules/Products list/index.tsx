import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Text, View, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<any>([]);


  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading (true);
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
    setIsLoading (false);
  };

  console.log('Products', products);

  return (
    <SafeAreaView style={styles.container}>
        { isLoading 
          ? 
            <Text style={ styles.loadingText}> Loading...</Text>
              
           : 
          <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Image source={{uri: item.images[0]}} style={styles.image} />
          </View>
        )}
      />
}
    </SafeAreaView>
  ); }