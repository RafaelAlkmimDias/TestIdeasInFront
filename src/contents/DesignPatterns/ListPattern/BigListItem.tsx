import { Book } from "./data";


const BigListItem = (item:Book) => {
    <div>
        <h2>{item.name}</h2>
        <p>{item.title}</p>
        <div>
            <p>pages: {item.pages}</p>
            <p>price: ${item.price}</p>
        </div>
    </div>
}

export default BigListItem