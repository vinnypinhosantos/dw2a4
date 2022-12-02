import { useState } from "react";
import { CaesarForm } from "./CaesarForm";


export function Home () {
   
    return(
        <>
        <span className="text-4xl leading-3 flex justify-center p-10">Cifra de César</span>
        <CaesarForm />
        </>
    )
}