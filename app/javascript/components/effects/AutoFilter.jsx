import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class AutoFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'autoFilter'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    return (
      <div className="Effect">
        <ToggleSwitch
          value="Auto Filter"
          current={on}
          handleClick={toggleEffect}
        />

        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Wet</h2>
            <Slider
              name={name}
              property="wet"
              min="0"
              max="1"
              value={wet}
              handleValueChange={changeEffectWetValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
