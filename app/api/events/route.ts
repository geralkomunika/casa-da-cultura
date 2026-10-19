import {NextResponse} from "next/server";
import {createClient} from "@supabase/supabase-js";
export const dynamic = "force-dynamic";
export async function GET(){
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!key)return NextResponse.json({events:[],configured:false});
  const db=createClient(url,key,{auth:{persistSession:false}});
  const {data,error}=await db.from("events").select("id,title,category,description,venue,starts_at,ticket_url").eq("published",true).gte("starts_at",new Date().toISOString()).order("starts_at",{ascending:true}).limit(100);
  if(error)return NextResponse.json({error:"Não foi possível carregar a programação."},{status:500});
  return NextResponse.json({events:data||[]});
}