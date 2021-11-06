import React from "react";
import { View } from "react-native";
import { LocationSVG } from "../../../../assets/components/location-icon.component";
import { User } from "../../../model/user.model";
import { Palette } from "../../themes/palette.themes";
import { UserInfoWrapper } from "./styled/user-info-wrapper.styled";
import { TextThemed } from "../../themes/text-themed.component";
import { useTheme } from "styled-components";
import { PassionsWrapper } from "./styled/passins-wrapper.styled";
import { PassionView } from "./styled/passion-view.styled";
import { PassionLabel } from "./styled/passion-label.styled";
import { SeparatorVert } from "../styled/separator-vert.styled";

type UserInfoProps = {
    user: User;
}

export const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
    const CurrentTheme = useTheme();

    return (
        <UserInfoWrapper>
            <TextThemed type={'name'}>
                {props.user.name},{props.user.age}
            </TextThemed>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <TextThemed type={'geo'} style={{paddingRight: CurrentTheme.spacer}}>Live in {props.user.lives}</TextThemed>
                <LocationSVG color={CurrentTheme.colors.componentLabel} size={14} strokeWidth={2}/>
            </View>
            <SeparatorVert height={'extrasmall'}/>
            <TextThemed type={'header'}>Intrested</TextThemed>
            <PassionsWrapper>
                {
                    props.user.passions.map((item)=>{
                        let n=Math.floor(Math.random()*10);
                        let boxColor=Palette[n].color;
                        let labelColor=Palette[n].labelColor;
                        return (
                            <PassionView backgroundColor={boxColor}>
                                <PassionLabel color={labelColor}>
                                    {item}
                                </PassionLabel>
                            </PassionView>
                        )
                    })
                }
            </PassionsWrapper>
            <SeparatorVert height={'extrasmall'}/>
            <TextThemed type={'header'}>About</TextThemed>
            <TextThemed type={'regular'}>{props.user.bio}</TextThemed>
        </UserInfoWrapper>
    );
}