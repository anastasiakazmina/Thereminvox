import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class AutoWah extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'autoWah'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoWahValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Auto Wah</h1>

        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Wet</h2>

            <Slider
              name={name}
              min="0"
              max="1"
              value={wet}
              handleValueChange={changeEffectWetValue}
            />
          </div>

          <div className="controlsRow">
            <h2>Value</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.autoWah}
              handleValueChange={changeAutoWahValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="Auto Wah"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
