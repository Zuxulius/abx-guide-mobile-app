import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import { useState } from 'react';
import Checklist from './Checklist';
import Allergy from './Allergy';
import { useNavigation } from '@react-navigation/native';

function Menu({ menuVisible, setMenuVisible }) {

    const [checklistVisible, setChecklistVisible] = useState(false);
    const [allergyVisible, setAllergyVisible] = useState(false);
    const navigation = useNavigation();

    function handlePDFbuttonPress(pdfName) {
        navigation.navigate('PdfViewer', {pdfName});
    }

    return (
        <>
            <Modal
            style={{margin: 0}}
            backdropOpacity={0.4}
            animationIn={'slideInLeft'}
            animationOut={'slideOutLeft'}
            isVisible={menuVisible}
            onBackdropPress={() => setMenuVisible(false)}
            onRequestClose={() => {
                setMenuVisible(false);
            }}>
                <View style={styles.menu}>
                    <View style={styles.menuItems}>
                        {/* <Text style={[styles.h2, {marginTop: 30}]}>Vanliga samhällsförvärvade infektioner</Text> */}
                        <View style={styles.greenButtonDiv}>
                            <Pressable
                            style={styles.greenButton}
                            onPress={() => navigation.navigate('GreenCard', {scrollTo: 'section1'})}
                            >
                                <Text style={styles.buttonText}>Vanliga samhällsförvärvade infektioner</Text>
                            </Pressable>
                            {/* <Pressable
                            style={styles.greenButton}
                            onPress={() => navigation.navigate('GreenCard', {scrollTo: 'section1'})}
                            >
                                <Text style={styles.buttonText}>Urosepsis / Pyelonefrit / Nedre afebril UVI</Text>
                            </Pressable>
                            <Pressable style={styles.greenButton}
                            onPress={() => navigation.navigate('GreenCard', {scrollTo: 'section2'})}
                            >
                                <Text style={styles.buttonText}>Pneumoni</Text>
                            </Pressable>
                            <Pressable style={styles.greenButton}
                            onPress={() => navigation.navigate('GreenCard', {scrollTo: 'section3'})}
                            >
                                <Text style={styles.buttonText}>Övriga</Text>
                            </Pressable> */}
                        </View>
                        {/* <Text style={styles.h2}>Intensivvårdskrävande infektioner</Text> */}
                        <View style={styles.redButtonDiv}>
                            <Pressable
                            style={styles.redButton}
                            onPress={() => navigation.navigate('RedCard')}
                            >
                                <Text style={styles.buttonText}>Intensivvårdskrävande infektioner</Text>
                            </Pressable>
                            {/* <Pressable
                            style={styles.redButton}
                            onPress={() => navigation.navigate('RedCard')}
                            >
                                <Text style={styles.buttonText}>Sepsis med okänt fokus / Bukinfektion / Pneumoni / Akut bakteriell meningit (ABM)</Text>
                            </Pressable> */}
                        </View>
                        {/* <Text style={styles.h2}>Snabbresurser</Text> */}
                        <View style={styles.resourceButtonDiv}>
                            <Pressable style={styles.resourceButton} onPress={() => setChecklistVisible(!checklistVisible)}>
                                <Text style={styles.buttonText}>Checklista</Text>
                            </Pressable>
                            <Pressable style={styles.resourceButton} onPress={() => setAllergyVisible(!allergyVisible)}>
                                <Text style={styles.buttonText}>Penicillin-allergi</Text>
                            </Pressable>
                            {/* <Pressable style={styles.resourceButton}>
                                <Text style={styles.buttonText}>Kontakt</Text>
                            </Pressable>
                            <Pressable style={styles.resourceButton}>
                                <Text style={styles.buttonText}>Källor och länkar</Text>
                            </Pressable> */}
                        </View>
                        <View style={styles.greenButtonDiv}>
                            <Pressable style={[styles.greenButton, {height: 30}]}
                            onPress={() => handlePDFbuttonPress('greenCard')}
                            >
                                <Text style={styles.buttonText}>Grönakortet (PDF)</Text>
                            </Pressable>
                            <Pressable style={[styles.redButton, {height: 30}]}
                            onPress={() => handlePDFbuttonPress('redCard')}
                            >
                                <Text style={styles.buttonText}>Rödakortet (PDF)</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <Checklist checklistVisible={checklistVisible} setChecklistVisible={setChecklistVisible}></Checklist>
                <Allergy allergyVisible={allergyVisible} setAllergyVisible={setAllergyVisible}></Allergy>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create ({
    menu: {
        width: '40%',
        height: '100%',
        position: 'absolute',
    },
    menuItems: {
        display: 'flex',
        justifyContent: 'flex-start',
        borderWidth: 1,
        height: '100%',
        backgroundColor: 'whitesmoke',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    closeModalButton: {
        marginTop: 25,
        marginBottom: 25,
        borderWidth: 3,
        borderRadius: 100,
        borderColor: 'whitesmoke',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 15,
        paddingLeft: 15,
    },
    closeText: {
        color: 'whitesmoke',
        fontSize: 24,
        fontFamily: 'sans-serif',
    },
    item: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    h2: {
        color: '#1F4D83',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    greenButtonDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 30,
    },
    redButtonDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
    },
    greenButton: {
        height: 75,
        flexBasis: '90%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#DCEAFF',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightblue',
      },
      redButton: {
        height: 75,
        flexBasis: '90%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#DCEAFF',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'hsla(0, 100%, 50%, 0.2)',
      },
    resourceButton: {
        flexBasis: '95%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'hsla(241, 100%, 50%, 0.1)',
        padding: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderWidth: 1,
        borderColor: 'hsla(241, 100%, 50%, 0.2)',
      },
      resourceButtonDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20,
      },
      buttonText: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        textAlign: 'center',
        borderColor: 'red',
        color: '#1F4D83',
        fontWeight: 'bold',
        fontSize: 12,
      }
})

export default Menu;
