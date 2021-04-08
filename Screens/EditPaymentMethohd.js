import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Context as PaymentMethodContext} from '../Context/PaymentMethodContext';
import PaymentMethodForm from '../components/PaymentMethodForm';

export default ({navigation, route}) => {
  const paymentMethods = useContext(PaymentMethodContext);

  const targetPaymentMethod = paymentMethods.data.find(aPaymentMethod => {
    return aPaymentMethod.id === route.params.id;
  });

  const save = (name, details) => {
    paymentMethods.boundActions.updatePaymentMethod(
      route.params.id,
      name,
      details,
      () => {
        navigation.goBack();
      },
    );
  };

  return (
    <PaymentMethodForm
      initialValues={{
        name: targetPaymentMethod.name,
        details: targetPaymentMethod.details,
      }}
      onSubmit={save}
    />
  );
};
