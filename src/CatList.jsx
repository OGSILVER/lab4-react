import CatCard from "./CatCard";
import "./CatList.css";

function CatList({ cats, selectedCat, setSelectedCat }) {



    return (
        <ul className="cat-list">
            {cats.map((cat) => (

                <li key={cat.id} onClick={() => setSelectedCat(cat)} className={selectedCat.id === cat.id ? "selected cat-list-item" : "cat-list-item"} >
                <CatCard title={cat.title} link={cat.url} />
                </li>

            ))}
        </ul>
    );
}


export default CatList; 