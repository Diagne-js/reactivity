export let effect = (callback, dependences, callNow = true, name = null) => {
  if(typeof dependences == 'string') dependences = [dependences]
  if(callNow) callback()
  effects.push({callback,  dependences, name})
}

effect = 'function effect'+ effect.toString().replace('=>', ' ').trim()
