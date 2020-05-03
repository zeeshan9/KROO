import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { SERVER_URL } from "../../actions/types";

import { sendMessage } from "../../actions/messages";
import { createRoomforUsers } from "../../actions/kroo";
// import { createRoomforUsers } from "../../actions/kroo";

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
const ChatUi = ({
  route,
  user: { userChat, loading },
  navigation,
  auth,
  sendMessage,
  createRoomforUsers,
}) => {
  const [socket, setSocket] = useState(null);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (socket === null) {
      // If the socket is not initalized then create a new socket connection
      setSocket(socketIOClient(SERVER_URL));
    } else {
      const { id } = route.params;

      socket.emit("joinRoom", {
        user: auth.user.displayName,
        room: id,
      });

      createRoomforUsers(id, "yMu2KPzlvyZNkK3jsneSuzJuRCV2", navigation);

      // // Display message that the other user has joined the chat
      // socket.on('joinRoom', (message) => {
      //   sendMessage(message);
      //   // console.log(messages);
      // });

      // When a message is received display it in the message box
      socket.on("usermessage", ({}) => {
        handlerResfresh();
        console.log("user messsdhge {}{} ");
        // createRoomforUsers(id, "yMu2KPzlvyZNkK3jsneSuzJuRCV2", navigation);
        // getAllMessagesForKroo(itemId);
      });
    }
  }, [socket]);

  const keyExtractor = (item, index) => index.toString();
  const handlerResfresh = () => {
    const { id } = route.params;
    setisRefreshing(true);
    createRoomforUsers(id, "yMu2KPzlvyZNkK3jsneSuzJuRCV2", navigation);
    console.log(id + " item");
    setisRefreshing(false);
  };
  const { id } = route.params;
  const [isRefreshing, setisRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      {!loading && userChat.messages.length > 0 ? (
        <FlatList
          style={styles.list}
          // inverted={-1}
          // initialScrollIndex={messages.length - 1}
          keyExtractor={keyExtractor}
          data={userChat.messages}
          onRefresh={handlerResfresh}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handlerResfresh.bind(this)}
            />
          }
          renderItem={({ item }) => {
            // console.log(item.user + "===" + auth.user.displayName);
            // const item = message.item;
            let inMessage = item.user === auth.user.displayName;
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {/* <Text style={styles.time}>02:23:date</Text> */}
                {/* {!inMessage && this.renderDate(item.date)} */}
                <View style={[styles.balloon]}>
                  <Text>{item.user} :</Text>
                  <Text>{item.message}</Text>
                </View>
                <Text style={styles.time}>{dhm(item.createdAt)}</Text>
                {/* {console.log(dhm(item.createdAt) + " time")} */}
                {/* {inMessage && (
                  <Text style={styles.time}>{dhm(item.createdAt)}</Text>
                )} */}
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.container}>
          {/* {console.log("userchat " + userChat.id)} */}
          Chat not has started Chat yet,Do you want the first one to start
        </Text>
      )}
      {console.log("userchat " + userChat.messages)}
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder='Write a message...'
            underlineColorAndroid='transparent'
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            const { id } = route.params;
            {
              console.log(userChat.id + " <=Message id= room>" + id);
            }
            socket.emit("usermessage", {
              room: userChat.id,
              user: auth.user.displayName,
              message,
              createdAt: Date.now(),
            });

            setMessage("");
          }}
          style={styles.btnSend}
        >
          <Image source={IMAGE.ICON_MESSAGE} style={styles.iconSend} />
        </TouchableOpacity>
      </View>
    </View>
    // <View>
    //   <Text>chaui</Text>
    /* {console.log("id")} */
    // {console.log(userChat.id + " <=Message id")}
    /* <FlatList
      keyExtractor=keyExtractor}
      data={messages}
      renderItem={renderItem}
    /> */
    /* <Text>dfgsf</Text>
   </View> */
  );
};

ChatUi.propTypes = {
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  // sendMessage: PropTypes.func.isRequired,
  // message: PropTypes.object.isRequired,
  createRoomforUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  message: state.message,
});

export default connect(mapStateToProps, {
  sendMessage,
  createRoomforUsers,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    // justifyContent: "center",
    // padding: 10,
    // flexDirection: "column",
  },
  textInput: {
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 10,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "baseline",
    position: "absolute",
  },
  messagesContainer: {
    flex: 2,
    // backgroundColor: "grey",
  },
  scrollContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    backgroundColor: "#0066cc",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  messageText: {
    fontSize: 15,
  },
  // chat ui
  list: {
    paddingHorizontal: 2,
    marginHorizontal: 5,
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  balloon: {
    flexDirection: "row",
    maxWidth: 200,
    padding: 15,
    borderRadius: 20,
    borderTopRightRadius: 2,
    elevation: 1 / 2,
  },
  itemIn: {
    alignSelf: "flex-start",
  },
  itemOut: {
    alignSelf: "flex-end",
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 50,
    // borderTopRightRadius: 25,
    // borderBottomEndRadius: 25,
    // borderTopStartRadius: 20,
    padding: 0,
  },
});
