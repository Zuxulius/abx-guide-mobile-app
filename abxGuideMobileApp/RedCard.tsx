import { View, StyleSheet, ScrollView, Text, } from 'react-native';

function RedCard() {
    return (
        <ScrollView style={styles.container}>

            <View style={{marginTop: 50}}>
                <Text style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: '#A52F2C'}}>
                    Empirisk antibiotikabehandling vid intensivvårdskrävande infektioner hos vuxna 2023
                    {"\n"}
                    {"\n"}
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>
                    Läkemedelskommittén Region Östergötland
                    {"\n"}
                    www.regionostergotland.se
                    {"\n"}
                    {"\n"}
                    </Text>
                </Text>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.content}>
                    <Text style={{fontWeight: 'bold'}}>Initial antibiotikabehandling</Text> (mål: insatt inom 1 timma) – dosering vid normal vikt och njurfunktion, icke gravida.
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.infection}>Infektion</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.infection}>Sepsis med okänt fokus</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.infection}>Pneumoni</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.infection}>Bukinfektion</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.infection}>Akut bakteriell meningit (ABM)</Text>
                    </View>
            </View>
            <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad</Text></Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>a. cefotaxim 2g x 3-41, 2, 3, 4, 5
+/- metronidazol 500mg x 38
b. piperacillin-tazobaktam 4g x 41, 2, 3, 4, 5
c. meropenem 1g x 3-41, 2, 3, 4, 5</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>a. cefotaxim 2g x 3-41, 2, 3, 4, 5 b. meropenem 1gx3-41, 2, 3, 4, 5
+
azitromycin 500mgx1 alt. erytromycin 1gx3-(4)
eller
moxifloxacin 400mgx19 alt. levofloxacin 750 mg x19</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>a. piperacillin-tazobaktam 4g x 41, 2, 3, 4, 5, 6
b. cefotaxim 2g x 3-41, 2, 3, 4, 5, 6 + metronidazol 500mg x 38
c. meropenem 1g x 3-41, 2, 3, 4, 5, 6 alt. imipenem 1g x 3-41, 2, 3, 4, 5, 6</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>a. cefotaxim 3g x 41, 2, 4, 5, 7 + ampicillin 3g x 4
b. meropenem 2g x 31, 2, 4, 5, 7 Vid misstanke om infektion med pneumokocker med nedsatt känslighet för penicillin, t.ex. vid infektion förvärvad utomlands
ge tillägg med något
av följande tre alt: (i) vankomycin2 +/-rifampicin8, (ii) linezolid eller (iii) moxifloxacin9</Text>
                    </View>
            </View>
            <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Sjukhusförvärvad</Text>{"\n"}(={">"}48 tim efter ankomst till sjukhus)</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
            </View>
            <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content}>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
            </View>
            <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content}>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
            </View>
            <View style={[styles.row, {backgroundColor: '#FF8080'}]}>
                    <View style={styles.column}>
                        <Text style={styles.content}>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
                    <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                        <Text style={styles.content}>Lorem Ipsum</Text>
                    </View>
            </View>

            <View>
                <Text style={styles.footnotes}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Fotnötter</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>1. Betalaktamantibiotika:</Text> Vid septisk chock skall, på grund av ökad distributionsvolym, alltid ökad antibiotikaexponering eftersträvas: ge höga och täta doser (minst var 6:e timma). Ge dessutom en extra laddnings- dos efter 3 timmar (dos 2). Observera att behov av höga täta doser oftast gäller även vid kontinuerlig hemodialys/filtration. Ökad exponering kan också uppnås genom förlängd infusion (3-4 tim) eller kontinuerlig infusion. Monitorera betalaktamkoncentration.</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>2. Vankomycin:</Text> Tilläggsbehandling med vankomycin vid misstanke om MRSA eller misstanke om vårdrelaterad KNS infektion. Ge laddningsdos (30mg/kg max 2 g), härefter 15mg/kg x3 vid normal njurfunktion. Monitorera vankomycinkoncentration. Vid nedsatt njurfunktion, kontakta infektionsläkare (ökat dosintervall och ev. lägre laddningsdos). Kontinuerlig infusion: se ssk PM.</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>3. Aminoglykosid:</Text> Tilläggsbehandling med aminoglykosid kan övervägas vid sepsis och septisk chock om infektionen misstänks orsakas av gramnegativa bakterier (fr.a. vid urinvägsfokus) och inte kontraindikationer föreligger. Amikacin ges i laddningsdos 25-30 mg/kg, tobramycin laddningsdos 6-7 mg/kg. De högre doserna vid septisk chock, men kan ändå ge ottillräcklig effekt varför aminoglykosider ej skall ges som spektrumvidgning dvs monoterapi utanför urinvägarna. Vid BMI > 30 bör lägre dos/kg kroppsvikt ges enligt formeln ”adjusted body weight” ABW=IBW+0,4x (TBW-IBW). Ta serumkoncentration 8 och 24 tim efter given dos, som underlag för ev fortsatt behandling med aminoglykosid som bör ske i samråd med infektionsbakjour. Amikacin rekommenderas vid misstanke om ESBL-producerande Enterobacterales och tobramycin vid pseudomonasinfektioner.</Text>
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>- Kontraindikationer till aminoglykosider:</Text> kronisk njurfunktionsnedsättning, andra nefrotoxiska droger, akut anuri, känd hörselnedsättning eller hereditet för hörselnedsättning; undvik aminoglykosid i dessa fall och ge betalaktamantibiotika med bredast möjliga spektrum (t.ex. meropenem).</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>4. Misstanke om resistenta bakterier:</Text> ESBL: meropenem. MRSA/MRSE: tillägg av vankomycin alt. linezolid. MDR P. aeruginosa/Acinetobacter spp: kontakta infektionsbakjouren.</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>5. Dosering vid nedsatt njurfunktion:</Text> Vid allvarliga infektioner: Ge laddningsdos av betalaktamantibiotika som vid normal njurfunktion, kontakta infektionsbakjour för fortsatt dosregim, undvik underbehandling, monitorera betalaktam-
koncentration. Följ nationellt kunskapsunderlag: https://www.sls.se/raf/ - Dosering vid dialys. Undvik: aminoglykosid, imipenem/cilastatin (pga ackumulering av cilastatin)..</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>6. Echinocandin</Text> skall övervägas vid riskfaktorer för invasiv candida; caspofungin8 70 mg laddningsdos därefter 70 mg ({">"}80 kg) eller 50 mg ({"<"} 80 kg) dagl.eller anidulafungin 200 mg laddningsdos därefter 100 mg dagl.</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>7. Herpesencephalit:</Text> Dosering av aciklovir skall baseras på idealvikt och alltid anpassas till njurfunktionen (undvik överdosering till äldre). Upprätthåll adekvat hydrering. Monitorera aciklovirkoncentration. Samråd alltid med infektionsbakjour. Vid misstanke om neurotoxicitet och eller nefrotoxicitet ta akut aciklovir och metabolitkoncentration (CMMG) + kontakta infektion och njurmedicinbakjour för ställningstagande till dialys.</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>8. Patient med allvarlig leverfunktionsnedsättning:</Text> dosreduktion av klindamycin, metronidazol, tigecyklin samt ev caspofungin och rifampicin. Samråd med infektionsbakjour.</Text>
                    {"\n"}
                    {"\n"}
                    <Text><Text style={{fontWeight: 'bold'}}>9. Kinoloner (ciprofloxacin, levofloxacin, moxifloxacin)</Text> skall ej ges vid aortaaneurysm, övriga kontraindikationer - se FASS.</Text>
                </Text>
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        borderTopWidth: 1,
        backgroundColor: '#AFFFBC', // Example header color
        padding: 20,
    },
    rowHead: {
        backgroundColor: '#AFD4FF', // Example header color
    },
    headerText: {
        color: '#1F4D83',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 0.5,
      borderColor: '#1F4D83',
      backgroundColor: '#AFD4FF',
    },
    column: {
      flex: 1,
      borderWidth: 0.5,
      borderColor: '#1F4D83',
    },
    title: {
        color: '#1F4D83',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 0,
        margin: 0,
        textAlign: 'center',
    },
    title2: {
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        color: '#1F4D83',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 0,
        margin: 0,
        textAlign: 'center',
    },
    super: {
        fontSize: 8, // Consider a library for footnotes
    },
    content: {
        color: '#1F4D83',
        padding: 5,
        fontSize: 16,
      // Content text style
    },
    infection: {
        color: '#1F4D83',
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    footnotes: {
      padding: 10,
    },
    footnote: {
      fontSize: 12, // Example footnote text size
    },
  });

export default RedCard;
