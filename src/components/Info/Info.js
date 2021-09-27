import React, { useEffect, useState } from 'react'
import './Info.css'
import { Link } from 'react-router-dom'
import { varietalDescriptions } from '../../data/varietal-descriptions'
import Recipes from '../Recipes/Recipes'
import Error from '../Error/Error'

const Info = ({ varietalName }) => {
  const [chosenVarietal, setChosenVarietal] = useState('')
  const [similarVarietals, setSimilarVarietals] = useState('')

  useEffect(() => {
    const possibleVarietal = varietalDescriptions.find(varietal => varietal.name === varietalName)
    setChosenVarietal(possibleVarietal)
  }, [varietalName])

  useEffect(() => {
    if (chosenVarietal) {
      const listSimilarVarietals = chosenVarietal.similarVarietals.map((name, index) => {
        return (
          <li key={index}> 
            <Link to={`/${name}`}>
              <button>{name}</button>
            </Link>
          </li>
        )
      })
      
      setSimilarVarietals(listSimilarVarietals)
    }
  }, [chosenVarietal])

  
}

export default Info