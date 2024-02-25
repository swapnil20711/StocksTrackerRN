import { View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import { StockModel } from '../models/StockModel'

const StockCardItem = ({ stock }: { stock: StockModel }) => {
    console.log(stock);
    useEffect(()=>{
        console.log(containsURL(stock.description));
        
    },[])

    function containsURL(str:string) {
        const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(str);
    }
    
    return (
        <TouchableOpacity>
            <View style={{
                marginVertical: 10,
                marginHorizontal: 15,
                backgroundColor: '#E6F2FF',
                borderRadius: 14,
                padding: 10,
                overflow: 'hidden',
                flexDirection: 'row'
            }}>
                <View style={{ marginTop: 4, marginHorizontal: 18 }}>
                    <Text variant='titleMedium' style={{ color: 'black' }}>{stock.symbol_name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                        <Text style={{ color: 'black' }}>CMP - {stock.current_price}</Text>
                        <Text style={{ color: 'black', marginLeft: 10 }}>Target Price - {stock.target_price}</Text>
                    </View>
                    <Text style={{ color: 'black', marginTop: 4 }}>Listed at - NSE | BSE</Text>
                    <Text style={{ color: 'black', marginVertical: 4 }}>{stock.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default StockCardItem