import { Text} from 'react-native'
import {TestProps} from "@/test/types";
import {times} from "@/utility/times";
import tw from "@/test/twrnc.config";

export const Twrnc = ({limit}: TestProps) => {
    return (times(limit, (i) => ( <Text key={i} style={tw`text-[12px] font-bold text-red`}>Lorem Ipsum {i}</Text>)));
}
