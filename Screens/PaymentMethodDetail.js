import React, {useContext} from 'react';
import {useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {Context as PaymentMethodContext} from '../Context/PaymentMethodContext';

export default ({route, navigation}) => {

  const paymentMethods = useContext(PaymentMethodContext);

  const targetPaymentMethod = paymentMethods.data.find(aPaymentMethod => {
    return aPaymentMethod.id === route.params.id;
  });

  useEffect(() => {
    navigation.setOptions({title: targetPaymentMethod.name});
  }, [targetPaymentMethod]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Type</Text>
      <Text style={styles.description}>{targetPaymentMethod.name}</Text>
      <Text style={styles.label}>Card Number</Text>
      <Text style={styles.description}>{targetPaymentMethod.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  label: {
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    paddingBottom: 10,
    fontSize: 15,
  },
});
