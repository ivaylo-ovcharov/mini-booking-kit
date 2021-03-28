const state = { 
  bookings: []
}

const getters = { 
  getBookings: state => state.products,
//   emptyCart:  state => state.products.length ? false : true,
//   getOrderLength (state) {
//     const products = state.products
//     let baseketLength = 0
//     products.map((product) => {
//       baseketLength = baseketLength + product.quantity
//     })
//     return baseketLength
//   },
//   getOrderPrice (state) {
//     const products = state.products
//     let basketPrice = 0
//     products.map((product) => {
//       basketPrice = basketPrice + product.quantity * product.price
//     })
//     return basketPrice
//   },
}

const mutations = { 
  setBookings (state, products) {
    state.products = products
  },
  //   addProductToCart (state, product) {
  //     product.quantity = parseInt(product.quantity) || 1
  //     const record = state.products.find(i => i.id === product.id)

  //     if(!record) {
  //       state.products.push({
  //         quantity: product.quantity,
  //         ...product
  //       })
  //     } else {
  //       record.quantity = record.quantity + product.quantity
  //     }

  //     Cookies.set('cart', state.items)
  //   },
  //   removeProduct (state, product) {
  //     const index = state.products.findIndex(i => i.id === product.id)
  //     state.products.splice(index, 1)
  //   }

}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}