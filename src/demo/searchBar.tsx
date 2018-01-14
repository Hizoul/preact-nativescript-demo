import {
  Button, Label, ListPicker, ListView, Page, SearchBar, StackLayout
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueTrigger, setValueViaEvent } from "./helpers"

class PageSearchBar extends Component<any, any> {
  public setValue: Function
  public onClear: Function
  public onSubmit: Function
  constructor(props: any) {
    super(props)
    this.setValue = setValueViaEvent(this)
    this.onClear = setValueTrigger(this, "cleared")
    this.onSubmit = setValueTrigger(this, "submitted")
  }
  public render() {
    return (
      <Page>
        <StackLayout>
          <SearchBar
            title="MyTitle"
            text={this.state.value}
            hint="Search"
            onClear={this.onClear}
            onTextChange={this.setValue}
            onSubmit={this.onSubmit}
          />
          <Label
            text={`Current state-controlled SearchBar Input is:`}
          />
          <Label
            text={JSON.stringify(this.state.value)}
          />
          <Label
            text={this.state.cleared ? "SearchBar was recently cleared" : "SearchBar clear button wasn't pressed recently"}
          />
          <Label
            text={this.state.submitted ? "SearchBar was recently submitted" : "SearchBar content wasn't recently submitted"}
          />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSearchBar
