import BookInfo from "./BookInfo";
import DataSource from "./DataSource";

const getBooks = () => {
    return [{
        name: 'teste',
        pages: 100,
        title: 'best book', 
        price: 10
    }]
}

const ContainerComponents = () => {

    return (
        <DataSource getData={getBooks} render={(resource) => <BookInfo book={resource}/>} />
    );
}

export default ContainerComponents;