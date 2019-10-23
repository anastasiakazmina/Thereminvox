import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class JCReverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'jCReverb'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeJCReverbValue
    } = this.props

    return (
      <div className="Effect">
        <h1>JCReverb</h1>

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
            <h2>JCReverb</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.jCReverb}
              handleValueChange={changeJCReverbValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="JCReverb"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
