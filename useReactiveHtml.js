export const $useReactiveHtml = (s, value, d) => {
  let text
  block(() => {
    text = document.createTextNode(value())
    let tracker = document.querySelector(s)
    tracker.parentElement.replaceChild(text, tracker)
  })
  effect(() => {
    text.textContent = value()
  }, d, false)
}
