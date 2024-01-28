const theme = {
    colors: {
        red: "#ff0000"
    },
    getSpacing: (space: number) => (space + 'px')
};

export type Theme = typeof theme;
export default theme;
