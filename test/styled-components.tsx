import styled from "styled-components/native";
import {times} from "@/utility/times";
import { Text } from 'react-native'
import {TestProps} from "@/test/types";

const TextStyle = styled(Text)`
    font-size: ${({theme}) => theme.getSpacing(12)};
    font-weight: bold;
    color: ${({theme}) => theme.color.red};
`

export const StyledComponents = ({limit}: TestProps) => {
    return (times(limit, (i) => (<TextStyle key={i}>Lorem Ipsum {i}</TextStyle>)));
}
