import { Text, View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Header() {
    return (
        <LinearGradient
        colors={['rgba(0, 102, 255, 1)', 'rgba(36, 0, 255, 0.51)']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        >
            <Text style={styles.title}>ANTIBIOTIKA PÅ AKUTEN</Text>
            <Image style={styles.logo} source={require('../assets/abx-guide-logo.png')} />
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        marginTop: 25
    },
    logo: {
        margin: 0,
        padding: 0,
        height: 50,
        width: 100,
        resizeMode: 'contain'
    }
})

export default Header;
