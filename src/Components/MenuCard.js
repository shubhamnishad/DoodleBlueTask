import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  DECREEMENT_QUANTITY,
  INCREEMENT_QUANTITY,
  TOTAL_AMOUNT,
  TOTAL_ITEMS,
} from '../Redux/action';

const MenuCard = (item, index) => {
  const dispatch = useDispatch();
  const {cartData} = useSelector(state => state.cartReducer);

  const renderIncreement = index => {
    console.log('MENU CARD', index);
    dispatch({
      type: INCREEMENT_QUANTITY,
      payload: {
        key: index,
      },
    });
    renderTotalItem();
  };

  const renderDecreement = index => {
    dispatch({
      type: DECREEMENT_QUANTITY,
      payload: {
        key: index,
      },
    });
    renderTotalItem();
  };

  const renderTotalItem = () => {
    const total = cartData
      .map(item => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);

    const totalAmount = cartData
      .map(item => item.price * item.quantity)
      .reduce((acc, current) => {
        return acc + current;
      }, 0);
    dispatch({
      type: TOTAL_ITEMS,
      payload: {
        totalItems: total,
      },
    });
    dispatch({
      type: TOTAL_AMOUNT,
      payload: {
        totalAmount: totalAmount,
      },
    });
  };
  return (
    <View style={styles.itemCard} key={index}>
      <View style={styles.daysContainer}>
        <View style={styles.day}>
          <Text style={{color: 'black'}}>D</Text>
        </View>
        <View style={styles.night}>
          <Text style={{color: 'black'}}>N</Text>
        </View>
      </View>
      <View style={{paddingLeft: 5}}>
        <View style={styles.titleWrapper}>
          <View style={{width: '73%'}}>
            <Text style={{fontSize: 18, paddingTop: 15, paddingLeft: 5}}>
              {item.item.name}
            </Text>
          </View>
          {item.item.quantity == 0 ? (
            <TouchableOpacity
              style={styles.addWrapper}
              onPress={() => renderIncreement(item.index)}>
              <Text style={{color: 'white'}}>Add</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.counterWrapper}>
              <TouchableOpacity onPress={() => renderDecreement(item.index)}>
                <Icon name="minus" size={18} style={{color: 'black'}} />
              </TouchableOpacity>
              <Text>{item.item.quantity}</Text>
              <TouchableOpacity onPress={() => renderIncreement(item.index)}>
                <Icon name="plus" size={18} style={{color: 'black'}} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={{paddingTop: 5, paddingLeft: 5}}>{item.item.detail}</Text>
        <Text style={{fontSize: 17, paddingLeft: 10, paddingTop: 10}}>
          Rs {item.item.price}
        </Text>
      </View>
    </View>
  );
};

export default MenuCard;

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
  daysContainer: {
    width: '10%',
  },
  titleWrapper: {
    width: '90%',
    flexDirection: 'row',
  },
  addWrapper: {
    backgroundColor: '#07003B',
    borderRadius: 10,
    width: 85,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 85,
    height: 33,
    borderWidth: 1,
    borderColor: '#BC7A0B',
    marginTop: 5,
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
  itemCard: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 8,
  },
  introImage: {
    width: '100%',
    height: '100%',
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
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 5,
    marginTop: 10,
    borderColor: '#BC7A0B',
  },
  night: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 5,
    marginTop: 5,
    borderColor: '#BC7A0B',
  },
});
