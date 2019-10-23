import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'

export default class FeedbackEffect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'feedbackEffect'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeFeedbackEffectValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Feedback Effect</h1>

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
            <h2>Feedback Effect</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.feedbackEffect}
              handleValueChange={changeFeedbackEffectValue}
            />
          </div>
        </div>
        <ToggleSwitch
          value="FeedbackEffect"
          current={on}
          handleClick={toggleEffect}
        />
      </div>
    )
  }
}
