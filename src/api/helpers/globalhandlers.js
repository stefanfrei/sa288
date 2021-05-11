// Copyright (c) 2021 Stefan Frei <stefan.a.frei@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import getCompState from '/src/store/compstate'

export const initGlobalHandlers = (vm) => {
  const state = getCompState()

  const ignoredTags = [
    'INPUT'
  ]
  const handleKeyup = (evt) => {
    const keyCode = evt.keyCode
    if (keyCode == 27) {
      state.comps.value.search.display = false
      return false
    } else {
      if (ignoredTags.includes(evt.target.tagName)) return false
      if (keyCode == 83) {
        state.comps.value.search.display = true
        vm.$nextTick(function () {
          document.getElementById("search").focus();
        })
        return false
      }
    }
  }

  window.addEventListener('keyup', handleKeyup)
}

