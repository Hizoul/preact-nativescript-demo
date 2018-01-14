import {
  Button, HtmlView, Image, Label, Page, ScrollView, StackLayout, TextView, WebView
} from "preact-nativescript-components"
import { Component, goBack, h } from "preact-to-nativescript"

class PageImage extends Component<any, any> {
  public render() {
    return (
      <Page cssFile="start.css">
        <StackLayout>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png" />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageImage
