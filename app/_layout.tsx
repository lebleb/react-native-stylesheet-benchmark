import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {StyledProvider} from "@gluestack-style/react"

import {ThemeProvider as ThemeProviderStyledComponents} from "styled-components/native";
import {ThemeProvider as ThemeProviderShopify} from '@shopify/restyle';
import {ThemeProvider as ThemeProviderEmotion} from '@emotion/react'


import restyleTheme from "@/test/restyle.config";
import emotionTheme from "@/test/emotion.config";
import styledComponentsTheme from "@/test/styled-components.config";
import {config} from "@/gluestack-style.config"

import '@/test/unistyle.config'

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
        <StyledProvider config={config}>
            <ThemeProviderEmotion theme={emotionTheme}>
                <ThemeProviderShopify theme={restyleTheme}>
                    <ThemeProviderStyledComponents theme={styledComponentsTheme}>
                        <Stack/>
                    </ThemeProviderStyledComponents>
                </ThemeProviderShopify>
            </ThemeProviderEmotion>
        </StyledProvider>
    );
}
