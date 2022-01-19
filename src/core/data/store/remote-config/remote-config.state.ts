import { City, Passion } from "../../../model/user.model";

export type RemoteConfigState = {
    cities: City[] | undefined;
    passions: Passion[] | undefined;
}