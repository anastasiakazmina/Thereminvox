import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../components/PlaySwitch'
import Slider from '../components/Slider'
import ToggleSwitch from '../components/ToggleSwitch'
import FeedbackDelay from '../components/effects/FeedbackDelay'
import BitCrusher from '../components/effects/BitCrusher'
import Chebyshev from '../components/effects/Chebyshev'
import AutoPanner from '../components/effects/AutoPanner'
import AutoFilter from '../components/effects/AutoFilter'
import AutoWah from '../components/effects/AutoWah'
import Freeverb from '../components/effects/Freeverb'
import Vibrato from '../components/effects/Vibrato'
import Tremolo from '../components/effects/Tremolo'
import Chorus from '../components/effects/Chorus'
import Effect from '../components/effects/Effect'
import FeedbackEffect from '../components/effects/FeedbackEffect'
import JCReverb from '../components/effects/JCReverb'
import Phaser from '../components/effects/Phaser'
import PingPongDelay from '../components/effects/PingPongDelay'
import PitchShift from '../components/effects/PitchShift'
import Reverb from '../components/effects/Reverb'
import StereoWidener from '../components/effects/StereoWidener'

import Knob from '../components/Knob'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    let feedbackDelay = new Tone.FeedbackDelay({
      delayTime: '4n',
      maxDelay: 0.8
    })

    let bitCrusher = new Tone.BitCrusher({
      bits: 4
    })

    let chebyshev = new Tone.Chebyshev({
      order: 1,
      oversample: 'none'
    })

    let autoPanner = new Tone.AutoFilter({
      frequency: 10,
      type: 'triangle',
      depth: 8,
      baseFrequency: 100,
      octaves: 2.6,
      filter: {
        type: 'lowpass',
        rolloff: -12,
        Q: 1
      }
    })

    let autoFilter = new Tone.AutoFilter({
      frequency: 1,
      type: 'sine',
      depth: 1,
      baseFrequency: 200,
      octaves: 2.6,
      filter: {
        type: 'lowpass',
        rolloff: -12,
        Q: 1
      }
    })

    let autoWah = new Tone.AutoWah({
      baseFrequency: 100,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 2,
      follower: {
        attack: 0.3,
        release: 0.5
      }
    })

    let freeverb = new Tone.Freeverb({
      roomSize: 0.7,
      dampening: 3000
    })

    let vibrato = new Tone.Vibrato({
      maxDelay: 0.005,
      frequency: 5,
      depth: 0.1,
      type: 'sine'
    })

    let tremolo = new Tone.Tremolo({
      frequency: 10,
      type: 'sine',
      depth: 0.5,
      spread: 180
    })

    let chorus = new Tone.Chorus({
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      type: 'sine',
      spread: 180
    })

    let convolver = new Tone.Convolver({
      onload: Tone.noOp,
      normalize: true
    })

    let effect = new Tone.Effect({
      wet: 1
    })

    let feedbackEffect = new Tone.FeedbackEffect({
      feedback: 0.125
    })

    let jCReverb = new Tone.JCReverb({
      roomSize: 0.5
    })

    let phaser = new Tone.Phaser({
      frequency: 0.5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    })

    let pingPongDelay = new Tone.PingPongDelay({
      delayTime: 0.25,
      maxDelayTime: 1
    })

    let pitchShift = new Tone.PitchShift({
      pitch: 0,
      windowSize: 0.1,
      delayTime: 0,
      feedback: 0
    })

    let reverb = new Tone.Reverb({
      decay: 1.5,
      preDelay: 0.01
    })

    let stereoWidener = new Tone.StereoWidener({
      width: 0.5
    })

    autoPanner.wet.value = 0
    bitCrusher.wet.value = 0
    feedbackDelay.wet.value = 0
    chebyshev.wet.value = 0
    autoFilter.wet.value = 0
    autoWah.wet.value = 0
    freeverb.wet.value = 0
    vibrato.wet.value = 0
    tremolo.wet.value = 0
    chorus.wet.value = 0
    convolver.wet.value = 0
    effect.wet.value = 0
    feedbackEffect.wet.value = 0
    jCReverb.wet.value = 0
    phaser.wet.value = 0
    pingPongDelay.wet.value = 0
    pitchShift.wet.value = 0
    reverb.wet.value = 0
    stereoWidener.wet.value = 0

    let synth = new Tone.PolySynth()

    synth.chain(
      bitCrusher,
      chebyshev,
      autoPanner,
      autoFilter,
      autoWah,
      freeverb,
      vibrato,
      feedbackDelay,
      tremolo,
      chorus,
      convolver,
      effect,
      feedbackEffect,
      jCReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      Tone.Master
    )

    let loop1 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(['C2', '8n'], time)
    }, '32n')

    let loop2 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease(['C2'], '4n', time)
    }, '16n')

    let loop3 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(['A2', '16n'], '16n', time)
    }, '32n')

    let loop4 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(['A6', '2n'], '8n', time)
    }, '16n')

    let loop5 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(
        [
          'G4',
          'G4',
          'F4',
          'F4',
          'E4',
          'E4',
          'D4',
          'G4',
          'G4',
          'F4',
          'F4',
          'E4',
          'E4',
          'D4'
        ],
        '32n',
        time
      )
    }, '16n')

    let loop6 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(['C2', '8n'], time)
    }, '32n')

    let loop7 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease(['C2'], '4n', time)
    }, '16n')

    let loop8 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(['A2', '16n'], '16n', time)
    }, '32n')

    let loop9 = new Tone.Pattern(function(time, note) {
      synth.triggerAttackRelease(['A6', '2n'], '8n', time)
    }, '16n')

    this.state = {
      lastChange: Date.now(),
      timeout: 0,
      synth: { instrument: synth, on: false },
      autoFilter: { effect: autoFilter, wet: 0, on: false },
      autoPanner: { effect: autoPanner, wet: 0, on: false },
      bitCrusher: { effect: bitCrusher, wet: 0, on: false },
      chebyshev: { effect: chebyshev, wet: 0, on: false },
      autoWah: { effect: autoWah, wet: 0, on: false },
      freeverb: { effect: freeverb, wet: 0, on: false },
      feedbackDelay: { effect: feedbackDelay, wet: 0, on: false },
      vibrato: { effect: vibrato, wet: 0, on: false },
      tremolo: { effect: tremolo, wet: 0, on: false },
      chorus: { effect: chorus, wet: 0, on: false },
      convolver: { effect: convolver, wet: 0, on: false },
      effect: { effect: effect, wet: 0, on: false },
      feedbackEffect: { effect: feedbackEffect, wet: 0, on: false },
      jCReverb: { effect: jCReverb, wet: 0, on: false },
      phaser: { effect: phaser, wet: 0, on: false },
      pingPongDelay: { effect: pingPongDelay, wet: 0, on: false },
      pitchShift: { effect: pitchShift, wet: 0, on: false },
      reverb: { effect: reverb, wet: 0, on: false },
      stereoWidener: { effect: stereoWidener, wet: 0, on: false },
      loop1: { loop: loop1, on: false },
      loop2: { loop: loop2, on: false },
      loop3: { loop: loop3, on: false },
      loop4: { loop: loop4, on: false },
      loop5: { loop: loop5, on: false },
      loop6: { loop: loop6, on: false },
      loop7: { loop: loop7, on: false },
      loop8: { loop: loop8, on: false },
      loop9: { loop: loop9, on: false }
    }

    _.bindAll(
      this,
      'generateRandom',
      'toggleLoop',
      'toggleEffect',
      'changeEffectWetValue',
      'changeEffectWetValue',
      'changeAutoPannerWetValue',
      'changeAutoPannerValue',
      'changeBitCrasherValue',
      'changeFreeverbValue',
      'changeAutoFilterValue',
      'changeAutoWahValue',
      'changeChebyshevValue',
      'changeFeedbackDelayValue',
      'changeVibratoValue',
      'changeFeedbackDelayWetValue',
      'changeChebyshevWetValue',
      'changeBitCrasherWetValue',
      'changeVibratoWetValue',
      'changeTremoloWetValue',
      'changeTremoloValue',
      'changeChorusWetValue',
      'changeChorusValue',
      'changeConvolverWetValue',
      'changeConvolverValue',
      'changeEffectWetValue',
      'changeEffectValue',
      'changeFeedbackEffectWetValue',
      'changeFeedbackEffectValue',
      'changeJCReverbWetValue',
      'changeJCReverbValue',
      'changePhaserWetValue',
      'changePhaserValue',
      'changePingPongDelayWetValue',
      'changePingPongDelayValue',
      'changePitchShiftWetValue',
      'changePitchShiftValue',
      'changeReverbWetValue',
      'changeReverbValue',
      'changeStereoWidenerWetValue',
      'changeStereoWidenerValue'
    )

    Tone.Transport.bpm.value = 150
    Tone.Transport.start()
  }

  componentDidMount() {
    this.generateRandom()
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  generateRandom() {
    const { lastChange, timeout } = this.state

    if (Date.now() - lastChange >= timeout) {
      const random = this.getRandomArbitrary(100, 3000)

      this.setState({
        lastChange: Date.now(),
        timeout: random
      })

      this.changeFreeverbValue('freeverb', random / 80)
      this.changeAutoFilterValue('autoFilter', random / 80)
    }

    setTimeout(() => this.generateRandom(), timeout)
  }

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName]

    on == true ? loop.stop() : loop.start('0m')

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })
  }

  toggleEffect(effectName) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoPannerWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeStereoWidenerValue(effectName, value) {
    let { effect, wet, on } = this.state.stereoWidener

    effect.stereoWidener = value

    this.setState({
      stereoWidener: {
        effect,
        wet,
        on
      }
    })
  }

  changeReverbValue(effectName, value) {
    let { effect, wet, on } = this.state.reverb

    effect.reverb = value

    this.setState({
      reverb: {
        effect,
        wet,
        on
      }
    })
  }

  changePitchShiftWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changePitchShiftValue(effectName, value) {
    let { effect, wet, on } = this.state.pitchShift

    effect.pitchShift = value

    this.setState({
      pitchShift: {
        effect,
        wet,
        on
      }
    })
  }

  changeFeedbackEffectValue(effectName, value) {
    let { effect, wet, on } = this.state.feedbackEffect

    effect.feedbackEffect = value

    this.setState({
      feedbackEffect: {
        effect,
        wet,
        on
      }
    })
  }

  changePhaserValue(effectName, value) {
    let { effect, wet, on } = this.state.phaser

    effect.phaser = value

    this.setState({
      phaser: {
        effect,
        wet,
        on
      }
    })
  }

  changeJCReverbValue(effectName, value) {
    let { effect, wet, on } = this.state.jCReverb

    effect.jCReverb = value

    this.setState({
      jCReverb: {
        effect,
        wet,
        on
      }
    })
  }

  changePingPongDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.pingPongDelay

    effect.pingPongDelay = value

    this.setState({
      pingPongDelay: {
        effect,
        wet,
        on
      }
    })
  }

  changeEffectValue(effectName, value) {
    let { effect, wet, on } = this.state.effect

    effect.effect = value

    this.setState({
      effect: {
        effect,
        wet,
        on
      }
    })
  }

  changeConvolverValue(effectName, value) {
    let { effect, wet, on } = this.state.convolver

    effect.convolver = value

    this.setState({
      convolver: {
        effect,
        wet,
        on
      }
    })
  }

  changeChorusValue(effectName, value) {
    let { effect, wet, on } = this.state.chorus

    effect.chorus = value

    this.setState({
      chorus: {
        effect,
        wet,
        on
      }
    })
  }

  changeTremoloValue(effectName, value) {
    let { effect, wet, on } = this.state.tremolo

    effect.tremolo = value

    this.setState({
      tremolo: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoPannerValue(effectName, value) {
    let { effect, wet, on } = this.state.autoPanner

    effect.autoPanner = value

    this.setState({
      autoPanner: {
        effect,
        wet,
        on
      }
    })
  }

  changeBitCrasherValue(effectName, value) {
    let { effect, wet, on } = this.state.bitCrusher

    effect.bits = value

    this.setState({
      bitCrusher: {
        effect,
        wet,
        on
      }
    })
  }

  changeFreeverbValue(effectName, value) {
    let { effect, wet, on } = this.state.freeverb

    effect.freeverb = value

    this.setState({
      freeverb: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoFilterValue(effectName, value) {
    let { effect, wet, on } = this.state.autoFilter

    effect.autoFilter = value

    this.setState({
      autoFilter: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoWahValue(effectName, value) {
    let { effect, wet, on } = this.state.autoWah

    effect.baseFrequency = value

    this.setState({
      autoWah: {
        effect,
        wet,
        on
      }
    })
  }

  changeChebyshevValue(effectName, value) {
    let { effect, wet, on } = this.state.chebyshev

    effect.chebyshev = value

    this.setState({
      chebyshev: {
        effect,
        wet,
        on
      }
    })
  }

  changeFeedbackDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.feedbackDelay

    effect.maxDelay = value

    this.setState({
      feedbackDelay: {
        effect,
        wet,
        on
      }
    })
  }

  changeVibratoValue(effectName, value) {
    let { effect, wet, on } = this.state.vibrato

    effect.vibrato = value

    this.setState({
      vibrato: {
        effect,
        wet,
        on
      }
    })
  }

  changeFeedbackDelayWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changePhaserWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeStereoWidenerWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeReverbWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changePingPongDelayWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeJCReverbWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeFeedbackEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeConvolverWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeChorusWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeTremoloWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeChebyshevWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeBitCrasherWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeVibratoWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  render() {
    let {
      feedbackDelay,
      autoPanner,
      bitCrusher,
      chebyshev,
      autoFilter,
      autoWah,
      freeverb,
      vibrato,
      tremolo,
      chorus,
      convolver,
      effect,
      feedbackEffect,
      jCReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,

      synth,
      loop1,
      loop2,
      loop3,
      loop4,
      loop5,
      loop6,
      loop7,
      loop8,
      loop9
    } = this.state
    let { toggleEffect } = this

    return (
      <div>
        <div className="LoopContainer">
          <div className="PlaySwitch_loop1">
            <PlaySwitch
              name="play"
              value={loop1.on}
              handleToggleClick={() => this.toggleLoop('loop1')}
            />
          </div>
          <div className="KnobStyle"></div>

          <div className="Knobs"></div>
          <div className="Line_2"></div>
          <div className="Animation"></div>
          <div className="Line_1"></div>

          <div className="PlaysSwitches">
            <div className="PlaySwitch_loop2">
              <PlaySwitch
                name="play"
                value={loop2.on}
                handleToggleClick={() => this.toggleLoop('loop2')}
              />
            </div>
            <div className="PlaySwitch_loop3">
              <PlaySwitch
                name="play"
                value={loop3.on}
                handleToggleClick={() => this.toggleLoop('loop3')}
              />
            </div>
            <div className="PlaySwitch_loop4">
              <PlaySwitch
                name="play"
                value={loop4.on}
                handleToggleClick={() => this.toggleLoop('loop4')}
              />
            </div>
            <div className="PlaySwitch_loop5">
              <PlaySwitch
                name="play"
                value={loop5.on}
                handleToggleClick={() => this.toggleLoop('loop5')}
              />
            </div>
            <div className="PlaySwitch_loop6">
              <PlaySwitch
                name="play"
                value={loop6.on}
                handleToggleClick={() => this.toggleLoop('loop6')}
              />
            </div>
            <div className="PlaySwitch_loop7">
              <PlaySwitch
                name="play"
                value={loop7.on}
                handleToggleClick={() => this.toggleLoop('loop7')}
              />
            </div>
            <div className="PlaySwitch_loop8">
              <PlaySwitch
                name="play"
                value={loop8.on}
                handleToggleClick={() => this.toggleLoop('loop8')}
              />
            </div>
            <div className="PlaySwitch_loop9">
              <PlaySwitch
                name="play"
                value={loop9.on}
                handleToggleClick={() => this.toggleLoop('loop9')}
              />
            </div>
          </div>
          <div className="Text"></div>
          <div className="Line_1"></div>
          <div className="Line_3"></div>
          <div className="Logotype"></div>
          <div className="Gif"></div>
          <div className="Line_5"></div>
          <div className="Line_4"></div>
          <div className="Slider">
            <FeedbackDelay
              {...this.state.feedbackDelay}
              toggleEffect={() => toggleEffect('feedbackDelay')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeFeedbackDelayValue={this.changeFeedbackDelayValue}
            />
          </div>
          <div className="Slider2">
            <Reverb
              {...this.state.reverb}
              toggleEffect={() => toggleEffect('reverb')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeReverbValue={this.changeReverbValue}
            />
          </div>

          <div className="Line_6"></div>
          <div className="Line_7"></div>
          <div className="Line_8"></div>
          <div className="Line_9"></div>

          <div className="Slider3">
            <AutoPanner
              {...this.state.autoPanner}
              toggleEffect={() => toggleEffect('autoPanner')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeAutoPannerValue={this.changeAutoPannerValue}
            />
          </div>

          <div className="Slider4">
            <AutoWah
              {...this.state.autoWah}
              toggleEffect={() => toggleEffect('autoWah')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeAutoWahValue={this.changeAutoWahValue}
            />
          </div>

          <div className="Line_10"></div>

          <div className="Slider5">
            <BitCrusher
              {...this.state.bitCrusher}
              toggleEffect={() => toggleEffect('bitCrusher')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeBitCrusherValue={this.changeBitCrusherValue}
            />
          </div>
          <div className="Line_11"></div>

          <div className="Slider6">
            <Chebyshev
              {...this.state.chebyshev}
              toggleEffect={() => toggleEffect('chebyshev')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeChebyshevValue={this.changeChebyshevValue}
            />
          </div>

          <div className="Slider7">
            <Chorus
              {...this.state.chorus}
              toggleEffect={() => toggleEffect('chorus')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeChorusValue={this.changeChorusValue}
            />
          </div>

          <div className="Slider8">
            <Freeverb
              {...this.state.freeverb}
              toggleEffect={() => toggleEffect('freeverb')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeFreeverbValue={this.changeFreeverbValue}
            />
          </div>

          <div className="Slider9">
            <JCReverb
              {...this.state.jCReverb}
              toggleEffect={() => toggleEffect('jCReverb')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeJCReverbValue={this.changeJCReverbValue}
            />
          </div>
          <div className="Line_12"></div>
          <div className="Line_13"></div>

          <div className="Slider10">
            <Phaser
              {...this.state.phaser}
              toggleEffect={() => toggleEffect('phaser')}
              changeEffectWetValue={this.changeEffectWetValue}
              changePhaserValue={this.changePhaserValue}
            />
          </div>

          <div className="Slider11">
            <PingPongDelay
              {...this.state.pingPongDelay}
              toggleEffect={() => toggleEffect('pingPongDelay')}
              changeEffectWetValue={this.changeEffectWetValue}
              changePingPongDelayValue={this.changePingPongDelayValue}
            />
          </div>

          <div className="Slider12">
            <PitchShift
              {...this.state.pitchShift}
              toggleEffect={() => toggleEffect('pitchShift')}
              changeEffectWetValue={this.changeEffectWetValue}
              changePitchShiftValue={this.changePitchShiftValue}
            />
          </div>

          <div className="Slider13">
            <Tremolo
              {...this.state.tremolo}
              toggleEffect={() => toggleEffect('tremolo')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeTremoloValue={this.changeTremoloValue}
            />
          </div>

          <div className="Line_14"></div>

          <div className="Slider14">
            <Vibrato
              {...this.state.vibrato}
              toggleEffect={() => toggleEffect('vibrato')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeVibratoValue={this.changeVibratoValue}
            />
          </div>

          <div className="Slider15">
            <StereoWidener
              {...this.state.stereoWidener}
              toggleEffect={() => toggleEffect('stereoWidener')}
              changeEffectWetValue={this.changeEffectWetValue}
              changeStereoWidenerValue={this.changeStereoWidenerValue}
            />
          </div>
          <div className="Compilation"></div>
          <div className="Compilation2"></div>
          <div className="Compilation3"></div>
          <div className="Line_15"></div>
        </div>
      </div>
    )
  }
}
