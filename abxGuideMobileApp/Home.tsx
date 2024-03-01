import Header from './Header';
import { View, StyleSheet, Text, Pressable} from 'react-native';

function Home() {
    return (
        <>
            <Header />
            <Text style={styles.h2}>Vanliga samhällsförvärvade infektioner</Text>
            <Separator />
            <View style={styles.greenButtonDiv}>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Idk</Text>
                </Pressable>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Idk</Text>
                </Pressable>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Idk</Text>
                </Pressable>
                <Pressable style={styles.greenButton}>
                    <Text style={styles.buttonText}>Idk</Text>
                </Pressable>
            </View>
            <Text style={styles.h2}>Intensivvårdskrävande infektioner</Text>
            <Text style={styles.h2}>Snabbresurser</Text>
        </>
    )
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    h2: {
        color: '#1F4D83',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
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
        gap: 10
      },
      greenButton: {
        flexBasis: '40%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#DCEAFF',
        padding: 5,
      },
      buttonText: {
        color: '#1F4D83',
        fontWeight: 'bold'
      }
});

export default Home;
