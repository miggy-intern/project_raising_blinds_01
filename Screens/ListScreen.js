import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Styles';

export default function ListScreen({ navigation }) {
    const lengthOfArray = 15;
    const defaultTime = '3:00';
    let small_bind = 1;
    let big_bind = 2;
    const blindValues = [];

    for (let i = 0; i < lengthOfArray; i++) {
        blindValues.push(`${small_bind}/${big_bind}`);
    
        let x;
        let y;
        if (small_bind <= 100) {
            x = 2;
        } else if (small_bind > 100 && small_bind <= 300) {
            x = 1.8;
        } else if (small_bind > 300 && small_bind <= 600) {
            x = 1.6;
        } else {
            x = 1.4; 
        }

        if (big_bind <= 100) {
            y = 2;
        } else if (big_bind > 100 && big_bind <= 300) {
            y = 1.8;
        } else if (big_bind > 300 && big_bind <= 600) {
            y = 1.6;
        } else {
            y = 1.4; 
        }
    
        small_bind = Math.round(small_bind * x);
        big_bind = Math.round(big_bind * y);
    }

    const levels = Array.from({ length: lengthOfArray }, (_, i) => i + 1);


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

                {levels.map((level, index) => (
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
