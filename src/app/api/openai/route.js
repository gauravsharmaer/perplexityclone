import openai from "@/utils/openai";
import { NextResponse } from "next/server";
//this is used to send data to frontend

export async function POST(request){
    const body = await request.json();
    
    const completion =await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user" , content: body.message
            }
        ],
        max_tokens: 150,
        temperature: 0.9,
    })
       
    const response = completion.data.choices[0].message.content
    return NextResponse.json(response)
}






