import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class StereoWidener extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'stereoWidener'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeStereoWidenerValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Stereo Widener</h1>

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
            <h2>StereoWidener</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.stereoWidener}
              handleValueChange={changeStereoWidenerValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="StereoWidener"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
