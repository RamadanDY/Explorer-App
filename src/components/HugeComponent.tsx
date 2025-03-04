import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

const HugeComponent = () => {
  const products = [
    {
      id: "1",
      name: "Wireless Headphones",
      price: 59.99,
      rating: 4.5,
      image: "https://i.imgur.com/ZcLLrkY.jpg",
    },
    {
      id: "2",
      name: "Smartwatch",
      price: 129.99,
      rating: 4.7,
      image: "../assets/passport.jpeg",
    },
    {
      id: "3",
      name: "Gaming Mouse",
      price: 39.99,
      rating: 4.3,
      image: "https://i.imgur.com/dwIxch4.jpg",
    },
    {
      id: "4",
      name: "Mechanical Keyboard",
      price: 79.99,
      rating: 4.6,
      image: "https://i.imgur.com/u3EVLe5.jpg",
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 45.99,
      rating: 4.4,
      image: "https://i.imgur.com/EjXbf6M.jpg",
    },
    {
      id: "6",
      name: "Laptop Stand",
      price: 34.99,
      rating: 4.2,
      image: "https://i.imgur.com/1X8wCQ9.jpg",
    },
    {
      id: "7",
      name: "Smartphone",
      price: 699.99,
      rating: 4.8,
      image: "https://i.imgur.com/VRq3w3X.jpg",
    },
    {
      id: "8",
      name: "4K Monitor",
      price: 299.99,
      rating: 4.7,
      image: "https://i.imgur.com/VcEVl6F.jpg",
    },
    {
      id: "9",
      name: "Portable Hard Drive",
      price: 89.99,
      rating: 4.5,
      image: "https://i.imgur.com/ZDA2Dls.jpg",
    },
    {
      id: "10",
      name: "Wireless Charger",
      price: 25.99,
      rating: 4.3,
      image: "../assets/passport.jpeg",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
});

export default HugeComponent;
