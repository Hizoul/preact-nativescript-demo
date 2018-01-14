import {
  Button, Label, ListPicker, ListView, Page, SegmentedBar, SegmentedBarItem, StackLayout
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueViaEvent } from "./helpers"

class PageSegmentedBar extends Component<any, any> {
  public setValue: Function
  constructor(props: any) {
    super(props)
    this.setValue = setValueViaEvent(this)
  }
  public render() {
    const childs = [
      <SegmentedBarItem key="1" title="First" />,
      <SegmentedBarItem key="2" title="Second" />
    ]
    if (this.state.value < 2) {
      childs.push(<SegmentedBarItem key="3" title="Third" />)
    } else {
      childs.push(<SegmentedBarItem key="4" title="DiffThird" />)
      childs.push(<SegmentedBarItem key="5" title="Fourth" />)
    }
    return (
      <Page>
        <StackLayout>
          <SegmentedBar onSelectedIndexChange={this.setValue}>
            {childs}
          </SegmentedBar>
          <Label text={`Selected Segment is ${this.state.value}`} />
          <Label text={`If selected segment > 2 contents of SegmentBar will change dynamically`} />
          <Label text={`TODO: on dynamic change correctly set selectedIndex highlight`} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSegmentedBar
