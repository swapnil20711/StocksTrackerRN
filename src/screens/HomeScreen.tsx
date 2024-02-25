import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FAB } from 'react-native-paper'
import { fetchStocks } from '../database/helpers'
import { Navigation, NavigationProps } from 'react-native-navigation'
import { ADD_STOCK_SCREEN } from '.'
import StockCardItem from '../components/StockCardItem'
import { StockModel } from '../models/StockModel'
import { Model } from '@nozbe/watermelondb'

const HomeScreen = (props: NavigationProps) => {
  const cheerio = require('cheerio');
  const [list, setList] = useState<Model[]>()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const listener = Navigation.events().registerComponentDidAppearListener(({ componentId }) => {
      if (componentId === props.componentId) {
        fetchStocks().then((value) => {
          setIsLoading(false)
          setList(value)
        }).catch((error) => {
          console.log(error);
        })
        console.log('Screen focused');
      }
    });
    // loadGraphicCards()
    return () => {
      listener.remove();
    };
  }, [props.componentId]);

  async function loadGraphicCards(page = 1) { 
    const searchUrl = `https://www.google.com/search?client=safari&rls=en&q=tata+power+share+price&ie=UTF-8&oe=UTF-8`;
    const response = await fetch(searchUrl);      // fetch page 
  
    const htmlString = await response.text();     // get response text
    // const $ =  cheerio.load(htmlString);           // parse HTML string
  
    // const liList = $("#s-results-list-atf > li"); // select result <li>s
    console.log('htmlString------> ',htmlString);
    
    
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading&&<ActivityIndicator color='#3944BC' style={{flex:1}} size={'large'}/>}
      {!isLoading && <FlatList
        data={list}
        renderItem={({ item, index }) => {
          return (<StockCardItem stock={item as unknown as StockModel} />)
        }} />}
      <FAB
        color='white'
        style={styles.fab}
        icon="plus"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              options: {
                topBar: {
                  title: {
                    text: 'Add Stock'
                  },
                  visible: true,
                },
              },
              name: ADD_STOCK_SCREEN
            }
          })
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#3944bc'
  },
})


export default HomeScreen