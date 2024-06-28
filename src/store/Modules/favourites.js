const state ={
    favouritesDetails: [],
}
const getters={
    favourite: (state) => state.favouritesDetails

}
const actions= {
    addToFavourites(context, payload){
		const favourite = context.state.favouritesDetails
		favourite.push(payload)
		context.commit('UPDATE_FAVOURITE', favourite)
    },
    removeFromFavourites(context, payload){
		const favourite = context.state.favouritesDetails
		favourite.pop(payload)
		context.commit('UPDATE_FAVOURITE', favourite)
    }


}
const mutations={
    UPDATE_FAVOURITE(state, payload) {
		state.favouritesDetails = payload;
	  },

}
export default{
    state,
    getters,
    actions,
    mutations
}