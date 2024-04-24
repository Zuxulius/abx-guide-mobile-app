import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import { useState, useRef } from 'react';
import Modal from "react-native-modal";
import { useModalVisibility } from './ModalVisibilityContext';
import {
    wrapScrollView, // simple wrapper, no config
    useScrollIntoView, // access hook for imperative usage
  } from 'react-native-scroll-into-view';

const options = {
    // options for scrollIntoView
    align: 'top',
};

// Wrap the original ScrollView
const CustomScrollView = wrapScrollView(ScrollView);

function RedCard2() {
    return (
        <CustomScrollView>
            <RedCard2Content></RedCard2Content>
        </CustomScrollView>
)
}

function RedCard2Content() {

    const [footnotesVisible, setFootnotesVisible] = useState(false);

    const { redNavVisible } = useModalVisibility();
    const { toggleGreenNavVisibility, toggleRedNavVisibility } = useModalVisibility();

    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section6 = useRef();
    const footnoteRef = useRef();

    const scrollIntoView = useScrollIntoView();

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
                    <View ref={section1} style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.content}>
                            <Text style={{fontWeight: 'bold'}}>Initial antibiotikabehandling</Text> - dosering vid normal vikt, lever- och njurfunktion, icke gravida.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                            <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                                <Text style={styles.infection}>Sepsis med okänt fokus</Text>
                            </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad</Text></Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                +/- metronidazol 500mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                                {"\n"}
                                {"\n"}
                                b. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                c. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                </Text>
                            </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Sjukhusförvärvad</Text>{"\n"}(={">"}48 tim efter ankomst till sjukhus)</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                b. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                </Text>
                            </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Neutropeni</Text> {"\n"}(neutrofila {"< 0,5"})</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2,3,4,5,6</Text>
                                {"\n"}
                                {"\n"}
                                b. meropenem 1g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                c. ceftazidim 2g x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                + klindamycin 600-(900)mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                                </Text>
                            </View>
                    </View>
                    <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                    <Text style={{fontWeight: 'bold'}}>Allvarlig allergi mot betalaktamantibiotika</Text>{"\n"}
                                    Observera att vid pc-allergi
                                    kan i många fall meropenem övervägas - se korsallergitabell
                                    Om testdos av meropenem bedöms nödvändigt – ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos.
                                </Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                klindamycin 600-(900)mg x 3 <Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2, 3, 4, 5, 6, 8</Text>
                                {"\n"}
                                + ciprofloxacin 400mg x 2-3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                {"\n"}
                                + aminoglykosid<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>3, 5</Text>
                                </Text>
                            </View>
                        </View>
                        <View ref={section6} style={[styles.row, {backgroundColor: '#FF8080'}]}>
                                <View style={styles.column}>
                                    <Text style={styles.content}>
                                        <Text style={{fontWeight: 'bold'}}>TÄNK PÅ</Text>
                                        {"\n"}
                                        Konsultera Infektionskonsult/bakjour vid allvarliga och komplicerade infektioner
                                    </Text>
                                </View>
                                <View style={[styles.column, {backgroundColor: 'whitesmoke'}]}>
                                    <Text style={styles.content}>
                                    {'\u25CF'} <Text style={{fontWeight: 'bold'}}>Urosepsis:</Text>
                                    {"\n"}
                                    a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5 ,</Text>
                                    {"\n"}
                                    b. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                    {"\n"}
                                    c. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                    {"\n"}
                                    d. imipenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                    {"\n"}
                                    {"\n"}{'\u25CF'} <Text style={{fontWeight: 'bold'}}>Nekrotiserande hud- och mjukdels- infektion (myosit/fasciit):</Text> meropenem 1g
                                    x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                    {"\n"}
                                    + klindamycin 600-(900)mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                                    {"\n"}
                                    + ev.i.v immunglobulin
                                    {"\n"}
                                    {"\n"}{'\u25CF'} <Text style={{fontWeight: 'bold'}}>Endokardit</Text> hos patient med klaffsjukdom eller blåsljud
                                    {"\n"}
                                    {"\n"}{'\u25CF'} <Text style={{fontWeight: 'bold'}}>Malaria</Text> Afrika/Asien/Sydamerika
                                    </Text>
                                </View>
                        </View>
                        {/* PNEUMONI */}
                        {/* PNEUMONI */}
                        {/* PNEUMONI */}
                        {/* PNEUMONI */}
                        <View ref={section2} style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                <Text style={{fontWeight: 'bold'}}>Initial antibiotikabehandling</Text> - dosering vid normal vikt, lever- och njurfunktion, icke gravida.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                                <Text style={styles.infection}>Pneumoni</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad</Text></Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                b. meropenem 1gx3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                +
                                {"\n"}
                                {"\n"}
                                azitromycin 500mgx1 alt. erytromycin 1gx3-(4)
                                {"\n"}
                                {"\n"}
                                eller
                                {"\n"}
                                {"\n"}
                                moxifloxacin 400mgx1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text> alt. levofloxacin 750 mg x1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Sjukhusförvärvad</Text>{"\n"}(={">"}48 tim efter ankomst till sjukhus)</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                b. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                +
                                {"\n"}
                                {"\n"}
                                ciprofloxacin 400mg x 2-3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text> alt.
                                {"\n"}
                                (om cipro-resistens) aminoglykosid<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>3, 5</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Neutropeni</Text> {"\n"}(neutrofila {"< 0,5"})</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a.piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                b.meropenem 1g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5</Text>
                                {"\n"}
                                {"\n"}
                                +
                                {"\n"}
                                ciprofloxacin 400 mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text> (P. aeruginosa, Legionella spp, men ej mykoplasma) eller moxifloxacin 400mgx1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text> alt.
                                {"\n"}
                                levofloxacin 750 mgx1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text> (Legionella spp, mykoplasma men ej P. aeruginosa)
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                    <Text style={{fontWeight: 'bold'}}>Allvarlig allergi mot betalaktamantibiotika</Text>{"\n"}
                                    Observera att vid pc-allergi
                                    kan i många fall meropenem övervägas - se korsallergitabell
                                    Om testdos av meropenem bedöms nödvändigt – ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos.
                                </Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. klindamycin 600-(900)mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2, 3, 4, 5, 8</Text>
                                {"\n"}
                                + moxifloxacin 400mg x 1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                {"\n"}
                                alt. levofloxacin 750mg x 1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text> (samhällsförvärvad)
                                {"\n"}
                                {"\n"}
                                b. klindamycin 600-(900)mg x 3 <Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2, 3, 4, 5, 8</Text>
                                {"\n"}
                                + ciprofloxacin 400mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                {"\n"}
                                +/- aminoglykosid<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>3</Text> (sjukhusförvärvad/ misstanke om P. aeruginosa)
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.row, {backgroundColor: '#FF8080'}]}>
                                <View style={styles.column}>
                                    <Text style={styles.content}>
                                        <Text style={{fontWeight: 'bold'}}>TÄNK PÅ</Text>
                                        {"\n"}
                                        Konsultera Infektionskonsult/bakjour vid allvarliga och komplicerade infektioner
                                    </Text>
                                </View>
                                <View style={[styles.column, {backgroundColor: 'whitesmoke'}]}>
                                    <Text style={styles.content}>
                                    {'\u25CF'} Legionella: utlandsresa, immunsuppression, kronisk lungsjukdom
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Pneumocystis (P. jirovecii) och aspergillus hos immunsupprimerade
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Kombinationsbehandling högdosbetalaktam<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1</Text> och ev. ciprofloxacin (400 mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>) vid misstanke om pseudomonas
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Tuberkulos hos äldre, immigranter, etyliker, immunsupprimerade, långdraget förlopp
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Influensa: Tamiflu 75mg x 2 p.o.
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Covid: antiviral behandling
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Kortison (infektionskonsult): covid, pneumocystis, mycoplasma (IVAkrävande) och ev övriga agens vid svår sjukdom
                                    </Text>
                                </View>
                        </View>
                        {/* BUKINFEKTION */}
                        {/* BUKINFEKTION */}
                        {/* BUKINFEKTION */}
                        {/* BUKINFEKTION */}
                        {/* BUKINFEKTION */}
                        <View ref={section3} style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                <Text style={{fontWeight: 'bold'}}>Initial antibiotikabehandling</Text> - dosering vid normal vikt, lever- och njurfunktion, icke gravida.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                                <Text style={styles.infection}>Bukinfektion</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad</Text></Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                b. cefotaxim 2g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text> + metronidazol 500mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>
                                {"\n"}
                                {"\n"}
                                c. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text> alt. imipenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Sjukhusförvärvad</Text>{"\n"}(={">"}48 tim efter ankomst till sjukhus)</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                b. meropenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text> alt.
                                {"\n"}
                                imipenem 1g x 3-4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                + echinocandin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>6, 8</Text> (misstanke om invasiv candida)
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Neutropeni</Text> {"\n"}(neutrofila {"< 0,5"})</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. meropenem 1g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text> alt. imipenem 1g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                b. piperacillin-tazobaktam 4g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 3, 4, 5, 6</Text>
                                {"\n"}
                                {"\n"}
                                + echinocandin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>6, 8</Text> (misstanke om invasiv candida)
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                    <Text style={{fontWeight: 'bold'}}>Allvarlig allergi mot betalaktamantibiotika</Text>{"\n"}
                                    Observera att vid pc-allergi
                                    kan i många fall meropenem övervägas - se korsallergitabell
                                    Om testdos av meropenem bedöms nödvändigt – ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos.
                                </Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                klindamycin 600-(900)mg x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2, 3, 4, 5, 6, 8</Text>
                                {"\n"}
                                + ciprofloxacin 400mg x 2-3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                {"\n"}
                                +/- aminoglykosid<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>3</Text> alt.
                                {"\n"}
                                +/- tigecyklin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text> 100 mg i laddn.dos följt av 50 mgx2 (infektionskonsult)
                                {"\n"}
                                {"\n"}
                                +
                                {"\n"}
                                echinocandin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>6, 8</Text> (vid misstanke om invasiv candida)
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.row, {backgroundColor: '#FF8080'}]}>
                                <View style={styles.column}>
                                    <Text style={styles.content}>
                                        <Text style={{fontWeight: 'bold'}}>TÄNK PÅ</Text>
                                        {"\n"}
                                        Konsultera Infektionskonsult/bakjour vid allvarliga och komplicerade infektioner
                                    </Text>
                                </View>
                                <View style={[styles.column, {backgroundColor: 'whitesmoke'}]}>
                                    <Text style={styles.content}>
                                    {'\u25CF'} Tidig Source control: dränera abscess
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Invasiv candida: långvarig IVA-vård, neutropeni, tarmperforation, kontinuerlig eller intermittent dialys,
                                    caspofungin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>6, 8</Text> eller anidulafungin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>6</Text>
                                    </Text>
                                </View>
                        </View>
                        {/* AKUT BAKTERIELL MENINGIT (ABM) */}
                        {/* AKUT BAKTERIELL MENINGIT (ABM) */}
                        {/* AKUT BAKTERIELL MENINGIT (ABM) */}
                        {/* AKUT BAKTERIELL MENINGIT (ABM) */}
                        {/* AKUT BAKTERIELL MENINGIT (ABM) */}
                        {/* AKUT BAKTERIELL MENINGIT (ABM) */}
                        <View ref={section4} style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                <Text style={{fontWeight: 'bold'}}>Initial antibiotikabehandling</Text> - dosering vid normal vikt, lever- och njurfunktion, icke gravida.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, {backgroundColor: '#FFCAD0'}]}>
                                <Text style={styles.infection}>Akut bakteriell meningit (ABM)</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Samhällsförvärvad</Text></Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                a. cefotaxim 3g x 4<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 4, 5, 7</Text> + ampicillin 3g x 4
                                {"\n"}
                                {"\n"}
                                b. meropenem 2g x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 4, 5, 7</Text>
                                {"\n"}
                                Vid misstanke om infektion med pneumokocker med nedsatt känslighet för penicillin, t.ex. vid infektion förvärvad utomlands
                                ge tillägg med något
                                av följande tre alt: (i) vankomycin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2</Text> +/-rifampicin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>8</Text>, (ii) linezolid eller (iii) moxifloxacin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Sjukhusförvärvad</Text>{"\n"}(={">"}48 tim efter ankomst till sjukhus)</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                meropenem 2g x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 5</Text>
                                {"\n"}
                                + vankomycin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2</Text> alt linezolid 600 mg x 2
                                {"\n"}
                                {"\n"}
                                Ovanstående avser postoperativ och posttraumatisk meningit
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}><Text style={{fontWeight: 'bold'}}>Neutropeni</Text> {"\n"}(neutrofila {"< 0,5"})</Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                meropenem 2g x 3<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>1, 2, 4, 5, 7</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.content}>
                                    <Text style={{fontWeight: 'bold'}}>Allvarlig allergi mot betalaktamantibiotika</Text>{"\n"}
                                    Observera att vid pc-allergi
                                    kan i många fall meropenem övervägas - se korsallergitabell
                                    Om testdos av meropenem bedöms nödvändigt – ge omgående alternativt preparat och om ingen reaktion på testdos, ge meropenem i behandlingsdos.
                                </Text>
                            </View>
                            <View style={[styles.column, {backgroundColor: '#DCEAFF'}]}>
                                <Text style={styles.content}>
                                moxifloxacin 400mg x 1<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>9</Text>
                                {"\n"}
                                {"\n"}
                                + vankomycin<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>2</Text>
                                {"\n"}
                                {"\n"}
                                +/-
                                {"\n"}
                                TMP/SMX 5mg/kg x 3, max 30 ml x3 (för listeriatäckning)
                                {"\n"}
                                {"\n"}
                                Observera att i flertalet fall med anamnes på pc-allergi kan meropenem ges (se tabell korsallergi).
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.row, {backgroundColor: '#FF8080'}]}>
                                <View style={styles.column}>
                                    <Text style={styles.content}>
                                        <Text style={{fontWeight: 'bold'}}>TÄNK PÅ</Text>
                                        {"\n"}
                                        Konsultera Infektionskonsult/bakjour vid allvarliga och komplicerade infektioner
                                    </Text>
                                </View>
                                <View style={[styles.column, {backgroundColor: 'whitesmoke'}]}>
                                    <Text style={styles.content}>
                                    {'\u25CF'} Tbc-meningit hos immigranter, immunsupprimerade och ovaccinerade
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Svampmeningit hos immunsupprimerade
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Herpesencephalit: förvirring. fokalsymtom, virusgenes (aciklovir 10mg/kg x 3)<Text style={styles.super} onPress={() => setFootnotesVisible(true)}>7</Text>
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Steroider vid samhällsförv. ABM (betametason 8mg x 4)
                                    {"\n"}
                                    {"\n"}{'\u25CF'} Antibiotikabehandling utan fördröjning - ej datortomografi före första antibiotikadosen
                                    </Text>
                                </View>
                        </View>
                    {/* FOOTNOTES */}
                    {/* FOOTNOTES */}
                    {/* FOOTNOTES */}
                    {/* FOOTNOTES */}
                    {/* FOOTNOTES */}
                    <View>
                        <Text ref={footnoteRef} style={styles.footnotes}>
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
                                <Text style={{fontWeight: 'bold', fontSize: 18}}>Fotnötter</Text>
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
                        </ScrollView>
                    </Modal>
                    <Modal
                    style={{width: '50%', backgroundColor: 'whitesmoke', marginLeft: '45%'}}
                    backdropOpacity={0.4}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                    isVisible={redNavVisible}
                    onBackdropPress={toggleRedNavVisibility}
                    onRequestClose={() => { toggleRedNavVisibility
                        ;
                    }}>
                        <ScrollView>
                            <View>
                                <Pressable style={styles.navScrollButton}
                                onPress={() => scrollIntoView(section1.current, options)}
                                >
                                    <Text style={{fontWeight: 'bold'}}>Sepsis med okänt fokus</Text>
                                </Pressable>
                                <Pressable style={styles.navScrollButton}
                                onPress={() => scrollIntoView(section6.current, options)}
                                >
                                    <Text style={{fontWeight: 'bold'}}>Urosepsis & Myosit/Fasciit</Text>
                                </Pressable>
                                <Pressable style={styles.navScrollButton}
                                onPress={() => scrollIntoView(section2.current, options)}
                                >
                                    <Text style={{fontWeight: 'bold'}}>Pneumoni</Text>
                                </Pressable>
                                <Pressable style={styles.navScrollButton}
                                onPress={() => scrollIntoView(section3.current, options)}
                                >
                                    <Text style={{fontWeight: 'bold'}}>Bukinfektion</Text>
                                </Pressable>
                                <Pressable style={styles.navScrollButton}
                                onPress={() => scrollIntoView(section4.current, options)}
                                >
                                    <Text style={{fontWeight: 'bold'}}>Akut bakteriell meningit (ABM)</Text>
                                </Pressable>
                                <Pressable style={styles.navScrollButton}
                                onPress={() => scrollIntoView(footnoteRef.current, options)}
                                >
                                    <Text style={{fontWeight: 'bold'}}>Footnotes</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </Modal>
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
      justifyContent: 'space-between',
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
    infection: {
        color: '#1F4D83',
        padding: 5,
        fontSize: 16,
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    footnotes: {
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
    navScrollButton: {
        borderWidth: 1,
        backgroundColor: '#FFCAD0',
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 5,
        display: 'flex',
        alignItems: 'center',
    }
  });

export default RedCard2;
