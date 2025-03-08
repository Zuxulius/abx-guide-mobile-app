import { ScrollView, View, StyleSheet, Text, Pressable, Modal } from 'react-native';
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
            <ScrollView style={styles.allergy}>
                <Text style={styles.h1}>Korsreaktivitet mot övriga beta-laktam antibiotika vid tidigare reaktion på penicillin.</Text>
                <Text style={styles.h2}>Behandlingsrekommendationer vid akut antibiotikabehov för sjukhusvårdade patienter när allergologisk utredning inte är genomförbar.</Text>
                <View style={styles.container}>
                    <View style={styles.allergyLists}>
                        <Text style={styles.h2}>Hög risk för anafylaxi/allvarlig snabb reaktion på penicillin:</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Reaktion inom 2 timmar efter den 1:a dosen</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Bronkospasm/stridor/heshet</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Synkope/hypotension</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Urtikaria/svår klåda/angioödem</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Behov av sjukhusvård vid index reaktion</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Systemisk mastocytos</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Misstänkt anafylaxi/behov av adrenalin</Text>
                        <Text style={styles.paragraph}>Undvik penicilliner, remiss kan skickas till allergolog för utredning.</Text>
                        <Text style={styles.paragraph}>Karbapenem och aztreonam kan användas med anafylaxiberedskap och observation i minst 2 timmar. (Om tiden medger rekommenderas att först ge provdos: 1:10, och 30-45 minuter senare resten av en behandlingsdos).</Text>
                        <Text style={styles.paragraph}>Cefalosporin generation 3/4/5 kan användas med anafylaxiberedskap och observation i minst 2 timmar. (Vid tidigare allvarlig reaktion ge först provdos: 1:10, 30-45 minuter senare resten av en behandlingsdos). Om penicillin eller cefalosporin generation 1 eller 2 är nödvändigt kontakta allergispecialist för utredning.</Text>
                    </View>
                    <View style={styles.allergyLists}>
                        <Text style={styles.h2}>Allvarlig senreaktion på penicillin:</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Svårt sendebuterande hudreaktion som har krävt peroralt kortison och/eller varade i minst 7 dagar</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Serumsjuka/ledpåverkan</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Vaskulit</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Toxisk epidermal nekrolys (TEN)</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Svår organpåverkan (t.ex. njure, lever)</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Svår påverkan på blodstatus</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Hudsymtom med blåsbildning, utbredd fjällning eller slemhinnepåverkan</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Läkemedelsutlösta autoimmuna reaktioner</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Drug reaction with eosinophila and systemic symptoms (DRESS)</Text>
                        <Text style={styles.paragraph}>Undvik beta-laktam antibiotika. Om det finns en vital indikation för beta-laktam antibiotika och övriga antibiotika-grupper inte kan användas, kontakta hud- eller allergikonsult.</Text>
                    </View>
                    <View style={styles.allergyLists}>
                        <Text style={styles.h2}>Låg risk för allvarlig allergisk reaktion/Mild reaktion på penicillin:</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Makulopapulösa hudreaktioner</Text>
                        <Text style={styles.listItem}>{'\u25CF'} debut minst 2 timmar efter den 1:a dosen</Text>
                        <Text style={styles.listItem}>{'\u25CF'} ej urtikaria eller angioödem</Text>
                        <Text style={styles.listItem}>{'\u25CF'} ej krävt per orala steroider eller adrenalin</Text>
                        <Text style={styles.listItem}>{'\u25CF'} kortvariga (mindre än 7 dagar)</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Lokal infiltration vid intramuskulär injektion</Text>
                        <Text style={styles.listItem}>{'\u25CF'} Lokal urtikaria vid intravenös injektion</Text>
                        <Text style={styles.paragraph}>Cefalosporin generation 3/4/5, karbapenem, aztreonam kan ges som behandlingsdos. Om cefalosporin generation 1 eller 2 är nödvändigt kontakta allergikonsult.</Text>
                    </View>
                    <Text style={styles.paragraph}>Referens: Romano A et al. Towards a more precise diagnosis of hypersensitivity to beta-lactams - an EAACI position paper. Allergy. 2020 Jun;75(6):1300-1315. doi: 10.1111/all.14122. PMID: 31749148.</Text>
                    <Text style={[styles.paragraph, {marginBottom: 30}]}>I samarbete med Allergicentrum, Region Östergötland.</Text>
                </View>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    allergy: {
        padding: 10,
        marginBottom: 50,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(230,229,255,0.32)',
    },
    container: {
        gap: 20,
    },
    allergyLists: {
        borderWidth: 1,
        padding: 10,
    },
    listItem: {
        color: '#1F4D83',
        fontSize: 16,
    },
    paragraph: {
        color: '#1F4D83',
        fontSize: 16,
        marginTop: 10,
    },
    header: {
        paddingTop: 50,
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
    h1: {
        color: '#1F4D83',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
    },
    h2: {
        marginBottom: 15,
        color: '#1F4D83',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default Allergy;
