import React, { useEffect, useState } from 'react'
import './Info.css'
import { Link } from 'react-router-dom'
import { varietalDescriptions } from '../../data/varietal-descriptions'
import Recipes from '../Recipes/Recipes'
import Error from '../Error/Error'
import PropTypes from 'prop-types';

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
            <button className={`${index}Similar`}>{name}</button>
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
        <button className='return'>Return to All Varietals</button>
      </Link>
      <h2>{chosenVarietal.name}</h2>
      <p className='colorInfo'>Color - {chosenVarietal.color}</p>
      <p className='acidityInfo'>Typical Acidity Levels - {chosenVarietal.acidity.join(' | ')}</p>
      <p className='bodyInfo'>Typical Body - {chosenVarietal.body.join(' | ')}</p>
      {chosenVarietal.color === 'red' && <p className='tanninInfo'>Typical Tannin Levels - {chosenVarietal.tannin.join(' | ')}</p>}
      <p className='otherInfo'>Other - {chosenVarietal.floral === 'yes' && 'floral | '} {chosenVarietal.minerality === 'yes' && 'minerality | '}{chosenVarietal.oak === 'yes' && 'oaky'}</p>
      <p className='similarVarietalsInfo'>Similiar Varietals to {chosenVarietal.name} - </p>
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

Info.propTypes = {
  varietalName: PropTypes.string.isRequired
};