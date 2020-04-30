import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { SERVER_URL } from "../../actions/types";
import uuid from "uuid";
import { sendMessage } from "../../actions/messages";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

const ChatList = ({
  route,
  navigation,
  auth,
  sendMessage,
  message: { loading, messages },
}) => {
  const [socket, setSocket] = useState(null);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (socket === null) {
      // If the socket is not initalized then create a new socket connection
      setSocket(socketIOClient(SERVER_URL));
    } else {
      const { itemId } = route.params;

      socket.emit("joinRoom", {
        user: auth.user.displayName,
        room: itemId,
      });

      // Display message that the other user has joined the chat
      socket.on("joinRoom", (message) => {
        sendMessage(message);
        // console.log(messages);
      });

      // When a message is received display it in the message box
      socket.on("message", ({ user, message }) => {
        // console.log('\nMessages ab yeh ha:');
        // console.log(messages);
      });
    }
  }, [socket]);

  const sendMessage1 = (messagesArray) => {
    const { itemId } = route.params;

    socket.emit("message", {
      room: itemId,
      user: auth.user.displayName,
      message: messagesArray[0].text,
    });
  };
  // const keyExtractor = (item, index) => index.toString();
  return (
    <View style={styles.container}>
      {/* <ChatUi messages={messages} /> */}
      <View style={styles.messagesContainer}>
        <ScrollView style={styles.list}>
          {!loading && messages.length > 0 ? (
            messages.map((message) => (
              <View style={[styles.item, styles.itemIn]}>
                <View style={[styles.balloon]}>
                  <Text style={styles.messageText}>
                    {message.user !== null ? `${message.user}: ` : ""}{" "}
                    {message.message}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.messageText}>
              Chat not has started Chat yet,Do you want the first one to start
            </Text>
          )}
        </ScrollView>
      </View>
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
            const { itemId } = route.params;

            socket.emit("message", {
              room: itemId,
              user: auth.user.displayName,
              message,
            });

            sendMessage(message, auth.user.displayName);

            setMessage("");
          }}
          style={styles.btnSend}
        >
          <Image
            source={{
              uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png",
            }}
            style={styles.iconSend}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    // justifyContent: "center",
    padding: 10,
    flexDirection: "column",
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
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
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
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
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
    borderRadius: 200,
    padding: 2,
  },
});

ChatList.propTypes = {
  auth: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  message: state.message,
});

export default connect(mapStateToProps, {
  sendMessage,
})(ChatList);
