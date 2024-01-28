import React, {Profiler, ProfilerOnRenderCallback, useRef, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {MAX_TEST_ATTEMPTS} from "@/config";
import {RenderTimer} from "@/components/MeasureRenderTime";

export const TestRunner = ({name, testComponent, limit, onDone}: {
    name: string;
    limit: number;
    testComponent: React.JSXElementConstructor<{ limit: number }>,
    onDone: (v: number[]) => void
}) => {
    const [count, setCount] = useState(1);
    const countRef = useRef(count);
    // To ensure that the correct value is accessible for out-of-closures
    countRef.current = count;
    const results = useRef<number[]>([]);

    const handlePerformanceRender: ProfilerOnRenderCallback = (_id, _phase, actualDuration) => {
        (results.current || (results.current = [])).push(actualDuration);
        // Wait for a while to avoid blocking the UI execution
        setTimeout(() => {
            if (countRef.current >= MAX_TEST_ATTEMPTS) {
                onDone(results.current);
            } else {
                setCount(v => v + 1);
            }
        }, 200);
    }

    return (
        <View>
            <View>
                <Text style={styles.title}>
                    Test progress: <Text style={styles.titleHighlight}>{name} ({count} / {MAX_TEST_ATTEMPTS})</Text>
                </Text>
            </View>
            {/*Performs tests by measuring the layout painting time*/}
            {(__DEV__) ? ( // Profiler is not working on production
                <Profiler key={count} id={name} onRender={handlePerformanceRender}>
                    {React.createElement(testComponent, {limit})}
                </Profiler>
            ) : (
                <RenderTimer key={count} id={name}
                             onRender={handlePerformanceRender}>
                    {React.createElement(testComponent, {limit})}
                </RenderTimer>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    title: {color: "#1C6EA4", marginBottom: 12, fontSize: 14},
    titleHighlight: {color: 'blue', marginBottom: 10}
});
