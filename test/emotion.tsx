import {times} from "@/utility/times";
import {TestProps} from "@/test/types";
import styled from '@emotion/native'



const Text = styled.Text`
    font-size:  ${({theme}) => {
        // @ts-ignore
        return theme.getSpacing(12)
    }};
    font-weight: bold;
    color: ${({theme}) => {
        // @ts-ignore
        return theme.colors.red
    }};
`;

export const EmotionStyle = ({limit}: TestProps) => {
    return times(limit, (i) => (<Text key={i}>Lorem Ipsum {i}</Text>))
}

