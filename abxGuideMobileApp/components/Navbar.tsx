import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Menu from "./Menu";
import { useState } from "react";
import Checklist from "./Checklist";
import Allergy from './Allergy';

function Navbar() {

    const [checklistVisible, setChecklistVisible] = useState(false);
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);
    const [allergyVisible, setAllergyVisible] = useState(false);

    return (
        <View style={styles.floatingNavbar}>
            <TouchableOpacity
            style={styles.navItems}
            onPress={() => navigation.navigate('Home')}
            >
            <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.navItems}
            onPress={() => setMenuVisible(!menuVisible) }
            >
                <Text style={styles.navText}>Menu</Text>
            </TouchableOpacity>
            <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible}></Menu>
            <Checklist checklistVisible={checklistVisible} setChecklistVisible={setChecklistVisible}></Checklist>
            <Allergy allergyVisible={allergyVisible} setAllergyVisible={setAllergyVisible}></Allergy>
        </View>
    )
}

const styles = StyleSheet.create({
    floatingNavbar: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#AFD4FF',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
    },
    navItems: {
        borderWidth: 0.3,
        padding: 10,
        width: '50%',
    },
    navText: {
        textAlign: 'center'
    }
})

export default Navbar;
