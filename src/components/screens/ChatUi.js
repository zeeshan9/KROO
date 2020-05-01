import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { SERVER_URL } from "../../actions/types";

import { sendMessage, getAllMessagesForKroo } from "../../actions/messages";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  // FlatList,
  Image,
  RefreshControl,
} from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { IMAGE } from "../../constants/Images";
const ChatUi = ({ user }) => {
  // const renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.name}
  //     subtitle={item.description}
  //     leftAvatar={{
  //       source: item.avatar_url && { uri: item.avatar_url },
  //       title: item.name[0],
  //     }}
  //     bottomDivider
  //     chevron
  //   />
  // );
  const keyExtractor = (item, index) => index.toString();

  return (
    <View>
      <Text>chaui</Text>
      {console.log("id")}
      {/* {console.log(messages + " <=Message")} */}
      {/* <FlatList
      keyExtractor={keyExtractor}
      data={messages}
      renderItem={renderItem}
    /> */}
      <Text>dfgsf</Text>
    </View>
  );
};

ChatUi.propTypes = {
  user: PropTypes.object.isRequired,
  // auth: PropTypes.object.isRequired,
  // sendMessage: PropTypes.func.isRequired,
  // message: PropTypes.object.isRequired,
  // getAllMessagesForKroo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  message: state.message,
});

export default connect(mapStateToProps, {
  sendMessage,
  getAllMessagesForKroo,
})(ChatUi);

function dhm(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  return hours + ":" + minutes + ":" + sec;
  // var cd = 24 * 60 * 60 * 1000,
  //   ch = 60 * 60 * 1000,
  //   d = Math.floor(t / cd),
  //   h = Math.floor((t - d * cd) / ch),
  //   m = Math.round((t - d * cd - h * ch) / 60000),
  //   pad = function (n) {
  //     return n < 10 ? "0" + n : n;
  //   };
  // if (m === 60) {
  //   h++;
  //   m = 0;
  // }
  // if (h === 24) {
  //   d++;
  //   h = 0;
  // }
  // return [pad(h), pad(m)].join(":");
}
