import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class Phaser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'phaser'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changePhaserValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Phaser</h1>

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
            <h2>Phaser</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.phaser}
              handleValueChange={changePhaserValue}
            />
          </div>
        </div>
        <ToggleSwitch value="Phaser" current={on} handleClick={toggleEffect} />
      </div>
    )
  }
}
