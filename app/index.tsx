import {ScrollView, StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useRef, useState} from "react";
import {StyledComponents} from "@/test/styled-components";
import {NativeStyle} from "@/test/native-style";
import {NativeWind} from "@/test/nativewind-style";
import {Row, Table} from 'react-native-table-component';
import {TestRunner} from "@/components/TestRunner";
import {ReStyle} from "@/test/restyle";
import {EmotionStyle} from "@/test/emotion";
import chroma from 'chroma-js'
import {LIMIT, MAX_TEST_ATTEMPTS, TEST_TYPE} from "@/config";
import {GluestackStyle} from "@/test/gluestack";

enum PROGRESS_STATE {
    Requested, // Loading
    InProgress, // test is running
    Finished // Testing was finished and show results
}
const getComponent = (value: TEST_TYPE): React.JSXElementConstructor<{ limit: number }> | null => {
    switch (value) {
        case TEST_TYPE["EMOTION"]:
            return EmotionStyle
        case TEST_TYPE["NATIVE_STYLE"]:
            return NativeStyle
        case TEST_TYPE["RESTYLE"]:
            return ReStyle
        case TEST_TYPE["STYLED_COMPONENTS"]:
            return StyledComponents
        case TEST_TYPE.NATIVE_WIND:
            return NativeWind
        case TEST_TYPE.GLUESTACK:
            return GluestackStyle
        default:
            return null;
    }
}

export default function Home() {
    const results = useRef<{ name: string, values: number[] }[]>([])
    const [progress, setProgress] = useState<PROGRESS_STATE>(PROGRESS_STATE.Requested)
    const [test, setTest] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(1)
        }, 1000)
    }, []);


    const handleDone = (values: number[]) => {
        results.current.push({name: TEST_TYPE[test], values})

        setTest(v => {
            if (v >= Object.keys(TEST_TYPE).length / 2 - 1) {
                setProgress(2);
                return v;
            }
            return v + 1
        })
    }

    switch (progress) {
        case PROGRESS_STATE.Requested:
            return <View style={[styles.wrapper, {alignItems: 'center', justifyContent: 'center'}]}><Text
                style={styles.pendingText}>Tests are pending and will start in a second.</Text></View>
        case PROGRESS_STATE.InProgress:
            const compo = getComponent(test)
            if (!compo) return null;

            return (
                <ScrollView style={styles.wrapper}>
                    <TestRunner key={TEST_TYPE[test]} name={TEST_TYPE[test]} testComponent={compo} limit={LIMIT}
                                onDone={handleDone}/>
                </ScrollView>
            );
        case PROGRESS_STATE.Finished:
            const colorTemperature = chroma.scale(['#8ac926', '#f94144'])
                .mode('lch').colors(results.current.length);

            const data = results.current.map(item => [item.name, (item.values.reduce((a, b) => a + b, 0) / item.values.length) || 0])
                .sort((a, b) => {
                    return a[1] < b[1] ? -1 : 1
                });

            const tableData = {
                tableHead: ['Test', 'Average (ms)', 'Slower'],
                tableData: data.map(item => {
                    const slower = ((Number(item[1]) / Number(data[0][1]) * 100) - 100).toFixed(0) + '%'
                    return [item[0], Number(item[1]).toFixed(0), slower]
                })
            }
            return (
                <ScrollView style={styles.wrapper}>
                    <Text style={styles.resultTitleText}>Test progress: Result ({MAX_TEST_ATTEMPTS} render x {LIMIT} samples for each)</Text>
                    <View>
                        <Table borderStyle={styles.tableBorderStyle}>
                            <Row data={tableData.tableHead} style={styles.tableHeadRow} textStyle={styles.tableHeadText}/>
                            {tableData.tableData.map((data, index) => (
                                <Row data={data}
                                     style={{backgroundColor: colorTemperature[index]}}
                                     textStyle={styles.tableBodyText}
                                />
                            ))}
                        </Table>
                    </View>
                </ScrollView>
            );
        default:
            return null;
    }


}


const styles = StyleSheet.create({
    wrapper: {flex: 1, padding: 16, backgroundColor: '#fff'},
    pendingText: {textAlign: 'center', color: "#333", fontSize: 16},
    resultTitleText: {color: "#1C6EA4", marginBottom: 12, fontSize: 18},
    tableBorderStyle: {borderWidth: 2, borderColor: '#ffffff'},
    tableHeadRow: {
        backgroundColor: '#1C6EA4',
    },
    tableHeadText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    tableBodyText: {marginVertical: 6, marginHorizontal: 3, textAlign: 'center'}
});
