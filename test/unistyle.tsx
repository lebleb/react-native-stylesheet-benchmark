import {times} from "@/utility/times";
import {TestProps} from "@/test/types";
import {Text} from 'react-native'
import {createStyleSheet, useStyles} from 'react-native-unistyles'


const stylesheet = createStyleSheet(theme => ({
    text: {
        color: theme.colors.red,
        fontSize: 12,
        fontWeight: 'bold'
    }
}))

export const TextStyle = ({children}: { children: React.ReactNode }) => {
    const {styles} = useStyles(stylesheet)

    return (<Text style={styles.text}>{children}</Text>)
}


export const UniStyle = ({limit}: TestProps) => {
    return (times(limit, (i) => (<TextStyle key={i}>Lorem Ipsum {i}</TextStyle>)));
}

