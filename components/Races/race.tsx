import { Layout } from '@ui-kitten/components';
import React from 'react';
import RaceInfo from './raceInfo';

/**
 * Component for showing an individual movie.
 * 
 * @Component
 */
 export default function Race(props: any) {
    return(
        <>
          <RaceInfo info={props} />
        </>
    )
}