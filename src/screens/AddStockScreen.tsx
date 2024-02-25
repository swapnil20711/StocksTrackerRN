import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import TextInputComponent from '../components/TextInputComponent'
import { saveStock } from '../database/helpers'
import { Navigation, NavigationProps } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
const AddStockScreen = (props: NavigationProps) => {
    const [stock, setStock] = useState({
        symbol_name: '',
        target_price: 0,
        current_price: 0,
        description: '',
        created_at: Date.now(),
        listed_at: 'NSE | BSE',
    })
    const [stockError, setStockError] = useState({
        symbol_name_error: null,
        target_price_error: null,
        current_price_error: null,
        description_error: null,
    })

    const updateStock = (key: string, value: any) => {
        setStock(prevStock => ({
            ...prevStock,
            [key]: value
        }));
    };

    const updateStockError = (key: string, value: any) => {
        setStockError(prevStockError => ({
            ...prevStockError,
            [key]: value
        }));
    };

    const onUploadSuccess = () => {
        console.log('stock added ', stock);
        Navigation.pop(props.componentId)
    }

    const isValid = (): boolean => {
        updateStockError('symbol_name_error', null)
        updateStockError('current_price_error', null)
        updateStockError('target_price_error', null)
        updateStockError('description_error', null)

        if (stock.symbol_name.length === 0) {
            updateStockError('symbol_name_error', 'Stock name cannot be empty')
            return false
        }
        if (stock.current_price === 0) {
            updateStockError('current_price_error', 'Current price cannot be empty')
            return false
        }
        if (stock.target_price === 0) {
            updateStockError('target_price_error', 'Current price cannot be empty')
            return false
        }
        if (stock.description.length === 0) {
            updateStockError('description_error', 'Current price cannot be empty')
            return false
        }
        return true
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 14, paddingTop: 16 }}>
            <View style={{ flex: 1 }}>

                <TextInputComponent onChangeText={(text) => { updateStock('symbol_name', text) }}
                    mode='outlined'
                    errorText={stockError.symbol_name_error}
                    label={'Stock Name'}
                    value={stock.symbol_name}
                    placeholder={'Premier Polyfilm'}
                    inputMode={'text'} />

                <TextInputComponent
                    style={{ marginTop: 20 }}
                    onChangeText={(text) => { updateStock('current_price', Number(text)) }}
                    mode='outlined'
                    label={'CMP'}
                    errorText={stockError.current_price_error}
                    value={stock.current_price === 0 ? '' : stock.current_price.toString()}
                    placeholder={''}
                    inputMode={'numeric'} />


                <TextInputComponent
                    style={{ marginTop: 20 }}
                    onChangeText={(text) => { updateStock('target_price', Number(text)) }}
                    mode='outlined'
                    label={'Target price'}
                    errorText={stockError.target_price_error}
                    value={stock.target_price === 0 ? '' : stock.target_price.toString()}
                    placeholder={''}
                    inputMode={'numeric'} />

                <TextInputComponent
                    style={{ marginTop: 20 }}
                    errorText={stockError.description_error}
                    onChangeText={(text) => { updateStock('description', text) }}
                    mode='outlined'
                    label={'Description'}
                    value={stock.description}
                    placeholder={''}
                    inputMode={'text'} />

                <TouchableOpacity
                    onPress={() => {
                        ImagePicker.openPicker({
                            mediaType: "photo",
                        }).then((photo) => {
                            console.log(photo);
                        }).catch((error)=>{
                            console.log(error);
                        })
                    }}
                    style={{
                        borderWidth: 1,
                        flex: 0.5,
                        borderColor: 'black',
                        borderRadius: 5,
                        marginTop: 20,
                        padding: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon color={'black'} name='upload' size={28} />
                    <Text style={{ marginTop: 8, color: 'black' }}>Add Stock Image</Text>
                </TouchableOpacity>
            </View>

            <Button
                buttonColor='#3944BC'
                onPress={() => {
                    if (isValid()) {
                        void saveStock(stock, () => {
                            onUploadSuccess()
                        })
                    }
                }} style={{ marginVertical: 18 }} mode='contained'>
                Save
            </Button>
        </View >
    )
}

export default AddStockScreen