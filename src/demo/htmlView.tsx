import {
  Button, HtmlView, Label, Page, ScrollView, StackLayout, TextView, WebView
} from "preact-nativescript-components"
import { Component, goBack, h } from "preact-to-nativescript"

class PageHtmlView extends Component<any, any> {
  private setLoad: Function
  constructor(props: any) {
    super(props)
    this.state = {loaded: "Loading WebView Content"}
    this.setLoad = (args: any) => {
      if (args.error) {
        this.setState({loaded: `error ${args.error}`})
      } else {
        this.setState({loaded: `successfully loaded ${args.url}`})
      }
    }
  }
  public render() {
    return (
      <Page>
        <StackLayout>
          <Label text="HtmlView" />
          <HtmlView html='<span><font color="#ff0000">Test</font></span>' />
          <Button text="Back" onTap={goBack} />
          <Label text={this.state.loaded} />
          <WebView
            onLoadFinished={this.setLoad}
            src="https://github.com/Hizoul/proposal-for-preact-to-nativescript"
          />
        </StackLayout>
      </Page>
    )
  }
}

export default PageHtmlView
