import React, { useState, type FC } from 'react'
import { type InputModeOptions, View, type StyleProp, type ViewStyle } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper'
import { type TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types'

interface TextInputProps {
    label?: TextInputLabelProp | undefined
    value: string | undefined
    placeholder: string | undefined
    errorText?: string | null
    maxLength?: number
    numberOfLines?: number
    inputMode: InputModeOptions | undefined
    outlineStyle?: StyleProp<ViewStyle>
    secureTextEntry?: boolean
    multiline?: boolean
    onChangeText?: (text: string) => void
    mode?: 'flat' | 'outlined' | undefined
    style?: object | undefined
}

const TextInputComponent: FC<TextInputProps> = (props) => {
    const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry === true || false)

    return (
        <View style={props.style}>
            <TextInput
                placeholder={props.placeholder}
                label={props.label}
                value={props.value}
                defaultValue={props.value?.toString()}
                error={!(props.errorText == null)}
                maxLength={props.maxLength}
                multiline={props.multiline ?? false}
                numberOfLines={props.numberOfLines}
                inputMode={props.inputMode}
                outlineStyle={props.outlineStyle}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => props.onChangeText?.(text)}
                right={
                    props.secureTextEntry !== undefined && (
                        <TextInput.Icon
                            icon={secureTextEntry ? 'eye' : 'eye-off'}
                            onPress={() => {
                                setSecureTextEntry(!secureTextEntry)
                            }}
                        />
                    )
                }
                mode={props.mode}
            />
            {props.errorText != null && (
                <HelperText type="error" visible={props.errorText.length > 0}>
                    {props.errorText}
                </HelperText>
            )}
        </View>
    )
}

export default TextInputComponent