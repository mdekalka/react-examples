import React, { useState } from "react"

import { useSwitch, Actions, State, ReducerActions, ActionChange } from "./useSwitch"

// https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
export const StateReducerPattern = () => {
  const [clicksCount, setClickCount] = useState(0)
  const alertClicksCount = clicksCount >= 3

  const { on, onToggle, onEnable, onDisable } = useSwitch({
    reducer(currentState: State, action: ActionChange) {
      if (alertClicksCount && action.type === Actions.toggle) {
        // other changes are fine, but on needs to be unchanged
        // P.S. <currentState> is actually old state w/o changes applied from action
        return { ...action.state, on: currentState.on }
      } else {
        // the changes are fine
        return action.state
      }
    }
  })

  const onHandleToggle = () => {
    onToggle()
    setClickCount(count => count + 1)
  }

  return (
    <div>
      <div style={{ display: "inline-block", padding: 15, backgroundColor: on ? "green": "red" }}>
        {on ? "Enabled" : " Disabled"}
      </div>

      <div>
        <button onClick={onEnable}>Enable</button>
        <button onClick={onDisable}>Disable</button>
        <button onClick={onHandleToggle}>Toggle</button>
        {alertClicksCount && <div>Alert clicks <button onClick={() => setClickCount(0)}>Reset clicks</button></div>}
      </div>
    </div>
  )
}
