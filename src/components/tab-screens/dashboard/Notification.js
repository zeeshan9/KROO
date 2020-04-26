import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { IMAGE } from "../../../constants/Images";

const Notification = (props) => {
  const list = [
    {
      name: "from zeeshan",
      subtitle: "Notification message appear here",
    },
    {
      name: "Sherhryar",
      avatar_url:
        "https://www.google.com/search?q=harry+potter&safe=active&rlz=1C1CHBF_enPK831PK831&sxsrf=ALeKk02x3RBhsAVZBc0BRO1iE7q1dYnWZQ:1587893508847&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3uaSk5IXpAhWx4YUKHXVqBn4Q_AUoAXoECBkQAw&biw=1366&bih=625#imgrc=4xE0oIbyljrGeM", //IMAGE.ICON_PROFILE, //<Image style={styles.iconLogo} source={IMAGE.ICON_PROFILE} />,
      subtitle: "Hey notify me when when you sign in",
    },
    // more items
  ];

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0],
      }}
      bottomDivider
      chevron
      //working heren
      // onPress={(item) => this.navigation.navigate("ChatList")}
    />
  );

  const keyExtractor = (item, index) => index.toString();
  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
    // <View style={styles.container}>
    //   <Text>Invitations</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default Notification;
