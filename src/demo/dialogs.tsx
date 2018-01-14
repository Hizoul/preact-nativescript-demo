import {
  Button, HtmlView, Label, Page, ScrollView, StackLayout, TextView, WebView
} from "preact-nativescript-components"
import { Component, goBack, h } from "preact-to-nativescript"
import * as dialogs from "tns-core-modules/ui/dialogs"

const optionsAction = {
  title: "Race Selection",
  message: "Choose your race",
  cancelButtonText: "Cancel",
  actions: ["Human", "Elf", "Dwarf", "Orc"]
}

const optionsConfirm = {
  title: "Race Selection",
  message: "Are you sure you want to be an Elf?",
  okButtonText: "Yes",
  cancelButtonText: "No",
  neutralButtonText: "Cancel"
}

const optionsLogin = {
  title: "Login",
  message: "Login",
  username: "john_doe",
  password: ""
}

const optionsPrompt = {
  title: "Name",
  defaultText: "Enter your name",
  inputType: dialogs.inputType.text
}

const optionsAlert = {
  title: "Race Selection",
  message: "Race Chosen: Elf",
  okButtonText: "OK"
}

const dialogResultHandler = (result: any) => {
  dialogs.alert({title: "Result", message: "Result of Previous Dialog: " + result})
}
class PageDialogs extends Component<any, any> {
  public render() {
    return (
      <Page>
        <ScrollView>
          <StackLayout>
            <Button text="Action Dialog" onTap={() => {
              dialogs.action(optionsAction).then(dialogResultHandler)
            }} />
            <Button text="Confirm Dialog" onTap={() => {
              dialogs.confirm(optionsConfirm).then(dialogResultHandler)
            }} />
            <Button text="Login Dialog" onTap={() => {
              dialogs.login(optionsLogin).then(dialogResultHandler)
            }} />
            <Button text="Prompt Dialog" onTap={() => {
              dialogs.prompt(optionsPrompt).then(dialogResultHandler)
            }} />
            <Button text="Alert Dialog" onTap={() => {
              dialogs.alert(optionsAlert)
            }} />
            <Button text="Back" onTap={goBack} />
          </StackLayout>
        </ScrollView>
      </Page>
    )
  }
}

export default PageDialogs
