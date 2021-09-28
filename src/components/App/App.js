import React, { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Filter from '../Filter/Filter'
import Names from '../Names/Names'
import Info from '../Info/Info'

const App = () => {
  const [filteredVarietals, setFilteredVarietals] = useState([])

  return (
    <main>
      <h1>Pocket Somm</h1>
      <p className='purpose'>Serving up wine varietal guidance and food pairings.</p>
      <p className='key'>E - European countries | OE - Outside Europe</p>
        <Route exact path='/' 
          render={() =>
            <section>
              <p className='directions'>Select a wine varietal to see immediate pairings or refine your current preferences with our selection guide</p>
              <Names filteredVarietals={filteredVarietals} />
              <Filter setFilteredVarietals={setFilteredVarietals} />
            </section>
          }
        />
        <Route exact path={'/:varietalName'} 
          render={({match}) =>
              <Info varietalName={match.params.varietalName}/>
          }
        />
    </main>
  )
}

export default App