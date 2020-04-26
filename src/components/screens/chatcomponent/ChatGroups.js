import React from "react";
import { View, Text, Button } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

const ChatGroups = (props) => {
  const list = [
    {
      name: "Kroo Group",
      subtitle: "want to to be Motivational join our group",
    },
    {
      name: "zeeshan Group",
      avatar_url:
        "https://www.google.com/search?q=harry+potter&safe=active&rlz=1C1CHBF_enPK831PK831&sxsrf=ALeKk02x3RBhsAVZBc0BRO1iE7q1dYnWZQ:1587893508847&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3uaSk5IXpAhWx4YUKHXVqBn4Q_AUoAXoECBkQAw&biw=1366&bih=625#imgrc=4xE0oIbyljrGeM", //IMAGE.ICON_PROFILE, //<Image style={styles.iconLogo} source={IMAGE.ICON_PROFILE} />,
      subtitle: "this is a our freind group",
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
      onPress={(item) => props.navigation.navigate("ChatList")}
    />
  );

  const keyExtractor = (item, index) => index.toString();
  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

export default ChatGroups;
