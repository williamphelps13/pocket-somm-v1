import React, { useEffect, useState } from 'react'
import './Info.css'
import { Link } from 'react-router-dom'
import { varietalDescriptions } from '../../data/varietal-descriptions'
import Recipes from '../Recipes/Recipes'
import Error from '../Error/Error'

const Info = ({ varietalName }) => {
  const [chosenVarietal, setChosenVarietal] = useState('')

  useEffect(() => {
    const possibleVarietal = varietalDescriptions.find(varietal => varietal.name === varietalName)
    setChosenVarietal(possibleVarietal)
  }, [varietalName])
   
  let listSimilarVarietals

  if (chosenVarietal) {
    listSimilarVarietals = chosenVarietal.similarVarietals.map((name, index) => {
      return (
        <li key={index}> 
          <Link to={`/${name}`}>
            <button>{name}</button>
          </Link>
        </li>
      )
    })
  }
    
  return (
    <>
    {chosenVarietal ?
    <section>
      <Link to='/'>
        <button>Return to All Varietals</button>
      </Link>
      <h2>{chosenVarietal.name}</h2>
      <p>Color - {chosenVarietal.color}</p>
      <p>Typical Acidity Levels - {chosenVarietal.acidity.join(' | ')}</p>
      <p>Typical Body - {chosenVarietal.body.join(' | ')}</p>
      {chosenVarietal.color === 'red' && <p>Typical Tannin Levels - {chosenVarietal.tannin.join(' | ')}</p>}
      <p>Other - {chosenVarietal.floral === 'yes' && 'floral | '} {chosenVarietal.minerality === 'yes' && 'minerality | '}{chosenVarietal.oak === 'yes' && 'oaky'}</p>
      <p>Similiar Varietals to {chosenVarietal.name} - </p>
      <ul>
        {listSimilarVarietals}
      </ul>
      <Recipes chosenVarietal={chosenVarietal} />
    </section>
    : <Error />}
    </>
  )
}

export default Info