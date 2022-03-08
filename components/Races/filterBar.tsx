import React from 'react';
import { TabBar, Tab } from '@ui-kitten/components';
import { racesCategories } from './constants';

export const FilterBar = (props: {categorySwitcher: (category: racesCategories) => void}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  
  return (
    <TabBar
      selectedIndex={selectedIndex}
      onSelect={index => {
        setSelectedIndex(index)
        switch(index) {
          case 1:
            props.categorySwitcher(racesCategories.All)
            break;
          case 2:
            props.categorySwitcher(racesCategories.Greyhound)
            break;
          case 3:
            props.categorySwitcher(racesCategories.Harness)
            break;
          case 4:
            props.categorySwitcher(racesCategories.Horse)
            break;   
        }
      }}>
      <Tab title='All' />
      <Tab title='Greyhound'/>
      <Tab title='Harness'/>
      <Tab title='Horse'/>
    </TabBar>
  );
};
