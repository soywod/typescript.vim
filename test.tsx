import React, {Component} from "react"

import ComponentX from "./ComponentX"

type TestType = string | Array<boolean>

type TestType = {
  loaded: boolean
}

interface TestInterface {
  loaded: boolean
}

const testObj = {
  loaded: boolean
}

class AppComponent extends Component<{}, IState> {
  private toto: string = "oeu"

  constructor(props: {}) {
    super(props)
    this.state = {loaded: false}
  }

  public render(): void {
    return (
      <HashRouter>
        <ScrollToTop>
          <Navbar />

          <main className={styles.main}>
            <Route exact path="/" component={Component1} />
            <Route exact path="/route2" component={Component2} />
          </main>
        </ScrollToTop>
      </HashRouter>
    )
  }

  public toto: boolean = () => {
    return "string"
  }

  public componentDidMount() {
    window.onload = () => {
      const $loader = document.getElementById("loader")
      if (! $loader) {
        return
      }

      $loader.className = "loaded"

      this.setState({loaded: true})
      setTimeout(() => document.body.removeChild($loader), 1000)
    }
  }

  public componentWillUnmount() {
    window.onload = null
  }
}

export default AppComponent
