import { h, Preact, render } from "preact-to-nativescript"
import * as application from "tns-core-modules/application"
import * as frame from "tns-core-modules/ui/frame"
import DemoApp from "./demo/start"

application.start({
  create: () => {
    return render(<DemoApp />, null)
  }
})
