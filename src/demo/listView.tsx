import {
  Button, HtmlView, Image, Label, ListView, Page, ScrollView, StackLayout, TextView
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueViaEvent } from "./helpers"

class PageListView extends Component<any, any> {
  private setValue: Function
  constructor(props: any) {
    super(props)
    this.state = {value: ["first", "second"]}
    this.setValue = setValueViaEvent(this)
  }
  public render() {
    const items = this.state.value
    return (
      <Page>
        <StackLayout>
          <ListView
            items={items}
            onItemLoading={(args: any) => {
              const parent = args.view && args.view.parentNode ? args.view.parentNode : null
              args.view = render(<Label text={items[args.index]} />, parent, args.view)
            }}
          />
          <Button text="Set List to 2 Entries" onTap={this.setValue.bind(this, {value: ["first", "second"]})} />
          <Button text="Set List to 5 Entries" onTap={this.setValue.bind(this, {value: ["completely", "second", "different", "list", "entries"]})} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageListView
