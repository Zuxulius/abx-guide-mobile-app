import { View, Dimensions, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

function PdfViewer() {
    return (
        <View style={styles.container}>
            <Pdf
            source={require('./assets/greenCard.pdf')}
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
    )
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
