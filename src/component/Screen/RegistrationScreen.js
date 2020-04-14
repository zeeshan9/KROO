import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

export const RegistrationScreen = (props) => {
  return (
    <View>
      {/* <SafeAreaView style={styles.container}> */}
      <View style={styles.container}>
        <Text>Registration Screen</Text>
        <TouchableOpacity
          style={{ margin: 30, alignSelf: "flex-end" }}
          onPress={() => props.navigation.navigate("Second")}
        >
          <Text>Move to next Screen </Text>
        </TouchableOpacity>
        <Button
          title='I accept all term and Agreement'
          onPress={() => props.navigation.navigate("Second")}
        />
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
