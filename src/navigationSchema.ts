import { UsersHOC, UsersParamsHOC } from "./components/UsersHOC"
import { Users as UsersRenderProps } from "./components/UsersRenderProps"
import { Users as UsersHooks } from "./components/UsersHook"
import { WithHookContext } from "./components/WithHookContext"
import { Guards } from "./components/Guards"
import { ModalPortal } from "./components/Portal"
import { StateReducerPattern } from "./components/StateReducerPattern"
import { ProductsReduxToolkit } from "./components/ReduxTookit"

export const navigationSchema = [
    {
      id: 1,
      path: "/hoc",
      pathTitle: "Users HOC",
      props: {
        title: "With users HOC"
      },
      component: UsersHOC
    },

    {
      id: 2,
      path: "/params-hoc",
      pathTitle: "Users params HOC",
      props: {
        title: "with users params HOC"
      },
      component: UsersParamsHOC
    },

    {
      id: 3,
      path: "/render-props",
      pathTitle: "Users render props",
      component: UsersRenderProps
    },

    {
      id: 4,
      path: "/hooks",
      pathTitle: "Users hooks",
      component: UsersHooks
    },

    {
      id: 5,
      path: "/context-hook",
      pathTitle: "Context hook",
      component: WithHookContext
    },

    {
      id: 6,
      path: "/route-guards",
      pathTitle: "Route guards",
      component: Guards
    },

    {
      id: 7,
      path: "/portal",
      pathTitle: "Modal portal",
      component: ModalPortal
    },

    {
      id: 8,
      path: "/state-reducer",
      pathTitle: "State reducer pattern",
      component: StateReducerPattern
    },

    {
      id: 9,
      path: "/redux-toolkit",
      pathTitle: "Products redux toolkit",
      component: ProductsReduxToolkit
    }
]