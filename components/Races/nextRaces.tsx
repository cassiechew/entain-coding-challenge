import { Card, Spinner } from '@ui-kitten/components';
import axios, { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Race from './race';
import { StyleSheet } from 'react-native';
import { DataContext } from './context';


enum racesCategories {
  Greyhound = '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  Harness = '161d9be2-e909-4326-8c2c-35ed71fb460b',
  Horse = '4a2788f8-e825-4d36-9894-efd4baf1cfae'
}

/**
 * Non-hook API connection for getting list of races
 * 
 * @param {{method: string, headers: {string: string}}} options 
 */
 export const getNextRaces = async (options?: AxiosRequestConfig) => {
  return await axios.get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10", options)
  .then(r => {
    const raceData = r.data.data.race_summaries
    const formattedData: {id: "", Elem: JSX.Element}[] = r.data.data.next_to_go_ids.map((id: string) => {
      return {id: id, category: raceData[id].category_id, Elem: <Race
        key={raceData[id].race_id}
        id={id}
        meetingName={raceData[id].meeting_name}
        raceNo={raceData[id].race_number}
        startTime={raceData[id].advertised_start.seconds*1000}
      />}
    })
    return formattedData
  })
};

/**
* Hook API connection for getting list of races.
*/
export const useGetNextRaces = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([{id: "", category: "", Elem: <></>}]);
  
  const execute = async () => {
    try {
      setIsLoading(true);
      const races = await getNextRaces();
      setData(races);
      setIsLoading(false)
      return races;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
      isLoading,
      error,
      data,
      setData,
      execute: useCallback(execute, []),
  };
};

/**
* Component for the grid of races that are available
*  
* @Component
*/
export default function NextRaces() {
  // const [races, setRaces] = useState([{id: "", category: "", Elem: <></>}])

  const {
      isLoading,
      data,
      setData,
      execute,
  } = useGetNextRaces();

  const value = { data, setData }

  useEffect(() => {
      try {
          execute();
      } catch(e) {
          console.log(e);
      }
  }, [
      execute,
  ]);
  
  const Render = () => {
    if (!isLoading) {
      return <DataContext.Provider value={value}>
        <DataContext.Consumer>
          {value => value.data.length > 5 ? value.data.slice(0,5).map((item: any, index: number) => {
              return(
                <Card
                  key={index}           
                  style={styles.card}
                >
                  {item.Elem}
                </Card>
              )}
          ) : value.data.map((item: any, index: number) => {
            return(
              <Card
                key={index}           
                style={styles.card}
              >
                {item.Elem}
              </Card>
            )}
          )}
        </DataContext.Consumer>
      </DataContext.Provider>
    }
    else {
      return <Spinner />
    }
  }
  
  return(
      <>
        <Render />
      </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
    minWidth: "80%"
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
