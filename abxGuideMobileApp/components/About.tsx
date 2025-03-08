import { Text, View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

function About() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Källor</Text>
            <ScrollView style={{height: 100}}>
                <View style={styles.references}>
                    <Text>Referensgruppen för Antibiotikafrågor:</Text>
                    <Text>https://www.sls.se/raf/</Text>
                    <Text>- Dosering vid dialys</Text>
                    <Text>- Dosering, normal, högdos - Antibiotikakompendium</Text>
                    <Text>Folkhälsomyndigheten, information om resistensläget: https://www.folkhalsomyndigheten.se </Text>
                    <Text>- Swedres-Svarm årsrapporter</Text>
                    <Text>- Antibiotika och antibiotikaresistens</Text>
                    <Text>Nordic Committee on Antimicrobial Susceptibility</Text>
                    <Text>Testing (NordicAST): www.nordicast.org </Text>
                    <Text>- Kliniska brytpunkter</Text>
                    <Text>European Committee of Antimicrobial Susceptibili- ty Testing (EUCAST) https://www.eucast.org/</Text>
                    <Text>- Information om vildtypspopulationer:</Text>
                    <Text>https://mic.eucast.org/Eucast2/</Text>
                    <Text>Svenska Infektionsläkarföreningen</Text>
                    <Text>(SILF): www.infektion.net</Text>
                    <Text>- Vårdprogram</Text>
                    <Text>Strama – Samverkan mot antibiotikaresistens:</Text>
                    <Text>www.strama.se</Text>
                    <Text>- Strama Nationell - Regnbågsbroschyren</Text>
                </View>
            </ScrollView>

            <Text style={styles.h2}>Ansvarig utgivare för rekommendationerna</Text>
            <Text>Läkemedelskommitten i Region Östergötland (LKÖ).</Text>
            <Text>lakemedel@regionostergotland.se</Text>

            <Text style={styles.h2}>Kontakt</Text>
            <Text style={{fontWeight: 'bold'}}>Antibiotikaval</Text>
            <Text>Vid osäkerhet sök infektionsbakjour eller annan relevant specialist.</Text>

            <Text style={styles.h2}>Synpunkter på rekommendationerna</Text>
            <Text>Sammankallande LKÖs expertgrupp infektion </Text>
            <Text>Håkan Hanberger Epost: hakan.hanberger@liu.se</Text>

            <Text style={styles.h2}>© Copyright</Text>
            <Text>Håkan Hanberger och LKÖ.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    h2: {
        color: '#1F4D83',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 25,
    },
    container: {
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center',
    },
    references: {
        padding: 10,
        backgroundColor: '#DCEAFF',
    }
})

export default About;
