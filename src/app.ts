import { Preact, render } from "preact-to-nativescript"
import * as application from "tns-core-modules/application"

const h = Preact.h

application.start({
  create: () => {
    return render(h("page", {}, [h("stackLayout", {}, [h("label", {text: "MyCOntent"}, [])])]))
  }
})
