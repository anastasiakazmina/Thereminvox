import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'tremolo'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeTremoloValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Tremolo</h1>

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
            <h2>Tremolo</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.tremolo}
              handleValueChange={changeTremoloValue}
            />
          </div>
        </div>
        <ToggleSwitch value="Tremolo" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
