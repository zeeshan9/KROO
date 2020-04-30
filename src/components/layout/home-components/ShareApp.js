import React from "react";
import { Share, View, Button, StyleSheet } from "react-native";
import { showAlert } from "../../../actions/alert";

export default ShareApp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "https://play.google.com/store/apps/details?id=com.instagram.android || https://medium.com/@keith.kurak/a-simple-chat-ui-example-in-react-native-6aeec001d51b",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
      ``;
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.button}>
      <Button onPress={onShare} title='Share' />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "100%",
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
