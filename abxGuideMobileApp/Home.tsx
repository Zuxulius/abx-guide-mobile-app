import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Checklist from './Checklist';
import { View, StyleSheet, Text, Pressable} from 'react-native';

function Home() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Checklist modalVisible={modalVisible} setModalVisible={setModalVisible}></Checklist>
            <Header />
            <Text style={[{marginTop: 10}, styles.h2]}>Vanliga samhällsförvärvade infektioner</Text>
            <View style={styles.greenButtonDiv}>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Urosepsis / Pyelonefrit / Nedre afebril UVI</Text>
                </Pressable>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Pneumoni</Text>
                </Pressable>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Övriga</Text>
                </Pressable>
            </View>
            <Separator />
            <Text style={styles.h2}>Intensivvårdskrävande infektioner</Text>
            <View style={styles.redButtonDiv}>
                <Pressable style={styles.redButton}>
                    <Text style={styles.buttonText}>Sepsis med okänt fokus / Bukinfektion / Pneumoni / Akut bakteriell meningit (ABM)</Text>
                </Pressable>
            </View>
            <Separator />
            <Text style={styles.h2}>Snabbresurser</Text>
            <View style={styles.resourceButtonDiv}>
                <Pressable style={styles.resourceButton} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>Checklista</Text>
                </Pressable>
                <Pressable style={styles.resourceButton}>
                    <Text style={styles.buttonText}>Penicillin-allergi</Text>
                </Pressable>
                <Pressable style={styles.resourceButton}>
                    <Text style={styles.buttonText}>Kontakt</Text>
                </Pressable>
                <Pressable style={styles.resourceButton}>
                    <Text style={styles.buttonText}>Källor och länkar</Text>
                </Pressable>
            </View>
            <Footer />
        </View>
    )
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    h2: {
        color: '#1F4D83',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      greenButtonDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
      },
      redButtonDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
      },
      resourceButtonDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
      },
      greenButton: {
        height: 30,
        flexBasis: '80%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#DCEAFF',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightblue',
      },
      redButton: {
        flexBasis: '80%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#DCEAFF',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'hsla(0, 100%, 50%, 0.2)',
      },
      resourceButton: {
        flexBasis: '80%',
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
      buttonText: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        textAlign: 'center',
        borderColor: 'red',
        color: '#1F4D83',
        fontWeight: 'bold',
        fontSize: 12,
      }
});

export default Home;
