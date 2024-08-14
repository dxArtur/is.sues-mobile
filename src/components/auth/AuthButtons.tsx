import { Link } from "expo-router"
import { Pressable, Text, PressableProps } from "react-native"

interface AuthButtonProps extends PressableProps {
    title: string
    twStyleButton?: string 
    twStylePlaceholder?: string
    link: string
}

const AuthButton: React.FC<AuthButtonProps> = ({title, twStyleButton, twStylePlaceholder, link, ...rest}) => {
    return (
        <Pressable className={`  rounded-md ${twStyleButton}`}>
        <Link push href={link} className={`p-4 font-semibold text-2xl ${twStylePlaceholder}`}>
            <Text>{title}</Text>
        </Link>
        </Pressable>
    )
}

export default AuthButton