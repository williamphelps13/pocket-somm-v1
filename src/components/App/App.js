import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Filter from '../Filter/Filter'
import Names from '../Names/Names'
import Info from '../Info/Info'

const App = () => {
  const [filteredVarietals, setFilteredVarietals] = useState([])

  return (
    <main>
      <h1>Pocket Somm</h1>
        <Route exact path='/' 
          render={() =>
            <section>
              <Names filteredVarietals={filteredVarietals} />
              <Filter setFilteredVarietals={setFilteredVarietals} />
            </section>
          }
        />
        
    </main>
  )
}

export default App