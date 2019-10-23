import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Chebyshev extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'chebyshev'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeChebyshevValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Chebyshev</h1>

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
              max="1"
              on={on}
              value={effect.chebyshev}
              handleValueChange={changeChebyshevValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="Chebyshev"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
