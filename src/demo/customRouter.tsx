import {
  Button, HtmlView, Label, Page, ScrollView, StackLayout, TextView, WebView
} from "preact-nativescript-components"
import { Component, goBack, h } from "preact-to-nativescript"

class MyRoute extends Component<any, any> {
  public render() {
    return (
      <StackLayout>
        <Label text="First Page" />
        <Button text="Go to Second" onTap={this.props.navigateTo.bind(this, "/test")} />
        <Button text="Go Back within custom router" onTap={this.props.goBack} />
        <Button key="nbsback1" text="Go Back in NativeScript Router" onTap={goBack} />
      </StackLayout>
    )
  }
}

class OtherROute extends Component<any, any> {
  public render() {
    return (
      <StackLayout>
        <Label text="Second Page" />
        <Button text="Go to First" onTap={this.props.navigateTo.bind(this, "/")} />
        <Button text="Go Back within custom router" onTap={this.props.goBack} />
        <Button key="nbsback2" text="Go Back in NativeScript Router" onTap={goBack} />
      </StackLayout>
    )
  }
}

const routes = [
  {default: true, path: "/", component: MyRoute},
  {path: "/test", component: OtherROute}
]

class PageCustomRouter extends Component<any, any> {
  private setNav: Function
  private goBack: Function
  constructor(props: any) {
    super(props)
    this.state = {
      route: "/",
      navStack: ["/"]
    }
    this.setNav = (newRoute: any) => {
      const newStack = this.state.navStack.slice(0)
      newStack.push(newRoute)
      this.setState({route: newRoute, navStack: newStack})
    }
    this.goBack = () => {
      if (this.state.navStack.length > 1) {
        const newStack = this.state.navStack.slice(0)
        newStack.pop()
        this.setState({route: newStack[newStack.length - 1], navStack: newStack})
      }
    }
  }
  public render() {
    let Comp: any = StackLayout
    for (const route of routes) {
      if (this.state.route === route.path) {
        Comp = route.component
      }
    }
    return (
      <Page>
        <Comp navigateTo={this.setNav} goBack={this.goBack} />
      </Page>
    )
  }
}

export default PageCustomRouter
