import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { SERVER_URL } from '../../actions/types';
import uuid from 'uuid';
import { sendMessage } from '../../actions/messages';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ChatList = ({
  route,
  navigation,
  auth,
  sendMessage,
  message: { loading, messages },
}) => {
  const [socket, setSocket] = useState(null);

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (socket === null) {
      // If the socket is not initalized then create a new socket connection
      setSocket(socketIOClient(SERVER_URL));
    } else {
      const { itemId } = route.params;

      socket.emit('joinRoom', {
        user: auth.user.displayName,
        room: itemId,
      });

      // Display message that the other user has joined the chat
      socket.on('joinRoom', (message) => {
        sendMessage(message);
        // console.log(messages);
      });

      // When a message is received display it in the message box
      socket.on('message', ({ user, message }) => {
        // console.log('\nMessages ab yeh ha:');
        // console.log(messages);
      });
    }
  }, [socket]);

  const sendMessage1 = (messagesArray) => {
    const { itemId } = route.params;

    socket.emit('message', {
      room: itemId,
      user: auth.user.displayName,
      message: messagesArray[0].text,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {!loading && messages.length > 0 ? (
          messages.map((message) => (
            <Text style={styles.messageText}>
              {message.user !== null ? `${message.user}: ` : ''}{' '}
              {message.message}
            </Text>
          ))
        ) : (
          <Text style={styles.messageText}>No messages found</Text>
        )}
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Type message here'
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const { itemId } = route.params;

            socket.emit('message', {
              room: itemId,
              user: auth.user.displayName,
              message,
            });

            sendMessage(message, auth.user.displayName);

            setMessage('');
          }}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 10,
  },
  textInputContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  messagesContainer: {
    flex: 11,
  },
  button: {
    flex: 1,
    backgroundColor: '#0066cc',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageText: {
    fontSize: 18,
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
