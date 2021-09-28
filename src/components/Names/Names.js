import React, { useState, useEffect } from 'react'
import './Names.css'
import { Link } from 'react-router-dom'

const Names = ({ filteredVarietals }) => {
  const [selectedWhites, setSelectedWhites] = useState([])
  const [selectedReds, setSelectedReds] = useState([])

  useEffect(() => {
    const displayedWhites = filterLinksColor(filteredVarietals, 'white')
    const displayedReds = filterLinksColor(filteredVarietals, 'red')
    
    setSelectedWhites(displayedWhites)
    setSelectedReds(displayedReds)
  }, [filteredVarietals])

  const filterLinksColor = (filteredVarietals, color) => {
    const filteredByColor = filteredVarietals.filter(varietal => varietal.color === color).map(varietal => varietal.name)

    return createLinks(filteredByColor)
  }

  const createLinks = (filteredByColor) => {
    return filteredByColor.map((name, index) => {
      return (
        <Link to={`/${name}`} key={index}>
          <button>{name}</button>
        </Link>
      )
    })
  }

  return (
    <>
      {selectedWhites.length > 0 &&
        <section>
          <p className='whitesLeft'>Whites Remaining - {selectedWhites.length} / 10</p>
          {selectedWhites}
        </section>
      }
    
      {selectedReds.length > 0 &&
          <section>
            <p className='redsLeft'>Reds Remaining - {selectedReds.length} / 17</p>
            {selectedReds}
          </section>
        }
    </>
  )
}

export default Names