import {
  ActionBar, Button, Label, ListPicker, ListView, Page, Progress, StackLayout, TabView, TabViewItem
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueViaEvent } from "./helpers"

class PageTabView extends Component<any, any> {
  public setValue: Function
  public state: any
  constructor(props: any) {
    super(props)
    this.setValue = setValueViaEvent(this)
  }
  public render() {
    return (
      <Page>
        <ActionBar text="Tabs" />
        <StackLayout>
          <Label text={`Selection is ${this.state.value}`} />
          <TabView selectedIndex={this.state.value} onSelectedIndexChange={this.setValue}>
            <TabViewItem title="Tab1">
              <StackLayout>
                <Label text="Tab#1Content" />
              </StackLayout>
            </TabViewItem>
            <TabViewItem title="Tab2">
              <StackLayout>
                <Label text="Tab#2 More Content" />
              </StackLayout>
            </TabViewItem>
          </TabView>
        </StackLayout>
      </Page>
    )
  }
}

export default PageTabView
