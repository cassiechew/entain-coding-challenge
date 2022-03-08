import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { racesCategories } from './constants';

// A bar to handle the filtering of races
export const FilterBar = (props: {
    categorySwitcher: (category: racesCategories) => void,
    selectedIndex: number,
    setSelectedIndex: (index: number) => void
  }) => {
  
  return (
    <BottomNavigation
      selectedIndex={props.selectedIndex}
      onSelect={index => {
        props.setSelectedIndex(index)
        switch(index) {
          case 0:
            props.categorySwitcher(racesCategories.All)
            break;
          case 1:
            props.categorySwitcher(racesCategories.Greyhound)
            break;
          case 2:
            props.categorySwitcher(racesCategories.Harness)
            break;
          case 3:
            props.categorySwitcher(racesCategories.Horse)
            break;   
        }
      }}>
      <BottomNavigationTab title='All' />
      <BottomNavigationTab title='Greyhound'/>
      <BottomNavigationTab title='Harness'/>
      <BottomNavigationTab title='Horse'/>
    </BottomNavigation>
  );
};
