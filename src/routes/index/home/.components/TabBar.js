import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabBar = ({ navigation }) =>{
  const insets = useSafeAreaInsets();
  const Styles = StyleSheet.create({
    TabBar: {
      backgroundColor: '#FFFFFF',
      height: 48 + insets.bottom,
      paddingBottom: insets.bottom,
      flexDirection: 'row',
    },
    TabIconContainer: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={Styles.TabBar}>
      <TouchableOpacity
        style={Styles.TabIconContainer}
        onPress={() => navigation.navigate('Home.Index')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.TabIconContainer}
        onPress={() => navigation.navigate('Home.Work')}
      >
        <Text>Work</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;