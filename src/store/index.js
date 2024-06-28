import Vuex from 'vuex'

import vehicles from './Modules/vehicles';
import favourites from './Modules/favourites';

export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules:{
        vehicles,
        favourites
    }
    })
    