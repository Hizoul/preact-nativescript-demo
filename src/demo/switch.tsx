import {
  ActionBar, Button, Label, ListPicker, ListView, Page, Progress, StackLayout, Switch
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueViaEvent } from "./helpers"

class PageSwitch extends Component<any, any> {
  public setS1: Function
  public setS2: Function
  public state: any
  constructor(props: any) {
    super(props)
    this.setS1 = setValueViaEvent(this, "s1")
    this.setS2 = setValueViaEvent(this, "s2")
  }
  public getVal = (key: any) => {
    const val = this.state[key]
    if (val === undefined || val === null) {
      return "false"
    }
    return String(val)
  }
  public render() {
    return (
      <Page>
        <ActionBar text="Switch" />
        <StackLayout>
          <Label
            text={`Switch #1 value is ${this.getVal("s1")}`}
          />
          <Switch
            checked={this.getVal("s1")}
            onCheckedChange={this.setS1}
          />
          <Label
            text={`Switch #2 value is ${this.getVal("s2")}`}
          />
          <Switch
            checked={this.getVal("s2")}
            onCheckedChange={this.setS2}
          />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSwitch
