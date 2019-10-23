import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Vibrato extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'vibrato'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeVibratoValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Vibrato</h1>

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
            <h2>Vibrato</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.vibrato}
              handleValueChange={changeVibratoValue}
            />
          </div>
        </div>
        <ToggleSwitch value="Vibrato" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
