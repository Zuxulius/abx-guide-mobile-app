import { View, StyleSheet, Text, Pressable, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Allergy({ allergyVisible, setAllergyVisible }) {



    return (
        <Modal style={styles.allergy}
        animationType='none'
        visible={allergyVisible}
        onRequestClose={() => {
            setAllergyVisible(false);
        }}>
            <LinearGradient
            colors={['rgba(0, 102, 255, 1)', 'rgba(36, 0, 255, 0.51)']}
            style={styles.header}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            >
                <Pressable style={styles.closeModalButton} onPress={() => setAllergyVisible(false)}>
                    <Text style={styles.closeText}>X</Text>
                </Pressable>
            </LinearGradient>
            <View style={styles.allergy}>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    allergy: {
        padding: 10,
        width: '100%',
        height: '100%',
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
    }
})

export default Allergy;
