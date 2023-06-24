import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const postquestion = createAsyncThunk(
    'data',
    async(input) =>{
        const response = await fetch(`https://inpharmd-ai.herokuapp.com/api/v2/search?prompt=${input}`,{
            method:"POST",
         
        })

        const jsonResponse = await response.json()
   console.log(jsonResponse)
        return jsonResponse
    }
)

const userSlice = createSlice({
    name:'user',
initialState:{
    prompts:[],
    modelactive:false,
    modelcontent:""

}

,
reducers:{
handlemodel:(state,action)=>{
    state.modelactive=action.payload
},
handlemodelContent:(state,action)=>{
    state.modelcontent=action.payload
}
},
   extraReducers:(builder) =>{
        builder.addCase(postquestion.fulfilled, (state, action) =>{
         state.prompts=action.payload
           
        })      
    }
})

export default userSlice.reducer

export {postquestion}

export const {handlemodel,handlemodelContent} =userSlice.actions
