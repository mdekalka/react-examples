import { useReducer, Reducer } from "react"

export enum Actions {
  toggle,
  enable,
  disable
}

export type State = {
  on: boolean
}

type ToggleAction = {
  type: Actions.toggle
}

type EnableeAction = {
  type: Actions.enable
}

type DisableAction = {
  type: Actions.disable
}

export type ReducerActions = ToggleAction | EnableeAction | DisableAction

export type ActionChange = {
  state: State
} & ReducerActions

type Props = {
  reducer: (state: State, action: ActionChange) => State
}

const initialState: State = {
  on: false
}

const switchReducer: Reducer<State, ReducerActions> = (state, action) => {
  switch (action.type) {
    case Actions.toggle:
      return { on: !state.on }

    case Actions.enable:
      return { on: true }

    case Actions.disable:
      return { on: false }

    default: {
      throw new Error(`Unhandled type: ${(action as any).type}`)
    }
  }
}

export const useSwitch = ({ reducer }: Props) => {
  const [{ on }, dispatch] = useReducer<Reducer<State, ReducerActions>>((state, action) => {
    const changes = switchReducer(state, action)

    return reducer(state, { ...action, state: changes })
  }, initialState)

  const onToggle = () => dispatch({ type: Actions.toggle })
  const onEnable = () => dispatch({ type: Actions.enable })
  const onDisable = () => dispatch({ type: Actions.disable })

  return {
    on,
    onToggle,
    onEnable,
    onDisable
  }
}

