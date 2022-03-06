import { Text } from '@ui-kitten/components';
import React from 'react';

/**
 * Component to hold the movie information.
 * 
 * @Component
 * @param {*} props 
 */
export default function RaceInfoLine(props: any) {
    return(
        <Text category={"p1"}>{props.text}</Text>
    )
}
