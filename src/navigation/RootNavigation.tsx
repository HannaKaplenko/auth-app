import { NavigationContainer } from "@react-navigation/native"
import { StackNavigation } from "./StackNavigation"

export const RootNavigation = () => {
    return (
        <NavigationContainer>
        <StackNavigation />
        </NavigationContainer>

);
}