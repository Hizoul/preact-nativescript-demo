const setValueViaEvent = (thisRef: any, valKey: string = "value", eventKey: string = "value") => {
  return (ev: any) => {
    thisRef.setState({[valKey]: ev[eventKey]})
  }
}
const setValueTrigger = (thisRef: any, valKey: string = "value") => {
  return (ev: any) => {
    thisRef.setState({[valKey]: true})
    setTimeout(() => {
      thisRef.setState({[valKey]: false})
    }, 5000)
  }
}

export {
  setValueViaEvent,
  setValueTrigger
}
