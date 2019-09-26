import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {
  Banner,
  Avatar,
  Searchbar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
const WIDTH = Dimensions.get('window').width;
export default class FindVacance extends Component {
  state = {
    animatePress: new Animated.Value(1),
    items: [
      {
        nameUser: 'Jean',
      },
      {
        nameUser: 'HALLY',
      },
    ],
  };
  AnimateIn = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 0.9,
      duration: 500,
    }).start();
  };

  AnimateOut = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 500,
    }).start();
  };
  render() {
    return (
      <FlatList
        style={{
          paddingRight: 20,
          marginBottom: 20,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled={true}
        data={this.state.items}
        renderItem={({item}) => (
          <Card style={{width: WIDTH - 40, marginHorizontal: 20}}>
            <Card.Title
              title={item.nameUser}
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({});
