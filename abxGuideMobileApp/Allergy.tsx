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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    header: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    closeModalButton: {
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: 'whitesmoke',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20,
    },
    closeText: {
        color: 'whitesmoke',
        fontSize: 36,
    }
})

export default Allergy;
