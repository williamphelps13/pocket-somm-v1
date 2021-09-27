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

  const handleChange = (event) => {
    setWineTraitState(otherState => ({ ...otherState, [event.target.name]: event.target.value}))
  }

  useEffect(() => {
    const filteredVarietals = varietalDescriptions.filter(varietal => {
      if (varietal.color === white || varietal.color === red) {
        if (varietal.acidity.includes(acidity) || acidity === 'no preference') {
          if (varietal.body.includes(body) || body === 'no preference') {
            if (varietal.tannin.includes(tannin) || tannin === 'no preference' || varietal.color === white) {
              if (varietal.oak === oak || oak === 'no preference') {
                if (varietal.floral === floral || floral === 'no preference') {
                  if (varietal.minerality === minerality || minerality === 'no preference') {
                    return true
                  } else {
                    return false
                  }
                } else {
                  return false
                }
              } else {
                return false
              }
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    })

    displayNames(filteredVarietals)

  }, [white, red, acidity, body, tannin, oak, floral, minerality])

}

export default Filter