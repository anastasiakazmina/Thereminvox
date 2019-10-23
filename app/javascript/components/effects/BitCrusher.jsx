import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class BitCrusher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'bitCrusher'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeBitCrusherValue
    } = this.props

    return (
      <div className="Effect">
        <h1>BitCrusher</h1>

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
            <h2>Bits</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.bitCrusher}
              handleValueChange={changeBitCrusherValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="BitCrusher"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
