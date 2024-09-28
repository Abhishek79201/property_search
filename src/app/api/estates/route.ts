import { NextResponse } from "next/server"

export async function GET() {
    return  NextResponse.json({
        estates:[
            {
                id:1,
                name:"villa"
            }
        ]
    })
}