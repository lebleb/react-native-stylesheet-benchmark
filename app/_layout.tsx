import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import {ThemeProvider as ThemeProviderStyledComponents} from "styled-components/native";
import {ThemeProvider as ThemeProviderShopify} from '@shopify/restyle';
import {ThemeProvider as ThemeProviderEmotion} from '@emotion/react'


import restyleTheme from "@/test/configs/restyle";
import emotionTheme from "@/test/configs/emotion";
import styledComponentsTheme from "@/test/configs/styled-components";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProviderEmotion theme={emotionTheme}>
            <ThemeProviderShopify theme={restyleTheme}>
                <ThemeProviderStyledComponents theme={styledComponentsTheme}>
                    <Stack/>
                </ThemeProviderStyledComponents>
            </ThemeProviderShopify>
        </ThemeProviderEmotion>
    );
}
