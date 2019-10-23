import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class AutoPanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'autoPanner'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoPannerValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Auto Panner</h1>

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
            <h2>Volume</h2>
            <Slider
              name={name}
              min="1"
              max="100"
              on={on}
              value={effect.autoPanner}
              handleValueChange={changeAutoPannerValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="Auto Panner"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
