import React, { useEffect, useState } from 'react'
import './Filter.css'
import { varietalDescriptions } from '../../data/varietal-descriptions'

const Filter = ({ displayNames }) => {
  const [wineTraitState, setWineTraitState] = useState({
    white: 'white', 
    red: 'red', 
    acidity: 'no preference', 
    body: 'no preference', 
    tannin: 'no preference',
    oak: 'no preference',
    floral: 'no preference',
    minerality: 'no preference'
  })

  const {white, red, acidity, body, tannin, oak, floral, minerality} = wineTraitState

  
}

export default Filter