import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { IMAGE } from "../../../constants/Images";
import { Image, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import ChatList from "./ChatList";

const list = [
  {
    name: "Zeeshan",
    subtitle: "Vice President",
  },
  {
    name: "Sherhryar",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", //IMAGE.ICON_PROFILE, //<Image style={styles.iconLogo} source={IMAGE.ICON_PROFILE} />,
    subtitle: "Vice Chairman",
  },
  // more items
];

const pressHanlder = () => {
  this.props.navigation.navigate("ChatList");
  //   <ChatList />;
};
export default class ChatGroups extends React.Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
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
      onPress={(item) => this.navigation.navigate("ChatList")}
    />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    );
  }
}
const styles = StyleSheet.create({
  iconLogo: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    alignSelf: "center",
  },
});
