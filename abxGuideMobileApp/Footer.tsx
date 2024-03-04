import { Text, View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Footer() {

    return (
        <LinearGradient
        colors={['rgba(0, 102, 255, 1)', 'rgba(36, 0, 255, 0.51)']}
        style={styles.footer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        >
            <Text style={styles.footerText}>&copy; {new Date().getFullYear()} Håkan Hanberger</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    footer: {
        bottom: 0,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        color: 'whitesmoke',
        fontSize: 10,
    }
})

export default Footer;
