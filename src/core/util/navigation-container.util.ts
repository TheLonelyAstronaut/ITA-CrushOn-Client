import { NavigationContainerRef } from '@react-navigation/native';

class NavigationService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private navigationContainerRef: NavigationContainerRef<any> | null = null;

    public setNavigationContainerRef = <T>(ref: NavigationContainerRef<T>) => {
        this.navigationContainerRef = ref;
    };

    public navigate = <T>(screen: string, params: Record<string, T> | undefined = undefined) => {
        this.navigationContainerRef?.navigate(screen, params);
    };
}

export const navigationService = new NavigationService();
