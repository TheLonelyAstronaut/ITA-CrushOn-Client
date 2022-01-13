import { NavigationContainerRef } from "@react-navigation/native";

class NavigationService {
    private navigationContainerRef: NavigationContainerRef<any> | null = null

    public setNavigationContainerRef = (ref: NavigationContainerRef<any>) => {
        this.navigationContainerRef = ref
    } 

    public navigate = (screen: string, params: Record<string, any> | undefined = undefined) => {
        this.navigationContainerRef?.navigate(screen, params);
    }
}

export const navigationService = new NavigationService();