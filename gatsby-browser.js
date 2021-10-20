import React from "react"
import { silentAuth } from "./src/utils/auth"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./src/state/reducers/index"

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  const initialState = 
  {
    tags:
    {
      filter: "*",
      state: "loaded",
      list: ["Scouts", "MondayScouts", "TuesdayScouts", "Cubs", "Beavers", "Group"]
    },
    notices:
    {
      selected: "",
      list: []
    }
  }
  const store = createStore(rootReducer, initialState)
  return (
    <Provider store={store}>
      <SessionCheck>{element}</SessionCheck>
    </Provider>)
}
