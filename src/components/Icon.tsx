import React from "react"
import {FontAwesome5, MaterialCommunityIcons , FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { GlyphMap, IconProps,  } from "@expo/vector-icons/build/createIconSet"


type IconType =  'MaterialCommunityIcons'|'FontAwesome5' | 'FontAwesome6'

interface Icon {
    type: IconType
    name: string
    size?: number
    color?: string
}


const Icon = ({name, type}:Icon) => {
    return (
       <Icon 
            name={name}
            type={type}
        />
    )
}

export default Icon