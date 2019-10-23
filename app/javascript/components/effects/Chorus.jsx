import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'chorus'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeChorusValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Chorus</h1>

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
            <h2>Chorus</h2>
            <Slider
              name={name}
              min="0"
              max="10"
              on={on}
              value={effect.chorus}
              handleValueChange={changeChorusValue}
            />
          </div>
        </div>

        <ToggleSwitch value="Chorus" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
