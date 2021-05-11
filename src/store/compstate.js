// Copyright (c) 2021 Stefan Frei <stefan.a.frei@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { reactive, toRefs } from "vue";

const comps = {
    search: {
        display: false
    }
}

const state = reactive({
    comps,
});

export default function getCompState() {
    

    return {
        ...toRefs(state)
    }
}