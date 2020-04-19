import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

const TermsAndConditions = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, at nemo,
        provident veniam dignissimos dicta ad iusto beatae totam minima velit
        est aut voluptates aliquid odio eveniet asperiores incidunt cum modi,
        error laborum! Nihil, quam consectetur dolore mollitia corporis
        cupiditate, cumque quisquam delectus dolor iure quo commodi quibusdam.
        Voluptatem impedit quis animi, blanditiis facere, quia repellendus
        tempora facilis accusamus repellat iste earum nisi rem aliquam, cum
        fugit. Deserunt eos ex, dolores, accusamus doloremque alias nobis neque
        odio veniam id, sit placeat laboriosam voluptatem. Debitis recusandae,
        nihil explicabo similique sequi fuga quidem aut sapiente repellendus
        aliquam quasi vel ipsam eos earum. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Qui corrupti reprehenderit ad cumque eum!
        Est, molestiae animi, doloribus soluta, dignissimos illo vero doloremque
        recusandae incidunt saepe quibusdam eius maiores ad?
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>I accept</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  title: {
    width: '80%',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },

  text: {
    width: '80%',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'justify',
  },

  button: {
    backgroundColor: '#ec7600',
    width: '80%',
    padding: 12,
    marginTop: 18,
    marginBottom: 40,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

TermsAndConditions.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TermsAndConditions;
