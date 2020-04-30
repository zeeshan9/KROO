import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { ListItem, ButtonGroup } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllKroos, addMember } from '../../../actions/kroo';
import { showAlert } from '../../../actions/alert';

const ChatGroups = ({
  navigation,
  kroo: { allKroosGroup, loading },
  showAlert,
  getAllKroos,
  addMember,
  auth,
}) => {
  useEffect(() => {
    getAllKroos();
  }, [getAllKroos, loading]);

  const onPress = (item) => {
    if (true) {
      Alert.alert('JOIN ROOM', 'DO you want to join the room', [
        {
          text: 'Join',
          onPress: () => {
            addMember(item.id, auth.user.id);
            navigation.navigate('ChatList', { itemId: item.id });
          },
        },
        {
          text: "closed",
        },
      ]);
    } else {
      navigation.navigate('ChatList', { itemId: item.id });
    }
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0],
      }}
      bottomDivider
      // rightComponent={
      //   <ButtonGroup
      //     onPress={updateIndex}
      //     selectedIndex={selectedIndex}
      //     buttons={buttons}
      //     containerStyle={{ height: 100 }}
      //   />
      // }
      // badge={{
      //   value: "Join",
      //   textStyle: {
      //     color: "white",
      //     fontSize: 20,
      //     borderRadius: 10,
      //     backgroundColor: "silver",
      //     elevation: 10,
      //   },
      //   containerStyle: { margin: 5, padding: 5 },
      // }}
      chevron={{ color: 'white' }}
      friction={90}
      activeScale={0.95}
      tension={100}
      titleStyle={{ color: '#F5F5F5', fontWeight: 'bold' }}
      subtitleStyle={{ color: '#F5F5F5' }}
      linearGradientProps={{
        colors: ['#787878', '#909090'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
      }}
      onPress={() => onPress(item)}
    />
  );

  const keyExtractor = (item, index) => index.toString();
  return (
    // <View>

    // ! loading && allKroosGroup.length > 0b
    //   ? allKroosGroup.map((kroo) => {
    <FlatList
      keyExtractor={keyExtractor}
      data={allKroosGroup}
      renderItem={renderItem}
    />

    // console.log("all kroo " + kroo.id + "name : " + kroo.name);
    //   })
    // : console.log("empty kroo")

    /* {allKroosGroup.length > 0 ? (
        allKroosGroup.map((kroo) => {
          console.log("all kroo " + kroo.id);
        })
      ) : (
        // <FlatList
        //   keyExtractor={allKroosGroup.id}
        //   data={allKroosGroup}
        //   renderItem={renderItem}
        // />
        <View>
          <Text>Kroo not loaded</Text>
        </View>
      )} */
    // </View>
  );
};

ChatGroups.propTypes = {
  navigation: PropTypes.object.isRequired,
  showAlert: PropTypes.func.isRequired,
  getAllKroos: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  kroo: state.kroo,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllKroos, showAlert, addMember })(
  ChatGroups
);
