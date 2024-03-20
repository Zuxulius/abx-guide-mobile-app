import { View, Dimensions, StyleSheet, ScrollView, Text, } from 'react-native';
import Pdf from 'react-native-pdf';

function PdfViewer({ route }) {

    const { pdfName } = route.params;

    let pdfSource;
    switch(pdfName) {
        case 'greenCard':
            pdfSource = require('../assets/greenCard.pdf');
            break;
        case 'redCard':
            pdfSource = require('../assets/redCard.pdf');
            break;
        default:
            pdfSource = require('../assets/redCard.pdf');
            break;
    }

    return (
        <View style={styles.container}>
            <Pdf
            source={pdfSource}
            horizontal={true}
            trustAllCerts={false} // Needed for android error
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
            }}
            style={styles.pdf}
            >
            </Pdf>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default PdfViewer;
