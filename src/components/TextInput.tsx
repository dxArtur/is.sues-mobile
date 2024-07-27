import React from "react"
import { TextInput, TextInputProps, View } from "react-native"


interface InputCustom extends TextInputProps {
    placeholder?:string
    twStyleButton?: string 
    twStylePlaceholder?: string
}

const InputCustom: React.FC<InputCustom> = ({placeholder, ...rest}) => {
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={""}
            placeholderClassName="text-white "
            {...rest}
            className=" shadow-md shadow-black italic h-8 bg-slate-800 border-1 border border-white rounded- items-center w-5/6 "
        />
    )
}


export default InputCustom