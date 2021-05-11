// Copyright (c) 2021 Stefan Frei <stefan.a.frei@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export const initMutationObserver = () => {
  const observer = new MutationObserver(list => {
    console.log(list)
  })
  observer.observe(document.body, { attributes: true, childList: true, subtree: true })
}
