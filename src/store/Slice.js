import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const Login=createAsyncThunk("login",async(input)=>{
    const body = new URLSearchParams({
        email:input.email,
        password:input.password
      });
    const response = await fetch("https://staging-mercer-inpharmd.herokuapp.com/api/v2/login",{
        method:"POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/vnd.api+json'
          },
          body:body
    })
    const json=response.json()
    return json
})


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





export const aiSummary = createAsyncThunk(
    'ai_summary',
    async(input) =>{
        const response = await fetch(`https://inpharmd-ai.herokuapp.com/api/v2/prompt_process/ai_summary?prompt_result_id=${input}`,{
            method:"PUT",
         
        })

        const jsonResponse = await response.json()
   console.log(jsonResponse)
        return jsonResponse
    }
)




export const updatequestion = createAsyncThunk("user/updatequestion",async(initialPost)=>{
    try {
        

    
        const response = await axios.put("https://inpharmd-ai.herokuapp.com/api/v2/prompt_process/like", initialPost);

      // Get the updated post from the response
      const updatedPost = response.data;


      return updatedPost;
       
    
       
      } 
      
      catch (err) {
        return err.message;
      }
})






export const Accuracymodel = createAsyncThunk("user/accuracyModel",async(initialPost)=>{
    try {
        

    
        const response = await axios.put("https://inpharmd-ai.herokuapp.com/api/v2/prompt_process/flag_result", initialPost);

      // Get the updated post from the response
      const updatedPost = response.data;


      return updatedPost;
       
    
       
      } 
      
      catch (err) {
        return err.message;
      }
})

const userSlice = createSlice({
    name:'user',
initialState:{
    prompts:[],
    modelactive:false,
    modelcontent:"",
    status:'idle',
    ai_summary_status:"loading",
    ai_summary:{},
    authentication:{}


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
        builder
        .addCase(postquestion.pending,(state,action)=>{
            state.status ="loading"
          })
        
        .addCase(postquestion.fulfilled, (state, action) =>{
            state.status = "succeeded"
             state.prompts=action.payload    
           
        })    
        
        .addCase(updatequestion.fulfilled, (state, action) =>{
            state.status = "succeeded"
       let index=  state.prompts.prompts.findIndex((post)=>post.id === action.payload.id)
        state.prompts.prompts[index]=action.payload; }) 



        .addCase(Accuracymodel.fulfilled, (state, action) =>{
            state.status = "succeeded"
       let index=  state.prompts.prompts.findIndex((post)=>post.id === action.payload.id)
        state.prompts.prompts[index]=action.payload;}) 

           
        .addCase(aiSummary.fulfilled, (state, action) =>{
            
            state.status = "succeeded"
             state.ai_summary=action.payload   
              state.ai_summary_status="succeeded"
           
        })  

            

        .addCase(Login.fulfilled, (state, action) =>{
            state.status = "succeeded"
             state.authentication=action.payload    
           
        })    
   
          
    }
})

export default userSlice.reducer

export {postquestion}
export const selectAllPosts =(state)=>state.user.prompts
export const getUserStatus =(state)=>state.user.status
export const getaistatus=(state)=>state.user.ai_summary_status
export const getauthentication=(state)=>state.user.authentication
export const {handlemodel,handlemodelContent} =userSlice.actions
