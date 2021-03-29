const state = { 
  bookings: [{
    id: 1,
    firstName: 'MyFirst',
    lastName: 'Booking',
    date: '2021-03-29'
  }, {
    id: 2,
    firstName: 'MySecond',
    lastName: 'Booking',
    date: '2021-03-30'
  }]
}

const getters = { 
  getBookings: state => state.bookings
}

const mutations = { 
  addBooking (state, booking) {
    state.bookings.push({
      id: state.bookings.length + 1,
      ...booking
    })
  },
  removeBooking (state, productId) {
    const index = state.bookings.findIndex(i => i.id === productId)
    state.bookings.splice(index, 1)
  }

}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}