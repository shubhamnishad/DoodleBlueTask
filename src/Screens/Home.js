import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import MenuCard from '../Components/MenuCard';

const Home = props => {
  const {cartData, totalItems} = useSelector(state => state.cartReducer);
  console.log('CART DATA', cartData);

  const viewCart = () => {
    props.navigation.navigate('MyCart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.introCard}>
        <ImageBackground
          source={require('../Images/food.jpg')}
          style={styles.introImage}>
          <View style={styles.introContainer}>
            <View style={styles.header}>
              <View style={styles.goBack}>
                <TouchableOpacity>
                  <Icon name="arrowleft" size={22} style={styles.backStyle} />
                </TouchableOpacity>
              </View>
              <View style={styles.headerRight}>
                <TouchableOpacity>
                  <Icon name="upload" size={22} style={styles.uploadStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="infocirlceo"
                    size={22}
                    style={styles.infocirlceoStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.introDetail}>
        <Text style={styles.restroTitle}>Inka Restaurant</Text>
        <View style={styles.restroDetail1}>
          <Text style={styles.fontDetail}>
            <Icon name="star" size={15} style={{color: 'lightgrey'}} />{' '}
            5.0(200+) | All days :09:00 Am - 06:00 PM{' '}
          </Text>
        </View>
        <View style={styles.restroDetail2}>
          <Icon name="phone" size={15} style={{color: 'lightgrey'}} />
          <Text style={styles.fontDetail}>Reach us at : 9854562142</Text>
        </View>
        <TouchableOpacity style={styles.bookTable}>
          <Text style={styles.fontTable}>BOOK A TABLE</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{fontSize: 18, color: 'black'}}>Starter</Text>
        </View>

        {cartData.map((item, index) => {
          return (
            <View key={index}>
              <MenuCard item={item} index={item.id} />
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.cartAction} onPress={() => viewCart()}>
        <Icon name="shoppingcart" size={22} style={styles.uploadStyle} />
        <Text style={styles.cartActionText}>VIEW CART({totalItems} Items)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F0',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    top: -30,
  },
  introContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  introCard: {
    height: 180,
    width: '100%',
    backgroundColor: '#CFD8DC',
  },
  introDetail: {
    width: '90%',
    height: 150,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    top: -50,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  introImage: {
    width: '100%',
    height: '100%',
  },
  cartAction: {
    flexDirection: 'row',
    backgroundColor: '#07003B',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartActionText: {
    color: '#F7F5F0',
    fontSize: 20,
  },
  restroTitle: {
    color: '#07003B',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  restroDetail1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  restroDetail2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fontDetail: {
    color: 'grey',
    fontSize: 13,
    paddingBottom: 5,
    paddingLeft: 7,
  },
  bookTable: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07003B',
    borderRadius: 5,
    marginTop: 10,
  },
  fontTable: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
  },
  goBack: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backStyle: {
    color: 'white',
  },
  uploadStyle: {
    color: 'white',
    paddingRight: 20,
  },
  infocirlceoStyle: {
    color: 'white',
    paddingRight: 20,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
