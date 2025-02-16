import { Book } from "./data";

const SmallListItem = (item:Book) => {
    <div>
        <h2>{item.name}</h2>
        <p>{item.title}</p>
    </div>
};

export default SmallListItem;