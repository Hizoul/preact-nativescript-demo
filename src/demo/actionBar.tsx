
import { FunctionalComponent } from "preact"
import {
  ActionBar, ActionItem, Button, Label, Page, ScrollView, StackLayout, TextView
} from "preact-nativescript-components"
import { goBack, h } from "preact-to-nativescript"

const PageActionBar: FunctionalComponent<any> = () => {
  return (
    <Page>
      <ActionBar>
        <StackLayout>
          <Label text="CustomBar" />
        </StackLayout>
        <ActionItem>
          <StackLayout>
            <Label text="CustomAction" />
          </StackLayout>
        </ActionItem>
        <ActionItem text="s" android={{systemIcon: "ic_menu_search"}} />
      </ActionBar>
      <StackLayout>
        <TextView text="ActionItem systemIcon and navigationbutton not showing otherwise fine" />
        <Button text="Back" onTap={goBack} />
      </StackLayout>
    </Page>
  )
}

export default PageActionBar
