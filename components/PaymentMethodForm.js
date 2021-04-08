import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const PaymentMethodForm = ({initialValues, onSubmit}) => {
  const [cardName, setCardName] = useState(initialValues.name);

  const [cardDetails, setCardDetails] = useState(initialValues.details);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Type</Text>
      <TextInput
        placeholder={'Visa, Master Card, Amex etc'}
        style={styles.input}
        value={cardName}
        onChangeText={text => setCardName(text)}
      />
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        placeholder={'XXXX XXXX XXXX XXXX'}
        style={styles.input}
        value={cardDetails}
        onChangeText={text => setCardDetails(text)}
      />
      <Button
        title={'Save'}
        onPress={() => {
          onSubmit(cardName, cardDetails);
        }}
      />
    </View>
  );
};

PaymentMethodForm.defaultProps = {
  initialValues: {
    name: '',
    details: '',
  },
};

export default PaymentMethodForm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 15,
      marginBottom: 10,
  },
  label: {
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
