import {
  Button, DatePicker, HtmlView, Image, Label, ListPicker, ListView, Page, ScrollView,
  StackLayout, TextView, TimePicker
} from "preact-nativescript-components"
import { Component, goBack, h, render } from "preact-to-nativescript"
import { setValueViaEvent } from "./helpers"

const items = [ "firstpick", "morepicks", "which", "one", "will", "it", "be"]

class PagePickers extends Component<any, any> {
  public state: any
  private setDateYear: Function
  private setDateMonth: Function
  private setDateDay: Function
  private setTimeHour: Function
  private setTimeMinute: Function
  private setListPick: Function
  constructor(props: any) {
    super(props)
    this.setDateYear = setValueViaEvent(this, "dateYear")
    this.setDateMonth = setValueViaEvent(this, "dateMonth")
    this.setDateDay = setValueViaEvent(this, "dateDay")
    this.setTimeHour = setValueViaEvent(this, "timeHour")
    this.setTimeMinute = setValueViaEvent(this, "timeMinute")
    this.setListPick = setValueViaEvent(this, "listPick")
  }
  public render() {
    return (
      <Page>
        <ScrollView>
        <StackLayout>
          <DatePicker
            onYearChange={this.setDateYear}
            onMonthChange={this.setDateMonth}
            onDayChange={this.setDateDay}
          />
          <Label
            text={`DatePicker Data (Year: ${this.state.dateYear} Month: ${this.state.dateMonth} Day: ${this.state.dateDay})`}
          />
          <TimePicker
            onHourChange={this.setTimeHour}
            onMinuteChange={this.setTimeMinute}
          />
          <Label
            text={`TimePicker Data (Hour: ${this.state.timeHour} Minute: ${this.state.timeMinute}`}
          />
          <ListPicker
            onSelectedIndexChange={this.setListPick}
            items={items}
          />
          <Label
            text={`ListPicker Data (#${this.state.listPick} ${items[this.state.listPick]})`}
          />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
        </ScrollView>
      </Page>
    )
  }
}

export default PagePickers
