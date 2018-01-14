import { FunctionalComponent } from "preact"
import { ActionBar, ActivityIndicator, Button, Label, Page, ScrollView,
  StackLayout, TextView } from "preact-nativescript-components"
import { goBack, h } from "preact-to-nativescript"

const PageActivityIndicator: FunctionalComponent<any> = () => {
  return (
    <Page cssFile="demoApplication/pages/start.css">
      <StackLayout>
        <Label text="Busy Label" className="bordered" />
        <ActivityIndicator busy={true} />
        <TextView text="Not Busy TextView" />
        <ActivityIndicator busy={false} />
        <Button text="Back" onTap={goBack} />
      </StackLayout>
    </Page>
  )
}

export default PageActivityIndicator
