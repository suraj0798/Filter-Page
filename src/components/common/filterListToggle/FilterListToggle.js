import React from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const Filterlisttoggle = ({options, value, selectToggle}) => {
  return (
    <ToggleButtonGroup value={value} onChange= {selectToggle} className= "toggleButtonGroup">Filterlisttoggel
      {options.map(({label,id,value}) => {
        <ToggleButton className= "ToggleButton" key= {id} value= {value}>
          {label}
        </ToggleButton>
      })}
    </ToggleButtonGroup>
  )
}

export default Filterlisttoggle