import React from 'react'

export const DataContext = React.createContext({
  data: [{id: "", category: "", Elem: <></>}],
  setData: (newlist: {id: string, category: string, Elem: JSX.Element}[]) => {}
})
