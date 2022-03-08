
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Divider, Layout, Tab, TabBar, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { NextRaces } from './components/Races';
import { FilterBar } from './components/Races/filterBar';

function HomeScreen() {
  return (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Races</Text>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: "80%"}}>
      <NextRaces />
    </Layout>
  </Layout>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
