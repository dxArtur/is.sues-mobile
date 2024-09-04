/*import { Link } from "expo-router";
import { Pressable, Text, PressableProps } from "react-native";

interface AuthButtonProps extends PressableProps {
    title: string;
    twStyleButton?: string;
    twStylePlaceholder?: string;
    link?: string; // Tornando o link opcional
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, twStyleButton, twStylePlaceholder, link, ...rest }) => {
    return (
        <Pressable className={`rounded-md ${twStyleButton}`} {...rest}>
            {link ? (
                <Link href={link as any} className={`p-4 font-semibold text-2xl ${twStylePlaceholder}`}>
                    <Text>{title}</Text>
                </Link>
            ) : (
                <Text className={`p-4 font-semibold text-2xl ${twStylePlaceholder}`}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
}*/

//export default AuthButton;
