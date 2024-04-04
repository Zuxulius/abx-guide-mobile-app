import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import GreenCard2 from "./GreenCard2";
import RedCard2 from "./RedCard2";
import { useModalVisibility } from "./ModalVisibilityContext";

function SectionNav() {

    const [sectionVisible, setSectionVisible] = useState(true);
    const [isGreen, setIsGreen] = useState(false);
    const [isRed, setIsRed] = useState(false);

    const navigation = useNavigation();

    const { toggleGreenNavVisibility, toggleRedNavVisibility } = useModalVisibility();


    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            const routeName = navigation.getCurrentRoute().name;
            const isTargetScreen = ['RedCard', 'GreenCard'].includes(routeName);
            setSectionVisible(isTargetScreen);

            setIsGreen(routeName === 'GreenCard');
            setIsRed(routeName === 'RedCard');

        });

        // Clean up the event listener
        return unsubscribe;
    }, [navigation]);

    function handlePress() {
        if (isGreen) {
            toggleGreenNavVisibility();
        }
        if (isRed) {
            toggleRedNavVisibility();
        }
    };

    return (
        <View style={styles.floatingNavbar}>
            {sectionVisible ? (
            <LinearGradient
            colors={['rgba(0, 102, 255, 1)', 'rgba(36, 0, 255, 0.51)']}
            style={styles.floatingNavbar}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            >
                    <TouchableOpacity
                    style={styles.navItems}
                    onPress={handlePress}
                    >
                        <Text style={styles.navText}>㆔</Text>
                    </TouchableOpacity>
            </LinearGradient>
            ) : null}
        </View>
    );
}



const styles = StyleSheet.create({
    floatingNavbar: {
        justifyContent: 'center',
        position: 'absolute',
        top: '40%',
        right: 0,
        height: 50,
        zIndex: 1000,
    },
    navItems: {
        padding: 10,
        width: '100%',
    },
    navText: {
        textAlign: 'center',
        color: 'whitesmoke'
    }
})

export default SectionNav;
