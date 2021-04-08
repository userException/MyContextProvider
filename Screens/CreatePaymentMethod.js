import React, {useContext} from 'react';
import {View} from 'react-native';
import {Context as PaymentMethodContext} from '../Context/PaymentMethodContext';
import PaymentMethodForm from '../components/PaymentMethodForm';

export default ({navigation}) => {
  const paymentMethods = useContext(PaymentMethodContext);

  const create = (name, details) => {
    paymentMethods.boundActions.addPaymentMethod(name, details, () => {
      navigation.navigate('PMList');
    });
  };

  return <PaymentMethodForm onSubmit={create} />;
};
