import {View, Text} from 'react-native';
import {times} from "@/utility/times";
import {TestProps} from "@/test/types";

export const NativeStyle = ({limit}:TestProps) => {
    return times(limit, (i) => (<Text style={{
        fontSize: 12,
        fontWeight: 'bold',
        color:'red'
    }} key={i}>Lorem Ipsum {i}</Text>))
}

