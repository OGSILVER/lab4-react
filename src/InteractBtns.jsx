import CatList from "./CatList";
import "./InteractBtns.css"


function InteractBtns({ cats, setCats, selectedCatIndex, setSelectedCat }) {
    console.log(selectedCatIndex);

    function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

    return (
        <>
        <div className="btns">
            <div className="btn" onClick={() => setSelectedCat(cats[Math.floor(Math.random() * cats.length)])}><img src="src/assets/random1.svg" alt="" /></div>
            <div className="btn" onClick={() => setCats(shuffle([...cats]))}><img src="/src/assets/random2.svg" alt="" /></div>
            <div className="btn" onClick={() => selectedCatIndex > 0 ? setSelectedCat(cats[selectedCatIndex - 1]):setSelectedCat(cats[cats.length - 1])}><img src="src/assets/previous.svg" alt="" /></div>
            <div className="btn" onClick={() => selectedCatIndex < cats.length - 1 ? setSelectedCat(cats[selectedCatIndex + 1]):setSelectedCat(cats[0])}><img src="src/assets/next.svg" alt="" /></div>
        </div>
        </>
    )

}

export default InteractBtns;