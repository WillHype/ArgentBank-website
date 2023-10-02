import { createSlice } from "@reduxjs/toolkit";

  const userSlice = createSlice ({
    name: "userInfo",
    initialState :{
    id: null,
    email: null,
    isOpen: false,
    userName: null,
    userNameEdit: null,
    firstName: null,
    lastName: null,
    },
    reducers: {
      // Action pour définir le profil utilisateur
      setUserProfile: (state, action) =>{
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      },
      // Action pour basculer l'état "isOpen" (ouvert/fermé)
      toggleOpen: (state) =>{
        state.isOpen = !state.isOpen;
      },
      // Action pour préparer l'édition du nom d'utilisateur
      editUserName: (state) => {
        state.userNameEdit = state.userName;
      },
      setUserNameEdit: (state, action) =>{
        state.userNameEdit = action.payload;
      },
    },
  });

// Exporter les actions générées automatiquement
export const {setUserProfile,toggleOpen,editUserName,setUserNameEdit} = userSlice.actions;


export default userSlice.reducer;