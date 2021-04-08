import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as PaymentMethodContext} from '../Context/PaymentMethodContext';
import Icon from 'react-native-vector-icons/Feather';

const PaymentMethods = ({navigation}) => {
  const paymentMethods = useContext(PaymentMethodContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={paymentMethods.data}
        keyExtractor={pMethod => {
          return pMethod.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PMDetails', {
                  id: item.id,
                });
              }}>
              <View style={styles.cell}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.details}</Text>
                <TouchableOpacity
                  onPress={() =>
                    paymentMethods.boundActions.deletePaymentMethod(item.id)
                  }>
                  <Icon name="trash-2" size={25} color={'#006ee6'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  cell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderColor: '#999999',
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
});

export default PaymentMethods;
