import { FunctionalComponent } from "preact"
import { ActionBar, Button, Label, Page, ScrollView, StackLayout } from "preact-nativescript-components"
import { h, navigateTo } from "preact-to-nativescript"
import PageActionBar from "./actionBar"
import PageActivityIndicator from "./activityIndicator"
import PageCustomRouter from "./customRouter"
import PageDialogs from "./dialogs"
import PageHtml from "./htmlView"
import PageImage from "./image"
import PageListView from "./listView"
import PagePickers from "./pickers"
import PageSearchBar from "./searchBar"
import PageSegmentedBar from "./segmentedBar"
import PageSlider from "./slider"
import PageSwitch from "./switch"
import PageTabView from "./tabView"

const StartPage: FunctionalComponent<any> = () => {
  return (
    <Page>
        <ActionBar text="Preact to Nativescript Menu" />
        <ScrollView>
          <StackLayout>
            <Button text="ActivityIndicator" onTap={navigateTo.bind(null, <PageActivityIndicator />)} />
            <Button text="SearchBar" onTap={navigateTo.bind(null, <PageSearchBar />)} />
            <Button text="Custom-Router" onTap={navigateTo.bind(null, <PageCustomRouter />)} />
            <Button text="Dialogs" onTap={navigateTo.bind(null, <PageDialogs />)} />
            <Button text="Slider" onTap={navigateTo.bind(null, <PageSlider />)} />
            <Button text="Image" onTap={navigateTo.bind(null, <PageImage />)} />
            <Button text="Date- / Time- / List-Picker" onTap={navigateTo.bind(null, <PagePickers />)} />
            <Button text="HtmlView & WebView" onTap={navigateTo.bind(null, <PageHtml />)} />
            <Button text="SegmentedBar" onTap={navigateTo.bind(null, <PageSegmentedBar />)} />
            <Button text="TabView" onTap={navigateTo.bind(null, <PageTabView />)} />
            <Button text="ListView" onTap={navigateTo.bind(null, <PageListView />)} />
            <Button text="Switch" onTap={navigateTo.bind(null, <PageSwitch />)} />
            <Button text="ActionBar" onTap={navigateTo.bind(null, <PageActionBar />)} />
          </StackLayout>
        </ScrollView>
    </Page>
  )
}

export default StartPage
