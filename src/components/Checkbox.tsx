import React from "react"

interface CheckboxProps {
    label: string
    checked: boolean
    // onPress: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({label, checked, ...rest}) => {
    return(
        <Checkbox
            label={label}
            checked={checked}
            // onPress={()=> {
            {...rest}
            // }}
        />
    )
}

export default Checkbox