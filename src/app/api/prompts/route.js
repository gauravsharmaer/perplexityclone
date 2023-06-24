import { NextResponse } from "next/server"
import data from "./data.json"


//to get all data
export async function GET(request){
    return NextResponse.json(data)
}

//tio get a single prompt data
export async function POST(request){
    const {message} =  await request.json();
    const result = data.prompts.find((item) => item.prompt === message);
      if(!result){
        return NextResponse.json({message:"no such prompt"})
      }
 
    return NextResponse.json(result)
}