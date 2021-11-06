import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigatorParamList } from "../../../../core/presentation/navigation/root/routing.types";

export type ExpandedCardScreenNavigationProp = StackNavigationProp<RootNavigatorParamList, "ExpandedCard">

export type ExpandedCardScreenRouteProp = RouteProp<RootNavigatorParamList, "ExpandedCard">