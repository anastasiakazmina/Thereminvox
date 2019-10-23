import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class PitchShift extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'pitchShift'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changePitchShiftValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Pitch Shift</h1>

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
            <h2>Pitch Shift</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.pitchShift}
              handleValueChange={changePitchShiftValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="PitchShift"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
