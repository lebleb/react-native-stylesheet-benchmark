import {times} from "@/utility/times";
import {createText} from '@shopify/restyle';
import {Theme} from '@/test/configs/restyle';
import {View} from "react-native";
import {TestProps} from "@/test/types";

const Text = createText<Theme>();

export const ReStyle = ({limit}: TestProps) => {
    return (times(limit, (i) => (<Text key={i} variant="text">Lorem Ipsum {i}</Text>)));
}

