import { View, StyleSheet, Text, Pressable, Modal, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Checklist({ checklistVisible, setChecklistVisible }) {



    return (
        <Modal style={styles.checklist}
        animationType='none'
        visible={checklistVisible}
        onRequestClose={() => {
            setChecklistVisible(false);
        }}>
            <LinearGradient
            colors={['rgba(0, 102, 255, 1)', 'rgba(36, 0, 255, 0.51)']}
            style={styles.header}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            >
                <Pressable style={styles.closeModalButton} onPress={() => setChecklistVisible(false)}>
                    <Text style={styles.closeText}>X</Text>
                </Pressable>
            </LinearGradient>
            <ScrollView
            style={styles.checklist}
            >
                <Text style={styles.item}><Text style={styles.bold}>1. Vid misstanke om livshotande infektion: konsultera infektionsbakjour och narkosläkare</Text></Text>
                <Text style={styles.item}>
                    <Text style={styles.bold}>2. Ställ preliminär diagnos</Text>
                    {'\n'}{'\u25CF'} Infektionsfokus?
                    {'\n'}{'\u25CF'} Sannolikt etiologiskt agens?
                    {'\n'}{'\u25CF'} Immunsuppression?
                    {'\n'}{'\u25CF'} Ange svårighetsgrad (NEWS)
                </Text>
                <Text style={styles.item}>
                    <Text style={styles.bold}>3. Riskfaktorer antibiotikaresistenta bakterier?</Text>
                    {'\n'}{'\u25CF'} Tidigare odlingsfynd med antibiotikaresistenta bakterier (ABR) hos patient eller känt bärarskap av ABR hos hushållskontakt
                    {'\n'}{'\u25CF'} Utlandsresor
                    {'\n'}{'\u25CF'} Tidigare antibiotikabehandling
                    {'\n'}{'\u25CF'} Tidigare sjukhusvistelse/vårdkontakt
                </Text>
                <Text style={styles.item}>
                    <Text style={styles.bold}>4. Provtagning</Text>
                    {'\n'}{'\u25CF'} Klinisk kemi: CRP, Blodstatus, Na, K, Kreatinin, eGFR kreatinin, eGFR cystatinC, Bilirubin (totalt + konjugerat), ALP, ALAT, ASAT, GT, LD, Albumin, Laktat, Glukos, Urinsticka, PCT, venös diff, PK, APTT, fibrinogen, D-dimer och blodgas. CK och Myoglobin (vid nekrotiserande hud och mjukdelsinfektion).
                    {'\n'}{'\u25CF'} Mikrobiologisk diagnostik: Odlingar: likvor blod, urin, sputum, NPH, sår, punktat (ledvätska, abscess).
                    {'\n'}{'\u25CF'} Övrig mikrobiologisk diagnostik: Pneumoni: PCR bakterier, PCR virus (influensa, SARS-CoV-2, RS), Urinantigen (legionella/ pneumokock). Vid misstanke om ovanligare infektion (mögel, tuberkulos, psittakos, CMV, pneumocystis etc) kontakta infektionsläkare/mikrobiolog.
                </Text>
                <Text style={styles.item}><Text style={styles.bold}>5. ”Source Control”, föreligger behov av kirurgisk intervention – kontakta relevant kirurg!</Text>
                {'\n'}OBS: utredning av infektionsfokus måste fortsätta om man inte lokaliserat infektionskällan!
                </Text>
                <Text style={styles.item}><Text style={styles.bold}>6. Ange tidpunkt för ny bedömning av fortsatt antibiotika alt. utsättning.</Text>
                {'\n'}Motivera ditt val av antibiotika i journalen.
                </Text>
                <Text style={styles.item}><Text style={styles.bold}>7. När odlingssvar med resistensbesked erhållits skall riktad terapi ges.</Text></Text>
                <Text style={styles.item}><Text style={styles.bold}>8. Kontrollera alltid läkemedelsinteraktioner, att dosering baseras på aktuell njur- och leverfunktion samt vikt.</Text></Text>
                <Text style={styles.item}><Text style={styles.bold}>9. Pc-allergi - se tabell sid 5 för korsreaktivitet.</Text></Text>
                <Text></Text>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    checklist: {
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
    },
    item: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    }
})

export default Checklist;
