import {View, Text, ScrollView} from 'react-native';

import { styled } from 'nativewind';
import {times} from "@/utility/times";
import {TestProps} from "@/test/types";


const StyledText = styled(Text)

export const NativeWind = ({limit}: TestProps) => {
    return (times(limit, (i) => (<StyledText  key={i} className="text-[12px] font-bold text-red">Lorem Ipsum {i}</StyledText>)));
}
