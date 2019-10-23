import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Effect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'effect'
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
        <h1>Effect</h1>

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
            <h2>Effect</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.convolver}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
        <ToggleSwitch value="Effect" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
