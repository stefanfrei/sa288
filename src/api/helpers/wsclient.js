// Copyright (c) 2021 Stefan Frei <stefan.a.frei@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import 'ws'

export const initWsClient = () => {
  const client = new WebSocket('ws://localhost:4220')

  client.onopen = evt => {
    console.log("[open] Connection established");
    console.log("Sending to server");
    client.send("ping");
  }

  client.onmessage = evt =>  {
    console.log(`[message] Data received from server: ${evt.data}`);
  }
  return client
}
