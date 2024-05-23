import WraithPhon from "./../Resources/Images/WraithPhon.jpg"
import Wraith from "./../Resources/Music/Wraith.mp3"


export interface SinsMock {
    music: string,
    particle: string,
    background:string,
    names: [string]
    ID: number,
    
 }
 
 export const SinsArr: SinsMock[] = [
     {
        music: Wraith,
        particle: "...",
        background: WraithPhon,
        names: [""],
        ID: 2,
     },
 
 ]
 
 