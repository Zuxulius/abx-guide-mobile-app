import { View, StyleSheet, ScrollView, Text, } from 'react-native';

function greenCard() {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Samhällsförvärvad Urosepsis - Pyelonefrit - nedre afebril UVI</Text>
            </View>

            {/* Row 1 */}
            <View style={styles.row}>

            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <Text style={styles.content}>
                <Text style={{fontWeight: 'bold'}}>Urosepsis:</Text> <Text style={styles.super}>a,b,c,d,e,f</Text>
                {"\n"}{"\n"}{"\n"}
                <Text style={{fontWeight: 'bold'}}>septisk chock:</Text>
                {"\n"}{"\n"}
                + ge en extra dos betalaktam efter 3-4 tim
                {"\n"}{"\n"}
                + tillägg av aminoglykosidf, fr.a. om ej val av karbapenem: amikacin (ESBL- producerande Enterobacterales) alt. tobramycin (Pseudomonas aeruginosa).
                </Text>
            </View>

            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Förstahandsval</Text>
                </View>
                <Text style={styles.content}>
                a. cefotaxim 2gx3-4: god effekt på > 90% av E. coli och Klebsiella pneumoniae undantaget ESBL, sämre/saknar effekt på Enterobacterales med kromosomal inducerbar resistens (Enterobacter spp, Citrobacter spp mfl), saknar effekt på Enterococcus faecalis och Pseudomonas aeruginosa).
                {"\n"}{"\n"}
                - Tillägg av aminoglykosidf vid chock - detta kan även övervägas för spektrumvidgning till patient utan septisk chock efter konsultation med infektionsläkare.
                {"\n"}{"\n"}
                b. piperacillin/tazobaktam 4gx4: effekt på ca 95 % av E. coli och Klebsiella pneumoniae, varierande effekt på ESBL, sämre/saknar effekt på Enterobacterales, med kromosomal inducerbar resistens (Enterobacter spp, Citrobacter spp mfl), god effekt på Enterococcus faecalis och vanligen god effekt på Psedomonas aeruginosa.
                {"\n"}{"\n"}
                - Tillägg av aminoglykosidf vid chock - detta kan även övervägas för spektrumvidgning till patient utan septisk chock efter konsultation med infektionsläkare.
                </Text>
            </View>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Alternativ<Text style={styles.super}>1</Text></Text>
                </View>
                <Text style={styles.content}>
                c. meropenem 1gx 3-4: effekt på 99% av ESBL och > 95% av Enterobacterales, vanl god effekt på Pseudomonas aeruginosa, ej effekt på Enterococcus faecalis.
                {"\n"}{"\n"}
                d. imipenem 1gx3-4: effekt på 99% av ESBL och > 95% av Enterobacterales dock saknas oftast effekt på Morganella, Proteus och Providencia spp, god effekt på Enterococcus faecalis, vanligen god effekt på Pseudomonas aeruginosa
                {"\n"}{"\n"}{"\n"}
                Se även:
                {"\n"}{"\n"}
                Sv.Infektionsläkareföreningen, SILF
                {"\n"}{"\n"}
                VP UVI (www.infektion.net) och
                {"\n"}{"\n"}
                Stramaappen (www.strama.se).
                </Text>
                </View>
            </View>

            {/* Row 2 */}
            <View style={styles.row}>

            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <Text style={styles.content}>
                    <Text style={{fontWeight: 'bold'}}>Febril urinvägsinfektion hos kvinnor och män (pyelonefrit)<Text style={styles.super}> a,b,c,d,e,f</Text></Text>
                </Text>
            </View>

            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Förstahandsval</Text>
                </View>
                <Text style={styles.content}>
                    <Text style={{fontWeight: 'bold'}}>Sjukhusvård</Text>
                    {"\n"}{"\n"}
                    Normalpatienten (E. coli, Klebsiella pneumoniae) utan allvarlig samsjuklighet och utan misstanke om ESBL
                    {"\n"}
                    a. cefotaxim 1g x 3
                    {"\n"}
                    b. piperacillin-tazobaktam 4gx3-4
                    {"\n"}{"\n"}
                    Misstanke om ESBL, Enterobacterales med kromosomal inducerbar resistens (Enterobacter spp, Citrobacter spp mfl)
                    {"\n"}
                    a.meropenem 1gx3
                    {"\n"}
                    b.imipenem 1gx3 (ej Morganella, Proteus, Providencia)
                    {"\n"}{"\n"}
                    Misstanke om Enterococcus faecalis
                    {"\n"}
                    a.piperacillin/tazobaktam 4gx4
                    {"\n"}
                    b.imipenem 1gx4 (endast vid samtidig misstanke om ESBL)
                    {"\n"}{"\n"}
                    Misstanke om Pseudomonas aeuginosa
                    {"\n"}
                    a. piperacillin/tazobaktam 4gx4
                    {"\n"}
                    b. meropenem 1gx4 c. imipenem 1gx4
                </Text>
            </View>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Alternativ<Text style={styles.super}>1</Text></Text>
                </View>
                <Text style={styles.content}>
                <Text style={{fontWeight: 'bold'}}>Poliklinisk handläggning:</Text>
                {"\n"}
                opåverkad patient, ej aortaaneurysm, ej riskfaktorer för resistens, ej misstanke om enterokocker, T. ciprofloxacin 500mg x 2: kvinnor 7 dygn, män 14 dygn
                {"\n"}{"\n"}
                + ev. i.v. singeldos ceftriaxon 2g (vid misstanke om kinolonresistens)
                {"\n"}
                eller
                {"\n"}
                ertapenem 1g (vid misstanke om ESBL)
                {"\n"}{"\n"}
                OBS! Uppföljning inom 24 tim för att utesluta behandlingssvikt.
                {"\n"}{"\n"}{"\n"}
                Se även:
                {"\n"}{"\n"}
                Sv.Infektionsläkareföreningen, SILF
                {"\n"}{"\n"}
                VP UVI (www.infektion.net) och
                {"\n"}{"\n"}
                Stramaappen (www.strama.se).
                </Text>
                </View>
            </View>

            {/* Row 3 */}
            <View style={styles.row}>

            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <Text style={styles.content}>
                    <Text style={{fontWeight: 'bold'}}>Akut cystit (nedre afebril UVI) (kvinnor och män)<Text style={styles.super}> a,d</Text></Text>
                </Text>
            </View>

            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Förstahandsval</Text>
                </View>
                <Text style={styles.content}>
                T. nitrofurantoin 50mg x 3, (ej vid eGFR under 40 ml/ min pga låga urinkonc) beh-tid: kv. 5 dygn män 7 dygn
                {"\n"}{"\n"}
                alt.
                {"\n"}
                T. pivmecillinam 200mg x 3, beh-tid: kv. 5 dygn, män 7 dygn
                </Text>
            </View>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title}>Alternativ<Text style={styles.super}>1</Text></Text>
                </View>
                <Text style={styles.content}>
                T. trimetoprim 160mg x 2
                {"\n"}{"\n"}
                Se även:
                {"\n"}{"\n"}
                Sv.Infektionsläkareföreningen, SILF
                {"\n"}{"\n"}
                VP UVI (www.infektion.net) och
                {"\n"}{"\n"}
                Stramaappen (www.strama.se).
                </Text>
                </View>
            </View>
            <View>
                <Text style={styles.footnotes}>
                <Text style={{fontWeight: 'bold'}}>Att tänka på vid urosepsis och febril UVI!</Text>
                {"\n"}{"\n"}

                a. Kolla alltid tidigare odlingsfynd i fr.a. urin och blododlingar och beakta dessa vid val av antibiotika.
                {"\n"}{"\n"}

                b. KAD vid urosepsis
                {"\n"}{"\n"}

                c. Avstängd pyelit - stenanamnes, allmänpåverkad, skall alltid avlastas akut
                {"\n"}{"\n"}

                d. Vid multiresistens, kontakta infektionsbakjour
                {"\n"}{"\n"}

                e. Negativ Nitrit i inkuberad urin: ge vid febril UVI eller urosepsis pip/ tazo för enterokock täckning, alt vid pc-allergi då karbapenem bedöms kunna ges imipenem (se sid 5 korsallergi pc)
                {"\n"}{"\n"}

                f. Aminoglykosid: Tilläggsbehandling med aminoglykosid kan övervägas vid sepsis och septisk chock om infektionen misstänks orsakas av gramnegativa bakterier (fr.a. vid urinvägsfokus) och inte kontra- indikationer föreligger. Amikacin ges i laddningsdos 25-30 mg/kg, tobramycin laddningsdos 6-7 mg/kg. De högre doserna vid septisk chock, men kan ändå ge ottillräcklig effekt varför aminoglykosider ej skall ges som spektrumvidgning dvs monoterapi utanför urinvägarna. Vid BMI > 30 bör lägre dos/kg kroppsvikt ges enligt formeln ”adjusted body weight” ABW=IBW+0,4x (TBW-IBW). Ta serumkoncentration 8 och 24 tim efter given dos, som underlag för ev fortsatt behandling med aminoglykosid, som bör ske i samråd med infektionsbakjour. Amikacin rekommenderas vid misstanke om ESBL-producerande Enterobacterales och tobramycin vid pseudomonasinfektioner.
                {"\n"}
                <Text style={{fontWeight: 'bold'}}>- Kontraindikationer till aminoglykosider:</Text> kronisk njurfunktionsnedsättning, andra nefrotoxiska droger, akut anuri, känd hörselnedsättning eller hereditet för hörselnedsättning; undvik aminoglykosid i dessa fall och ge betalaktamantibiotika med bredast möjliga spektrum (t.ex. meropenem)

                </Text>
            </View>

            {/* Second part */}
            {/* Second part */}
            {/* Second part */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Samhällsförvärvad pneumoni</Text>
            </View>
            <View style={styles.row}>
                <Text style={{textAlign: 'center'}}><Text style={{fontWeight: 'bold'}}>Monitorera respiration, saturation, vitalparametrar (följ NEWS).</Text>
                {"\n"}
                Upprepa klinisk bedömning - vid försämring ompröva omgående antibiotika och vårdnivå</Text>
            </View>
            <View style={styles.row}>
                <Text style={{textAlign: 'center'}}><Text style={{fontWeight: 'bold'}}>Riskfaktorer för allvarligt förlopp och mortalitet:</Text>
                {"\n"}
                1. andningsfrekvens ≥ 30/min, 2. saturation &lt; 90%, 3. BT: syst &lt; 90/diast ≤ 60, 4. konfusion, 5. samsjuklighet, 6. ålder ≥ 65 år
                </Text>
            </View>

            {/* Row titles */}
            <View style={styles.row}>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title2}></Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title2}>Ej livshotande</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title2}>Potentiellt livshotande</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowHead}>
                    <Text style={styles.title2}>Livshotande - Se även Rött Kort -</Text>
                </View>
            </View>
            </View>

            {/* Row 1 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Stark misstanke om pneumokockpneumoni, “normalpatienten” utan allvarlig samsjuklighet och utan misstanke om antibiotikaresistens
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. bensylpc 3 g x 3-4
                {"\n"}{"\n"}
                b. PcV 1 g x 3
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                bensylpenicillin 3 g x 4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. cefotaxim 2g x 3-41, 2, 3, 4, 5
                {"\n"}
                b. meropenem 1gx3-41, 2, 3, 4, 5
                {"\n"}{"\n"}
                +
                azitromycin 500mgx1 iv alt. erytromycin 1gx3(-4 iv)
                {"\n"}
                eller
                moxifloxacin 400mgx1 iv8 alt. levofloxacin 750 mg x1 iv8
                </Text>
            </View>
            </View>

            {/* Row 2 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Misstanke om pneumokocker med nedsatt känslighet för penicillin
                </Text>
            </View>

            <View style={styles.column}>
                <Text style={styles.content}>
                a. T. amoxicillin 1 g x 3
                {"\n"}
                b. cefotaxim 2gx3
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                cefotaxim 2gx3-4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. cefotaxim 2g x 3-41,2,3,4,5
                {"\n"}
                b. meropenem 1gx3-41,2,3,4,5
                {"\n"}
                +
                moxifloxacin 400mg x 1 iv8
                </Text>
            </View>
            </View>

            {/* Row 3 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Misstanke om H. influenzae
                <Text style={{fontSize: 10}}>
                    {"\n"}{"\n"}
                    AB-resistens mkt vanligt (ca 25%): amoxicillin och TMP/SMX
                    {"\n"}
                    AB-resistens vanligt: amoxi/klav (ca15%)
                    {"\n"}
                    AB-resistens förekommer men ovanligt ({"<"}5%): cefotaxim kinolon, tetracyklin
                    {"\n"}{"\n"}
                    Data från Swedres 2021
                </Text>
                </Text>
            </View>

            <View style={styles.column}>
                <Text style={styles.content}>
                a. T. amoxicillin 750 mgx3
                {"\n"}
                b. T. amoxicillin-klavulansyra 875 / 125mg x 3
                {"\n"}
                c. cefotaxim 2gx3
                {"\n"}
                d. T. moxiloxacin 400mgx1^8
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                cefotaxim 2gx3-4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. cefotaxim 2g x 3-41, 2, 3, 4, 5
                {"\n"}
                b. meropenem 1gx3-41, 2, 3, 4, 5
                {"\n"}
                {"\n"}
                +
                {"\n"}
                moxifloxacin 400mgx1 iv8 alt.
                {"\n"}
                levofloxacin 750 mg x1 iv8
                </Text>
            </View>
            </View>

            {/* Row 4 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Misstanke om atypisk genes (ej legionella)
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. T. doxycyklin 200 mg x 1 i 3 dygn följt av 100 mg x 1
                {"\n"}
                b. T. erytromycin (prep./dos se FASS)
                {"\n"}
                c. T. azitromycin 500 mgx1
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. erytromycin 1gx3 iv.
                {"\n"}
                b. azitromycin 500mgx1 iv.
                {"\n"}
                c. moxifloxacin 400mgx1 iv8.
                {"\n"}
                d. levofloxacin 750 mg x1 iv8.
                {"\n"}
                +
                {"\n"}
                bensylpenicillin 3 g x 4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. cefotaxim 2g x 3-41, 2, 3, 4, 5
                {"\n"}
                b. meropenem 1gx3-41, 2, 3, 4, 5
                {"\n"}
                {"\n"}
                +
                {"\n"}
                azitromycin 500mgx1 iv alt.
                {"\n"}
                erytromycin 1gx3(-4) iv
                {"\n"}
                eller
                {"\n"}
                moxifloxacin 400mgx1 iv8 alt.
                {"\n"}
                levofloxacin 750 mg x1 iv8
                </Text>
            </View>
            </View>

            {/* Row 5 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Misstanke om Legionella
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. moxifloxacin 400mgx18
                b. levofloxacin 750 mg x18
                c. T. azitromycin 500 mgx1
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. moxifloxacin 400mgx1 iv8
                b. levofloxacin 750 mg x1 iv8
                c. azitromycin 500mgx1 iv
                +
                bensylpenicillin 3 g x 4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. moxifloxacin 400mgx1 iv8.
                b. levofloxacin 750 mg x1 iv8
                c. azitromycin 500mgx1 iv
                +
                bensylpenicillin 3 g x 4
                </Text>
            </View>
            </View>

            {/* Row 6 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Misstanke om S. aureus tex insjuknande i anslutning till influensasjukdom
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. T amoxicillin-klavulansyra 875 /125mg x 3
                b. cefotaxim 2gx3
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                cefotaxim 2gx3-4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. cefotaxim 2g x 3-41, 2, 3, 4, 5
                b. meropenem 1gx3-41, 2, 3, 4, 5
                +
                moxifloxacin 400mgx1 iv8 alt. levofloxacin 750 mg x1 iv8
                </Text>
            </View>
            </View>

            {/* Row 7 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Allvarlig bakomliggande lungsjukdom vid misstanke om Pseudomonas aeruginosa
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                piperacillin/tazobaktam 4 gx 4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                piperacillin/tazobaktam 4 gx 4
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a.piperacillin/tazobaktam 4g x 41, 2, 3, 4, 5
                b.meropenem 1g x 41, 2, 3, 4, 5
                + ciprofloxacin 400mg x 3 iv8 eller (om cipro-resistens) aminoglykosid3
                </Text>
            </View>
            </View>

            {/* Row 8 */}
            <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.content}>
                Allvarlig allergi mot betalaktamantibiotika
                Observera att vid pc-allergi kan i många fall meropenem övervägas - se korsallergitabell
                Om testdos av meropenem bedöms nödvändigt – ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. T. doxycyklin 200 mg x 1 i 3 dygn följt av 100 mg x 1
                b. T. erytromycin (prep./dos se
                FASS)
                c. T. azitromycin 500 mgx1
                d. T. moxifloxacin 400 mgx18
                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                a. moxifloxacin 400mgx1 iv8 b. levofloxacin 750 mg x1 iv8 c. azitromycin 500mgx1 iv
                +
                inf klindamycin 600 mgx37 iv
                                </Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.content}>
                klindamycin 600-(900)mg x 32, 3, 4, 5, 7 + moxifloxacin 400mg x 1 iv8 alt. levofloxacin 750mg x 1 iv8 (samhällsförvärvad)
                d. klindamycin 600-(900)mg x 3 2, 3, 4, 5, 7 + ciprofloxacin 400mg x 3 iv8
                +/- aminoglykosid3 (sjukhusförvärvad/misstanke om P. aeruginosa)
                </Text>
            </View>
            </View>

            {/* Third part */}
            {/* Third part */}
            {/* Third part */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Övriga samhällsförvärvade bakteriella infektioner Erysipelas, hud- och mjukdelsinfektion, bukinfektion och infektion med oklart fokus</Text>
            </View>

    </ScrollView>
  );
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
      backgroundColor: '#DCEAFF',
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
    footnotes: {
      padding: 10,
    },
    footnote: {
      fontSize: 12, // Example footnote text size
    },
  });

export default greenCard;
