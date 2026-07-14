import './MemeGen.css'
import Meme from './components/Meme';
import Header from "./components/header";

export default function MemeGen(){
    return(
        <div>
            <Header/>
            <Meme/>
        </div>
    )
}