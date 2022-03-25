import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import MenuCard from '../Components/MenuCard';

const MyCart = props => {
  const {totalAmount, cartData} = useSelector(state => state.cartReducer);
  const [showMore, setShowMore] = useState(false);
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    renderCartArray();
  }, []);

  const renderCartArray = () => {
    const cartArray = cartData.filter(function (cartData) {
      return cartData.quantity > 0;
    });
    setNewArray(cartArray);
    console.log(cartArray);
  };
  const renderAll = () => {
    if (newArray && newArray.length > 0) {
      return newArray.map((item, index) => {
        return (
          <View key={index}>
            <MenuCard item={item} index={item.id} />
            <View style={styles.line}></View>
          </View>
        );
      });
    }
  };

  const renderData = () => {
    if (newArray && newArray.length > 0) {
      return newArray.slice(0, 2).map((item, index) => {
        return (
          <View key={index}>
            <MenuCard item={item} index={item.id} />
            <View style={styles.line}></View>
          </View>
        );
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.introCard}>
        <View style={styles.header}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name="arrowleft" size={22} style={styles.backStyle} />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>My Cart</Text>
          </View>
        </View>
        <View style={styles.totalCount}>
          <View style={styles.countDetail}>
            <Text style={styles.costTitle}>Total Cost</Text>
            <Text style={styles.costDetail}>Rs. {totalAmount}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.reviewFont}>Review Orders</Text>
        {showMore ? (
          renderAll()
        ) : newArray.length > 0 ? (
          renderData()
        ) : (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>No Items in cart</Text>
          </View>
        )}

        {newArray.length >= 3 ? (
          <View style={styles.showMoreWrapper}>
            <TouchableOpacity onPress={() => setShowMore(!showMore)}>
              <Text style={styles.showMoreFont}>
                {showMore ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.cartAction}
        onPress={() => props.navigation.navigate('MyCart')}>
        <Text style={styles.cartActionText}>PLACE ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F0',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 2,
    backgroundColor: 'lightgrey',
  },
  introCard: {
    height: 180,
    width: '100%',
    backgroundColor: '#07003B',
  },
  countDetail: {
    width: '50%',
    height: 70,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  totalCount: {
    height: '80%',
    justifyContent: 'center',
  },
  cartAction: {
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
  costTitle: {
    fontSize: 18,
    color: '#B3AF3B',
    alignSelf: 'center',
    paddingTop: 5,
  },
  costDetail: {
    color: 'black',
    fontSize: 21,
    alignSelf: 'center',
    paddingTop: 5,
  },
  header: {
    flexDirection: 'row',
    height: 45,
  },
  goBack: {
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backStyle: {
    color: 'white',
    paddingLeft: 10,
  },
  pageTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  reviewFont: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
    color: 'black',
  },
  showMoreWrapper: {
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingTop: 10,
  },
  showMoreFont: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
});
