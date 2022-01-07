import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = (props) => {
  const Styles = StyleSheet.create({
    Title: {
      fontSize: 24,
    },
  });
  const handleRedirectProfilePage = () => {
    props.navigation.push('Profile');
  };
  return (
    <SafeAreaView>
      <Text
        style={Styles.Title}
      >
        Current Page: Home
      </Text>
      <TouchableOpacity
        onPress={handleRedirectProfilePage}
      >
        <Text>Redirect to Profile page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;