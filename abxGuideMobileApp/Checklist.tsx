import { View, StyleSheet, Text, Pressable, Modal } from 'react-native';

function Checklist({ modalVisible, setModalVisible }) {



    return (
        <Modal style={styles.checklist}
        animationType='none'
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(false);
        }}>
            <View style={styles.checklist}>
                <Pressable onPress={() => setModalVisible(false)}><Text>X</Text></Pressable>
                <Text>HELLO</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    checklist: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})

export default Checklist;
