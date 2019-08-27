import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import barang from './barang'
import customer from './customer'
import pembelian from './pembelian'
import penjualan from './penjualan'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      user,
      barang,
      penjualan,
      pembelian,
      customer
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
