import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import Modal from "react-native-modal";
import { useState, useRef, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    wrapScrollView, // simple wrapper, no config
    useScrollIntoView, // access hook for imperative usage
  } from 'react-native-scroll-into-view';
import SectionNav from './SectionNav';
import { useModalVisibility } from './ModalVisibilityContext';


const options = {
    // options for scrollIntoView
    align: 'top',
};

// Wrap the original ScrollView
const CustomScrollView = wrapScrollView(ScrollView);


function GreenCard2() {
    return (
            <CustomScrollView>
                <GreenCard2Content></GreenCard2Content>
            </CustomScrollView>
    )
}

function GreenCard2Content() {

    const { greenNavVisible } = useModalVisibility();
    const { toggleGreenNavVisibility, toggleRedNavVisibility } = useModalVisibility();

    const route = useRoute();
    const { scrollTo } = route.params;

    // Add a ref for each scrollable index
    const sectionHeader1 = useRef();
    const sectionHeader2 = useRef();
    const sectionHeader3 = useRef();

    const firstSubsection1 = useRef();
    const firstSubsection2 = useRef();
    const firstSubsection3 = useRef();
    const firstSubsection4 = useRef();

    const secondSubsection1 = useRef();
    const secondSubsection2 = useRef();
    const secondSubsection3 = useRef();
    const secondSubsection4 = useRef();
    const secondSubsection5 = useRef();
    const secondSubsection6 = useRef();
    const secondSubsection7 = useRef();
    const secondSubsection8 = useRef();
    const secondSubsection9 = useRef();

    const thirdSubsection1 = useRef();
    const thirdSubsection2 = useRef();
    const thirdSubsection3 = useRef();
    const thirdSubsection4 = useRef();

    const footnoteRef = useRef();

    // Should create a map of some sort
    let targetRef;
    if (scrollTo === 'section1') {
        targetRef = sectionHeader1;
    }
    if (scrollTo === 'section2') {
        targetRef = sectionHeader2;
    }
    if (scrollTo === 'section3') {
        targetRef = sectionHeader3;
    }

    const scrollIntoView = useScrollIntoView();

    useEffect(() => {
        if (scrollTo && typeof scrollIntoView === 'function') {
          setTimeout(() => {
            scrollIntoView(targetRef.current, options);
          }, 100);
        }
      }, [scrollTo, scrollIntoView, route, targetRef]);

    const [footnotesVisible, setFootnotesVisible] = useState(false);

    return (
            <ScrollView style={styles.container}>
                <View ref={sectionHeader1} style={{marginTop: 50}}>
                    <Text style={{marginLeft: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'green'}}>
                        Empirisk antibiotikabehandling på akuten av vanliga samhällsförvärvade infektioner 2023
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
                        <Text>
                        Rekommendationerna gäller för icke gravida vuxna med normal vikt, njur- och leverfunktion. Dosera baserat på njur- och leverfunktion, vikt, indikation, svårighetsgrad, ålder, mät antibiotikakoncentration vb.
                        {"\n"}
                        </Text>
                    </Text>
                </View>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Samhällsförvärvad Urosepsis - Pyelonefrit - nedre afebril UVI</Text>
                </View>

                {/* Row 1 */}
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={firstSubsection1} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    <Text style={{fontWeight: 'bold'}}>Urosepsis:</Text> <Text style={[styles.super, {color: 'blue'}]}>a,b,c,d,e,f</Text>
                    {"\n"}{"\n"}{"\n"}
                    <Text style={{fontWeight: 'bold'}}>septisk chock:</Text>
                    {"\n"}{"\n"}
                    + ge en extra dos betalaktam efter 3-4 tim
                    {"\n"}{"\n"}
                    + tillägg av aminoglykosidf, fr.a. om ej val av karbapenem: amikacin (ESBL- producerande Enterobacterales) alt. tobramycin (Pseudomonas aeruginosa).
                    </Text>
                </View>
                <View style={styles.row}>
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
                            <Text style={styles.title} onPress={() => setFootnotesVisible(true)}>Alternativ<Text style={styles.super}>1</Text></Text>
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
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={firstSubsection2} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                        <Text style={{fontWeight: 'bold'}}>Febril urinvägsinfektion hos kvinnor och män (pyelonefrit)<Text style={[styles.super, {color: 'blue'}]}> a,b,c,d,e,f</Text></Text>
                    </Text>
                </View>
                <View style={styles.row}>
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
                            <Text style={styles.title} onPress={() => setFootnotesVisible(true)}>Alternativ<Text style={styles.super}>1</Text></Text>
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
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={firstSubsection3} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                        <Text style={{fontWeight: 'bold'}}>Akut cystit (nedre afebril UVI) (kvinnor och män)<Text style={[styles.super, {color: 'blue'}]}> a,d</Text></Text>
                    </Text>
                </View>
                <View style={styles.row}>
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
                        <Text style={styles.title} onPress={() => setFootnotesVisible(true)}>Alternativ<Text style={styles.super}>1</Text></Text>
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
                <View ref={firstSubsection4} style={[styles.row, {backgroundColor: 'white'}]}>
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
                <View ref={sectionHeader2} style={styles.header}>
                    <Text style={styles.headerText}>Samhällsförvärvad pneumoni</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.content, {textAlign: 'center'}]}><Text style={{fontWeight: 'bold'}}>Monitorera respiration, saturation, vitalparametrar (följ NEWS).</Text>
                    {"\n"}
                    Upprepa klinisk bedömning - vid försämring ompröva omgående antibiotika och vårdnivå</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.content, {textAlign: 'center'}]}><Text style={{fontWeight: 'bold'}}>Riskfaktorer för allvarligt förlopp och mortalitet:</Text>
                    {"\n"}
                    1. andningsfrekvens ≥ 30/min, 2. saturation &lt; 90%, 3. BT: syst &lt; 90/diast ≤ 60, 4. konfusion, 5. samsjuklighet, 6. ålder ≥ 65 år
                    </Text>
                </View>

                {/* Section 1 */}
                <View ref={secondSubsection1} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Stark misstanke om pneumokockpneumoni, “normalpatienten” utan allvarlig samsjuklighet och utan misstanke om antibiotikaresistens
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>
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
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    b. meropenem 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}{"\n"}
                    +
                    azitromycin 500mgx1 iv alt. erytromycin 1gx3(-4 iv)
                    {"\n"}
                    eller
                    moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> alt. levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    </Text>
                </View>
                </View>

                {/* Section 2 */}
                <View ref={secondSubsection2} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Misstanke om pneumokocker med nedsatt känslighet för penicillin
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>
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
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                        a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5</Text>
                        {"\n"}
                        b. meropenem 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5</Text>
                        {"\n"}
                        +
                        moxifloxacin 400mg x 1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                        </Text>
                    </View>
                </View>

                {/* Section 3 */}
                <View ref={secondSubsection3} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Misstanke om H. influenzae
                    <Text style={{fontSize: 14}}>
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
                <View style={styles.row}>
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
                <View style={styles.row}>
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
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    b. meropenem 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    {"\n"}
                    +
                    {"\n"}
                    moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> alt.
                    {"\n"}
                    levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    </Text>
                </View>
                </View>

                {/* Section 4 */}
                <View ref={secondSubsection4} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Misstanke om atypisk genes (ej legionella)
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>

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
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. erytromycin 1gx3 iv.
                    {"\n"}
                    b. azitromycin 500mgx1 iv.
                    {"\n"}
                    c. moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>.
                    {"\n"}
                    d. levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>.
                    {"\n"}
                    +
                    {"\n"}
                    bensylpenicillin 3 g x 4
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    b. meropenem 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
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
                    moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> alt.
                    {"\n"}
                    levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    </Text>
                </View>
                </View>

                {/* Section 5 */}

                <View ref={secondSubsection5} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Misstanke om Legionella
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. moxifloxacin 400mgx1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    b. levofloxacin 750 mg x1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    c. T. azitromycin 500 mgx1
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.content}>
                    a. moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    b. levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    c. azitromycin 500mgx1 iv
                    {"\n"}
                    +
                    bensylpenicillin 3 g x 4
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>.
                    {"\n"}
                    b. levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    c. azitromycin 500mgx1 iv
                    {"\n"}
                    +
                    bensylpenicillin 3 g x 4
                    </Text>
                </View>
                </View>

                {/* Section 6 */}
                <View ref={secondSubsection6} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Misstanke om S. aureus tex insjuknande i anslutning till influensasjukdom
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.content}>
                    a. T amoxicillin-klavulansyra 875 /125mg x 3
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
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    b. meropenem 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    +
                    moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> alt.
                    {"\n"}
                    levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    </Text>
                </View>
                </View>

                {/* Section 7 */}
                <View ref={secondSubsection7} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                    Allvarlig bakomliggande lungsjukdom vid misstanke om Pseudomonas aeruginosa
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>
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
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a.piperacillin/tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    b.meropenem 1g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                    {"\n"}
                    + ciprofloxacin 400mg x 3 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    eller
                    {"\n"}
                    (om cipro-resistens) aminoglykosid<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>3</Text>
                    </Text>
                </View>
                </View>

                {/* Section 8 */}
                <View ref={secondSubsection8} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={[styles.title2, {fontWeight: 'bold'}]}>
                    Allvarlig allergi mot betalaktamantibiotika
                    {"\n"}
                    {"\n"}
                    Observera att vid pc-allergi kan i många fall meropenem övervägas - se korsallergitabell
                    {"\n"}
                    {"\n"}
                    Om testdos av meropenem bedöms nödvändigt – ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos
                    </Text>
                </View>
                <View style={styles.row}>
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
                <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. T. doxycyklin 200 mg x 1 i 3 dygn följt av 100 mg x 1
                    {"\n"}
                    b. T. erytromycin (prep./dos se
                    FASS)
                    {"\n"}
                    c. T. azitromycin 500 mgx1
                    {"\n"}
                    d. T. moxifloxacin 400 mgx1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    a. moxifloxacin 400mgx1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    b. levofloxacin 750 mg x1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    c. azitromycin 500mgx1 iv
                    {"\n"}
                    +
                    {"\n"}
                    inf klindamycin 600 mgx3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>7</Text> iv
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                    klindamycin 600-(900)mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2, 3, 4, 5, 7</Text>
                    {"\n"}
                    + moxifloxacin 400mg x 1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> alt.
                    {"\n"}
                    levofloxacin 750mg x 1 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> (samhällsförvärvad)
                    {"\n"}
                    {"\n"}
                    d. klindamycin 600-(900)mg x 3 <Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2, 3, 4, 5, 7</Text>
                    {"\n"}
                    + ciprofloxacin 400mg x 3 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                    {"\n"}
                    +/- aminoglykosid<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>3</Text> (sjukhusförvärvad/misstanke om P. aeruginosa)
                    </Text>
                </View>
                </View>

                <View ref={secondSubsection9} style={[styles.row, {backgroundColor: 'white'}]}>
                    <Text style={styles.footnotes}>
                    <Text style={{fontWeight: 'bold'}}>Att tänka på!</Text>
                    {"\n"}
                    {'\u25CF'} Mycoplasma, vid epidemier: makrolid alt. doxycyklin inkl. vid smitta av mykoplasma i Sydostasien.
                    {"\n"}
                    {'\u25CF'} Ornitos ( Chlamidophila psittaci) doxycyklin 200 mg x 1.
                    {"\n"}
                    <Text onPress={() => setFootnotesVisible(true)}>{'\u25CF'} Kinoloner<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>: moxifloxacin/levofloxacin/ciprofloxacin observera ej vid</Text>
                    {"\n"}
                    aortaaneurysm, övriga kontraindikationer - se FASS
                    {"\n"}
                    {'\u25CF'} Legionella: utlandsresa, immunsuppression, kronisk lungsjukdom
                    {"\n"}
                    {'\u25CF'} Pseudomonas aeruginosa vid allvarlig underliggande lungsjukdom/ immunsuppression
                    {"\n"}
                    {'\u25CF'} Pneumocystis jirovecii och aspergillus hos immunsupprimerade
                    {"\n"}
                    {'\u25CF'} Influensa: Tamiflu 75 mg x2
                    {"\n"}
                    {'\u25CF'} Covid: antiviral beh. till högrisk
                    {"\n"}
                    {'\u25CF'} Kortison (infektionskonsult): covid, pneumocystis, mycoplasma (IVA-
                    krävande) och ev övriga agens vid svår sjukdom
                    </Text>
                </View>

                {/* Third part */}
                {/* Third part */}
                {/* Third part */}

                <View ref={sectionHeader3} style={styles.header}>
                    <Text style={styles.headerText}>Övriga samhällsförvärvade bakteriella infektioner Erysipelas, hud- och mjukdelsinfektion, bukinfektion och infektion med oklart fokus</Text>
                </View>
                {/* Row 1 */}
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={thirdSubsection1} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <Text style={styles.title2}>
                            <Text style={{fontWeight: 'bold'}}>Erysipelas (Betahemolyserande streptokocker, grupp A,B,C, G)</Text>
                            {"\n"}
                            {"\n"}
                            Ansiktsros - som regel inläggning med intravenös behandling
                            {"\n"}
                            {"\n"}
                            Vid misstanke om livshotande hud- och mjukdelsinfektion - se "rött kort"
                    </Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Förstahandsval</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Alternativ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                            a. bensyl-pc 3g x 3-4
                            {"\n"}
                            b. T. penicillin V 1g x 3(-4)
                            {"\n"}
                            {"\n"}
                            Vid misstanke om blandinfektion med streptokocker och Staphylococcus aureus:
                            {"\n"}
                            {"\n"}
                            c. T pcV 1gx3 + flukloxacillin 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text>
                            {"\n"}
                            d. cefotaxim 2gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text> alt cefuroxim
                            1,5gx3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text>
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                            inf. klindamycin 600mg x 3 iv.<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4,7</Text>
                            {"\n"}
                            K. klindamycin 300mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4,7</Text>
                            {"\n"}
                            {"\n"}
                            Streptokocker grupp A och B > 10% klindamycinresistens hos invasiva isolat (Swedres 2021)
                        </Text>
                    </View>
                </View>

                {/* Row 2 */}
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={thirdSubsection2} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <View>
                        <Text style={styles.title2}>
                        <Text style={{fontWeight: 'bold'}}>Hud- och mjukdelsinfektion (Staphylococcus aureus)</Text>
                        {"\n"}
                        {"\n"}
                        Vid misstanke om livshotande hud- och mjukdelsinfektion - se "rött kort"
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Förstahandsval</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Alternativ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                            a. inf. kloxacillin 2g x 4 iv.<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text>
                            {"\n"}
                            b. T. flukloxacillin 1 g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text>
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                            a. inf. klindamycin 600mg x 3 iv.<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4, 7</Text>
                            {"\n"}
                            b. K. klindamycin 300mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4, 7</Text>
                            {"\n"}
                            c. cefotaxim 2gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text> alt cefuroxim 1,5gx3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>4</Text>
                        </Text>
                    </View>
                </View>

                {/* Row 3 */}
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={thirdSubsection3} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <View>
                        <Text style={styles.title2}>
                        <Text style={{fontWeight: 'bold'}} onPress={() => setFootnotesVisible(true)}>Bukinfektion<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6, 7</Text></Text>
                        {"\n"}
                        {"\n"}
                        Tidig Source control - dränera abscess
                        {"\n"}
                        {"\n"}
                        Vid misstanke om livshotande infektion - se ”rött kort”
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Förstahandsval</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Alternativ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                            a. piperacillin-tazobaktam 4g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5,6,</Text>
                            {"\n"}
                            {"\n"}
                            b. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5,6,</Text>
                            {"\n"}
                            {"\n"}
                            + metronidazol 500mg x 3 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>7</Text>
                            {"\n"}
                            {"\n"}
                            c. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5,6,</Text>
                            {"\n"}
                            {"\n"}
                            d. imipenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5,6,</Text>
                            {"\n"}
                            {"\n"}
                            +
                            {"\n"}
                            {"\n"}
                            echinocandin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>6,7</Text> (vid misstanke om invasiv candida)
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.content}>
                            Allvarlig allergi mot betalaktamantibiotika - se röda kortet och kontakta infektionsbakjour.
                            {"\n"}
                            Observera att vid pc-allergi kan i många fall meropenem övervägas - se korsallergitabell sid 5
                            {"\n"}
                            Om livshotande infektion och testdos av meropenem bedöms nödvändigt - ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos.
                        </Text>
                    </View>
                </View>

                {/* Row 4 */}
                <View style={[styles.rowHead, {borderWidth: 0.5}]}>
                    <Text style={styles.title}>Diagnos</Text>
                </View>
                <View ref={thirdSubsection4} style={[styles.row, {backgroundColor: '#AFFFBC'}]}>
                    <View>
                        <Text style={styles.title2} onPress={() => setFootnotesVisible(true)}>
                        Svår samhällsförvärvad bakteriell infektion med oklart fokus hos patient som saknar samsjuklighet <Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                        {"\n"}
                        {"\n"}
                        Vid misstanke om livshotande hud- och mjukdelsinfektion - se "rött kort"
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Förstahandsval</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.rowHead}>
                            <Text style={styles.title}>Alternativ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.content} onPress={() => setFootnotesVisible(true)}>
                            a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5,</Text>
                            {"\n"}
                            +/- metronidazol 500mg x 3 iv<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>7</Text>
                            {"\n"}
                            {"\n"}
                            b. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5</Text>
                            {"\n"}
                            {"\n"}
                            c. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1,2,3,4,5</Text>
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.content}>
                        Allvarlig allergi mot betalaktamantibiotika - se röda kortet och kontakta infektionsbakjour.
                        {"\n"}
                        Observera att vid pc-allergi kan i många fall meropenem övervägas - se korsallergitabell sid 5
                        {"\n"}
                        Om livshotande infektion och testdos av meropenem bedöms nödvändigt - ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos.
                        </Text>
                    </View>
                </View>

                <View>
                    <Text ref={footnoteRef} style={styles.footnotes}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Fotnötter - pneumoni, erysipelas, hud- och mjukdelsinfektion, bukinfektion och infektion med oklart fokus</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>1. Betalaktamantibiotika:</Text> Vid septisk chock skall, på grund av ökad distributionsvolym, alltid ökad antibiotikaexponering eftersträvas: ge höga och täta doser (minst var 6:e timma). Ge dessutom en extra laddningsdos efter 3 timmar (dos 2). Observera att behov av höga täta doser oftast gäller även vid kontinuerlig hemodialys/filtration. Ökad exponering kan också uppnås genom förlängd infusion (3-4 tim) eller kontinuerlig infusion. Monitore- ra betalaktamkoncentration.</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>2. Vankomycin:</Text> Tilläggsbehandling med vankomycin vid misstanke om MRSA eller misstanke om vårdrelaterad KNS infektion. Ge laddningsdos härefter intermittent dosering alt. kontinuerlig infusion enl. ssk PM. Monitorera vankomycinkoncentration. Vid nedsatt njurfunktion, kontakta infek- tionsläkare.</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>3. Aminoglykosid:</Text> Tilläggsbehandling med aminoglykosid kan övervägas vid sepsis och septisk chock om infektionen misstänks orsakas av gram- negativa bakterier (fr.a. vid urinvägsfokus) och inte kontraindikationer föreligger. Amikacin ges i laddningsdos 25-30 mg/kg, tobramycin laddningsdos 6-7 mg/kg. De högre doserna vid septisk chock, men kan ändå ge ottillräcklig effekt varför aminoglykosider ej skall ges som spektrumvidgning dvs monoterapi utanför urinvägarna. Vid BMI {">"} 30 ges lägre dos/kg kroppsvikt enligt formeln ”adjusted body weight” ABW=IBW+0,4x (TBW-IBW). Ta serum- koncentration 8 och 24 tim efter given dos, som underlag för ev fortsatt behandling med aminoglykosid, som bör ske i samråd med infektionsbakjour. Amikacin rekommenderas vid misstanke om ESBL-producerande Enterobacteriales och tobramycin vid pseudomonasinfektioner.</Text>
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>Kontraindikationer till aminoglykosider:</Text> kronisk njurfunktionsnedsättning, andra nefrotoxiska droger, akut anuri, känd hörselnedsättning eller hereditet för hörselnedsättning; undvik aminoglykosid i dessa fall och ge betalaktamantibiotika med bredast möjliga spektrum (t.ex. meropenem).</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>4. Misstanke om resistenta bakterier:</Text> ESBL: meropenem. MRSA/MRSE: tillägg av vankomycin alt. linezolid. MDR Pseudomonas/Acinetobacter: kontakta infektionsbakjour.</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>5. Dosering vid nedsatt njurfunktion:</Text> Vid allvarliga infektioner: Ge laddningsdos av betalaktamantibiotika som vid normal njurfunktion, kon- takta infektionsbakjour för fortsatt dosregim, undvik underbehandling, monitorera betalaktam-koncentration. Följ nationellt kunskapsunderlag: https://www.sls.se/raf/ - Dosering vid dialys. Undvik: aminoglykosid, imipenem/cilastatin (pga ackumulering av cilastatin).</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>6. Echinocandin</Text> (ska övervägas vid riskfaktorer för invasiv candida; caspofungin 70 mg laddningsdos därefter 70 mg ({">"}80 kg) eller 50 mg ({"<"} 80 kg) dagl. eller anidulafungin 200 mg laddningsdos därefter 100 mg dagl.</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>7. Patient med allvarlig leverfunktionsnedsättning:</Text> dosreduktion av klindamycin, metronidazol, tigecyklin samt ev caspofungin och rifampicin.Samråd med infektionsbakjour.</Text>
                        {"\n"}
                        {"\n"}
                        <Text><Text style={{fontWeight: 'bold'}}>8. Kinoloner (ciprofloxacin, levofloxacin, moxifloxacin)</Text> undvik om möjligt användning vid risk för aortaaneurysm/dissektion och/eller sjukdomstill- stånd med ökad risk för att utveckla hjärtklaffinsufficiens. Se även FASS.</Text>
                    </Text>
                </View>
                <Modal
                style={{margin: '15%', backgroundColor: 'whitesmoke'}}
                backdropOpacity={0.4}
                animationIn={'slideInRight'}
                animationOut={'slideOutRight'}
                isVisible={footnotesVisible}
                onBackdropPress={() => setFootnotesVisible(false)}
                onRequestClose={() => {
                    setFootnotesVisible(false);
                }}>
                <ScrollView>
                    <Text style={styles.modalFootnotes}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Fotnötter - pneumoni, erysipelas, hud- och mjukdelsinfektion, bukinfektion och infektion med oklart fokus</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>1. Betalaktamantibiotika:</Text> Vid septisk chock skall, på grund av ökad distributionsvolym, alltid ökad antibiotikaexponering eftersträvas: ge höga och täta doser (minst var 6:e timma). Ge dessutom en extra laddningsdos efter 3 timmar (dos 2). Observera att behov av höga täta doser oftast gäller även vid kontinuerlig hemodialys/filtration. Ökad exponering kan också uppnås genom förlängd infusion (3-4 tim) eller kontinuerlig infusion. Monitore- ra betalaktamkoncentration.</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>2. Vankomycin:</Text> Tilläggsbehandling med vankomycin vid misstanke om MRSA eller misstanke om vårdrelaterad KNS infektion. Ge laddningsdos härefter intermittent dosering alt. kontinuerlig infusion enl. ssk PM. Monitorera vankomycinkoncentration. Vid nedsatt njurfunktion, kontakta infek- tionsläkare.</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>3. Aminoglykosid:</Text> Tilläggsbehandling med aminoglykosid kan övervägas vid sepsis och septisk chock om infektionen misstänks orsakas av gram- negativa bakterier (fr.a. vid urinvägsfokus) och inte kontraindikationer föreligger. Amikacin ges i laddningsdos 25-30 mg/kg, tobramycin laddningsdos 6-7 mg/kg. De högre doserna vid septisk chock, men kan ändå ge ottillräcklig effekt varför aminoglykosider ej skall ges som spektrumvidgning dvs monoterapi utanför urinvägarna. Vid BMI {">"} 30 ges lägre dos/kg kroppsvikt enligt formeln ”adjusted body weight” ABW=IBW+0,4x (TBW-IBW). Ta serum- koncentration 8 och 24 tim efter given dos, som underlag för ev fortsatt behandling med aminoglykosid, som bör ske i samråd med infektionsbakjour. Amikacin rekommenderas vid misstanke om ESBL-producerande Enterobacteriales och tobramycin vid pseudomonasinfektioner.</Text>
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>Kontraindikationer till aminoglykosider:</Text> kronisk njurfunktionsnedsättning, andra nefrotoxiska droger, akut anuri, känd hörselnedsättning eller hereditet för hörselnedsättning; undvik aminoglykosid i dessa fall och ge betalaktamantibiotika med bredast möjliga spektrum (t.ex. meropenem).</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>4. Misstanke om resistenta bakterier:</Text> ESBL: meropenem. MRSA/MRSE: tillägg av vankomycin alt. linezolid. MDR Pseudomonas/Acinetobacter: kontakta infektionsbakjour.</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>5. Dosering vid nedsatt njurfunktion:</Text> Vid allvarliga infektioner: Ge laddningsdos av betalaktamantibiotika som vid normal njurfunktion, kon- takta infektionsbakjour för fortsatt dosregim, undvik underbehandling, monitorera betalaktam-koncentration. Följ nationellt kunskapsunderlag: https://www.sls.se/raf/ - Dosering vid dialys. Undvik: aminoglykosid, imipenem/cilastatin (pga ackumulering av cilastatin).</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>6. Echinocandin</Text> (ska övervägas vid riskfaktorer för invasiv candida; caspofungin 70 mg laddningsdos därefter 70 mg ({">"}80 kg) eller 50 mg ({"<"} 80 kg) dagl. eller anidulafungin 200 mg laddningsdos därefter 100 mg dagl.</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>7. Patient med allvarlig leverfunktionsnedsättning:</Text> dosreduktion av klindamycin, metronidazol, tigecyklin samt ev caspofungin och rifampicin.Samråd med infektionsbakjour.</Text>
                            {"\n"}
                            {"\n"}
                            <Text><Text style={{fontWeight: 'bold'}}>8. Kinoloner (ciprofloxacin, levofloxacin, moxifloxacin)</Text> undvik om möjligt användning vid risk för aortaaneurysm/dissektion och/eller sjukdomstill- stånd med ökad risk för att utveckla hjärtklaffinsufficiens. Se även FASS.</Text>
                        </Text>
                </ScrollView>
                </Modal>
                <Modal
                style={{width: '50%', backgroundColor: 'whitesmoke', marginLeft: '45%', marginTop: '20%', marginBottom: '10%'}}
                backdropOpacity={0.4}
                animationIn={'slideInRight'}
                animationOut={'slideOutRight'}
                isVisible={greenNavVisible}
                onBackdropPress={toggleGreenNavVisibility}
                onRequestClose={() => { toggleGreenNavVisibility
                    ;
                }}>
                    <ScrollView>
                        <View>
                            <Pressable style={[styles.navScrollButton]}
                            onPress={() => {
                                scrollIntoView(sectionHeader1.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);

                            }}
                            ><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad Urosepsis - Pyelonefrit - nedre afebril UVI</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(firstSubsection1.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);

                            }}
                            ><Text>Urosepsis</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(firstSubsection2.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);

                            }}
                            ><Text>Pyelonefrit</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(firstSubsection3.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);

                            }}
                            ><Text>Akut cystit</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(firstSubsection4.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);

                            }}
                            ><Text>Att tänka på</Text></Pressable>
                        </View>
                        <View>
                            <Pressable style={[styles.navScrollButton]}
                            onPress={() => {
                                scrollIntoView(sectionHeader2.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad Pneumoni</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection1.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Stark misstanke om pneumokockpneumoni, "normalpatienten"</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection2.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);

                            }}
                            ><Text>Misstanke om pneumockocker, nedsatt känslighet penicillin</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection3.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Misstanke om H. influenzae</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection4.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Misstanke om atypisk genes (ej legionella)</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection5.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Misstanke om Legionella</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection6.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Misstanke om S. aureus tex</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection7.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Allvarlig bakomliggande lungsjukdom vid misstanke om Pseudomonas aeruginosa</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection8.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Allvarlig allergi mot betalaktamantibiotika</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(secondSubsection9.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Att tänka på</Text></Pressable>
                        </View>
                        <View>
                            <Pressable style={[styles.navScrollButton]}
                            onPress={() => {
                                scrollIntoView(sectionHeader3.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text style={{fontWeight: 'bold'}}>Övriga samhällsförvärvade bakteriella infektioner</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(thirdSubsection1.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Erysipelas</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(thirdSubsection2.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Hud - och mjukdelsinfektion</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(thirdSubsection3.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Bukinfektion</Text></Pressable>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(thirdSubsection4.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text>Infektion med oklart fokus</Text></Pressable>
                        </View>
                        <View>
                            <Pressable style={styles.navScrollButton}
                            onPress={() => {
                                scrollIntoView(footnoteRef.current, options);
                                toggleGreenNavVisibility(!greenNavVisible);
                            }}
                            ><Text style={{fontWeight: 'bold'}}>Footnotes</Text></Pressable>
                        </View>
                    </ScrollView>
                </Modal>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 50,
    },
    header: {
        borderTopWidth: 1,
        backgroundColor: 'rgba(41, 255, 76, 1)',
        padding: 20,
    },
    rowHead: {
        backgroundColor: '#AFD4FF',
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
        textAlign: 'center',
        minHeight: 60,
        color: '#1F4D83',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 5,
    },
    super: {
        fontSize: 10, // Consider a library for footnotes
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'red',
    },
    content: {
        color: '#1F4D83',
        padding: 5,
        fontSize: 16,
    },
    footnotes: {
        fontSize: 16,
        padding: 10,
        marginBottom: 50,
    },
    modalFootnotes: {
        fontSize: 16,
        marginVertical: '20%',
        marginHorizontal: '10%',
    },
    footnote: {
      fontSize: 12,
    },
    scrollButton: {
        backgroundColor: '#AFFFBC',
        flexBasis: '33.3%',
    },
    scrollButtonText: {
        height: 50,
        textAlign: 'center',
        borderWidth: 1,
        color: 'blue',
        fontWeight: 'bold',
        padding: 5,
    },
    navScrollButton: {
        borderWidth: 1,
        backgroundColor: '#AFFFBC',
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 5,
        display: 'flex',
        alignItems: 'center',
    }
  });

export default GreenCard2;
