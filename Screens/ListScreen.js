import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Styles';

export default function ListScreen({ navigation, route }) {
    const { jsonData } = route.params;
    const inputValue = jsonData.inputValue;
    const lengthOfArray = 15;
    const defaultTime = '3:00';
    let initialBlindFirstNumber = 1;
    let initialBlindSecondNumber = 2;
    const Percentage = 50;
    const blindValues = [];

    for (let i = 0; i < lengthOfArray; i++) {
        blindValues.push(`${initialBlindFirstNumber}/${initialBlindSecondNumber}`);
        initialBlindFirstNumber = Math.round(initialBlindFirstNumber * (1 + Percentage / 100)); 
        initialBlindSecondNumber = Math.round(initialBlindSecondNumber * (1 + Percentage / 100));
    }

    const levels = Array.from({ length: lengthOfArray }, (_, i) => i + 1);

    const [currentLevel, setCurrentLevel] = useState(0);
    const [visibleBlindData, setVisibleBlindData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLevel((prevLevel) => {
                const newLevel = prevLevel + 1;
                if (newLevel <= lengthOfArray) {
                    setVisibleBlindData(levels.slice(0, newLevel));
                } else {
                    clearInterval(interval);
                }
                return newLevel;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [lengthOfArray, levels]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={[styles.row, styles.headerRow]}>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={[styles.columnHeader, styles.LevelAlign]}>Level</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={[styles.columnHeader, styles.TimeAlign]}>Time</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={[styles.columnHeader, styles.BlindAlign]}>Blind</Text>
                    </View>
                </View>

                {visibleBlindData.map((level, index) => (
                    <View key={index} style={[styles.row, styles.backgroundWhite]}>

                        <View style={[styles.column, styles.dataColumn]}>
                            <Text style={styles.LevelAlign}>{`${level}`}</Text>
                        </View>

                        <View style={[styles.column, styles.dataColumn]}>
                            <Text style={styles.TimeAlign}>{`${level * parseInt(defaultTime, 10)}:00`}</Text>
                        </View>

                        <View style={[styles.column, styles.dataColumn]}>
                            <Text style={styles.BlindAlign}>{blindValues[index]}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
