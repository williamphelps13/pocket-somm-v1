import React, { useEffect, useState } from 'react'
import './Filter.css'
import { varietalDescriptions } from '../../data/varietal-descriptions'
import PropTypes from 'prop-types';

const Filter = ({ setFilteredVarietals }) => {
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

    setFilteredVarietals(filteredVarietals)

  }, [white, red, acidity, body, tannin, oak, floral, minerality])

  return (
    <>
      <section>
        <h2>Wine Color</h2>
        <h3>White</h3>
        <input type='radio' name='white' value='not white' onChange={handleChange} ></input>
        <label>No</label>
        <input type='radio' name='white' value='white' onChange={handleChange} ></input>
        <label>Yes</label>
        <h3>Red</h3>
        <input type='radio' name='red' value='not red' onChange={handleChange} ></input>
        <label>No</label>
        <input type='radio' name='red' value='red' onChange={handleChange} ></input>
        <label>Yes</label>
      </section>
      <section>
        <h2>Wine Structure</h2>
        <h3>Acidity</h3>
        <input type='radio' name='acidity' value='no preference' onChange={handleChange} ></input>
        <label>No Preference</label>
        <input type='radio' name='acidity' value='low' onChange={handleChange} ></input>
        <label>Low</label>
        <input type='radio' name='acidity' value='medium' onChange={handleChange} ></input>
        <label>Medium</label>
        <input type='radio' name='acidity' value='high' onChange={handleChange} ></input>
        <label>High</label>
        <h3>Body</h3>
        <input type='radio' name='body' value='no preference' onChange={handleChange} ></input>
        <label>No Preference</label>
        <input type='radio' name='body' value='light' onChange={handleChange} ></input>
        <label>Light</label>
        <input type='radio' name='body' value='medium' onChange={handleChange} ></input>
        <label>Medium</label>
        <input type='radio' name='body' value='full' onChange={handleChange} ></input>
        <label>Full</label>
        <h3>Tannin - Only Narrows Red Varietals</h3>
        <input type='radio' name='tannin' value='no preference' onChange={handleChange} ></input>
        <label>No Preference</label>
        <input type='radio' name='tannin' value='low' onChange={handleChange} ></input>
        <label>Low</label>
        <input type='radio' name='tannin' value='medium' onChange={handleChange} ></input>
        <label>Medium</label>
        <input type='radio' name='tannin' value='high' onChange={handleChange} ></input>
        <label>High</label>
      </section>
      <section>
        <h2>Wine Tasting Notes</h2>
        <h3>Oak</h3>
        <input type='radio' name='oak' value='no preference' onChange={handleChange} ></input>
        <label>No Preference</label>
        <input type='radio' name='oak' value='no' onChange={handleChange} ></input>
        <label>No</label>
        <input type='radio' name='oak' value='yes' onChange={handleChange} ></input>
        <label>Yes</label>
        <h3>Floral</h3>
        <input type='radio' name='floral' value='no preference' onChange={handleChange} ></input>
        <label>No Preference</label>
        <input type='radio' name='floral' value='no' onChange={handleChange} ></input>
        <label>No</label>
        <input type='radio' name='floral' value='yes' onChange={handleChange} ></input>
        <label>Yes</label>
        <h3>Minerality</h3>
        <input type='radio' name='minerality' value='no preference' onChange={handleChange} ></input>
        <label>No Preference</label>
        <input type='radio' name='minerality' value='no' onChange={handleChange} ></input>
        <label>No</label>
        <input type='radio' name='minerality' value='yes' onChange={handleChange} ></input>
        <label>Yes</label>
      </section>
    </>
  )
}

export default Filter

Filter.propTypes = {
  setFilteredVarietals: PropTypes.func.isRequired
}