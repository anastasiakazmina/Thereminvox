import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Freeverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'freeverb'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeFreeverbValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Freeverb</h1>

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
              min="1"
              max="60"
              on={on}
              value={effect.freeverb}
              handleValueChange={changeFreeverbValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="Freeverb"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
