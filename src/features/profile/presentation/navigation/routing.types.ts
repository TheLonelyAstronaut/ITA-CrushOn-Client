import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../../../core/presentation/navigation/root/routing.types";
import { TabNavigatorParamList } from "../../../../core/presentation/navigation/tab/routing.types";

export type ProfileScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootNavigatorParamList, "Tabs">,
    BottomTabNavigationProp<TabNavigatorParamList, 'Profile'>
>