import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class PingPongDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'pingPongDelay'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changePingPongDelayValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Ping Pong Delay</h1>

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
            <h2>Ping Pong Delay</h2>
            <Slider
              name={name}
              min="0"
              max="1"
              on={on}
              value={effect.pingPongDelay}
              handleValueChange={changePingPongDelayValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="PingPongDelay"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
