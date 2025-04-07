export let update = (cb, old, name, exept = 'null') => {
  let newVal = cb()
  if (typeof newVal == 'function') {
    newVal = newVal(old)
  }
  for (let effect of effects) {
    if (effect.dependences.includes(name) && effect.name !== exept) {
      effect.callback(old, newVal)
    }
  }
}
update = 'function update' + update.toString().replace('=>', ' ').trim()
