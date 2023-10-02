import { createSlice } from "@reduxjs/toolkit";

// Récupère le token d'authentification depuis le stockage local du navigateur
const accessToken = localStorage.getItem('token');
// Définit l'état initial du Slice
const initialState = {
    token: accessToken || null, // Utilise le token stocké localement s'il existe, sinon initial à null
};
// On crée le Slice d'authentification
const authSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        loginSuccess: (state, action) => {
            // Action déclenchée lors d'une connexion réussie
            // Stocke le token dans le store
            state.token = action.payload; // Met à jour le token dans l'état du Slice
            localStorage.setItem('token', action.payload); // Stocke le token dans le stockage local du navigateur
        },
        logout: (state) => {
            // Action déclenchée lors de la déconnexion
            // Réinitialise le token dans l'état du Slice
            state.token = null;
            return state
          },
    },
});
export const {loginSuccess, logout} = authSlice.actions;

export default authSlice.reducer;