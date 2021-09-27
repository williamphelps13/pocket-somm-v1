import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Filter from '../Filter/Filter'
import Names from '../Names/Names'
import Info from '../Info/Info'

const App = () => {
  const [filteredVarietals, setFilteredVarietals] = useState([])

  

export default App