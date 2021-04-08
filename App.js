/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaymentMethodProvider} from './Context/PaymentMethodContext';
import PaymentMethods from './Screens/PaymentMethods';
import PaymentMethodDetail from './Screens/PaymentMethodDetail';
import CreatePaymentMethod from './Screens/CreatePaymentMethod';
import EditPaymentMethohd from './Screens/EditPaymentMethohd';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PMList"
          component={PaymentMethods}
          options={({navigation}) => ({
            title: 'Payment Methods',
            headerRight: ({navigate}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PMCreate');
                  }}>
                  <Icon style={styles.headerIcon} name="plus" size={25} color={'#006ee6'} />
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="PMDetails"
          component={PaymentMethodDetail}
          options={({navigation, route}) => ({
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PMEdit', {id: route.params.id});
                  }}>
                  <Icon style={styles.headerIcon} name="edit" size={25} color={'#006ee6'} />
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="PMCreate"
          component={CreatePaymentMethod}
          options={{
            title: 'Create Payment Method',
          }}
        />
        <Stack.Screen
          name="PMEdit"
          component={EditPaymentMethohd}
          options={{
            title: 'Edit Payment Method',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <PaymentMethodProvider>
      <App />
    </PaymentMethodProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 60,
    marginLeft: 30,
    fontSize: 34,
  },
  headerIcon: {
    paddingHorizontal: 15,
  },
});
