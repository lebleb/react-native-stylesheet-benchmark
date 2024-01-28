
import {createTheme} from '@shopify/restyle';



const theme = createTheme({
    colors: {
        red:"#ff0000"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        text: {
            color: 'red',
            fontWeight: 'bold',
            fontSize: 12,
        },
        defaults: {
            // We can define a default text variant here.
        },
    },
});

export type Theme = typeof theme;
export default theme;
