import { createConfig } from '@gluestack-style/react';

export const config = createConfig({
    aliases: {
        textColor: 'color',
        bg: 'backgroundColor',
        bgColor: 'backgroundColor',
        rounded: 'borderRadius',
        h: 'height',
        w: 'width',
    },
    tokens: {
        colors: {
            red: "#ff0000",
        },
        space: {
            4: 16,
            5: 20,
            6: 24,
        },
        fontSizes: {
            sm: 12,
            md: 16,
        },
    },
} as const);

type ConfigType = typeof config;

declare module '@gluestack-style/react' {
    interface ICustomConfig extends ConfigType {}
}
