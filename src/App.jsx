import PrincipalCat from "./PrincipalCat";
import CatList from "./CatList";
import InteractBtns from "./InteractBtns";

import catsF from "./data/images.json";

import {useState} from "react";

function App() {
    const [cats, setCats] = useState(catsF);
    console.log(cats);

    const [selectedCat, setSelectedCat] = useState(cats[0]);
    const selectedCatIndex = cats.findIndex(cat => cat === selectedCat);

    return (
    <>

        <PrincipalCat link={selectedCat.url}/>

        <InteractBtns cats={cats} setCats={setCats} selectedCatIndex={selectedCatIndex} setSelectedCat={setSelectedCat}/>

        <CatList cats={cats} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
        
    </>
    )
}

export default App;
