import Home from './Home.tsx';
import PdfViewer from './PdfViewer.tsx';
import GreenCard from './GreenCard.tsx';
import RedCard from './RedCard.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pdf from 'react-native-pdf';
import Navbar from './Navbar.tsx';
import Menu from './Menu.tsx';
import Checklist from './Checklist.tsx';
import RedCard2 from './RedCard2.tsx';
import GreenCard2 from './GreenCard2.tsx';
import SectionNav from './SectionNav.tsx';
import { ModalVisibilityProvider } from './ModalVisibilityContext.tsx';

const Stack = createNativeStackNavigator();

function App() {
  return (
        <ModalVisibilityProvider>
          <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
              />
              <Stack.Screen
                name="GreenCard"
                component={GreenCard2}
              />
              <Stack.Screen
                name="RedCard"
                component={RedCard2}
              />
              <Stack.Screen
                name="PdfViewer"
                component={PdfViewer}
              />
            </Stack.Navigator>
            <Navbar></Navbar>
            <SectionNav></SectionNav>
          </NavigationContainer>
        </ModalVisibilityProvider>
  )
};

export default App;
