import {
  ActionBar, Button, Label, ListPicker, ListView, Page, Progress, Slider, StackLayout
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueViaEvent } from "./helpers"

class PageSlider extends Component<any, any> {
  public setValue: Function
  constructor(props: any) {
    super(props)
    this.setValue = setValueViaEvent(this)
  }
  public render() {
    return (
      <Page>
        <ActionBar title="Slider" />
        <StackLayout>
          <Slider onValueChange={this.setValue} value={this.state.value} maxValue={120} />
          <Label
            text={`(Min: 0, Max: 120) Current Slider Value: ${this.state.value}`}
          />
          <Label
            text={`Slidervalue mapped to Progress`}
          />
          <Progress value={this.state.value} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSlider
