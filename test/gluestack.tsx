import {times} from "@/utility/times";
import {TestProps} from "@/test/types";
import {Text} from "react-native"
import {styled} from "@gluestack-style/react"


const TextStyle = styled(Text, {
    textColor: "$red",
    fontSize: "$sm",
    fontWeight: 'bold'
});


export const GluestackStyle = ({limit}: TestProps) => {
    return times(limit, (i) => (<TextStyle key={i}>Lorem Ipsum {i}</TextStyle>))
}

