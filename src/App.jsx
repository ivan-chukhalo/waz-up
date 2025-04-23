import React from 'react'
import Weather from './components/Weather'
import useTheme from './hooks/useTheme'

const App = () => {

const {theme} = useTheme()

  return (
    <div className={`app`}>
      <Weather/>
    </div>
  )
}

export default App
