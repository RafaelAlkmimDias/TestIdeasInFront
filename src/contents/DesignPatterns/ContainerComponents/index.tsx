'use client'
import BookInfo from "./BookInfo";
import DataSource from "./DataSource";
import RegularList from "../ListPattern/RegularList";

const getBooks = async () => {
    try{
        const response = await fetch('/api/books');
        const data = await response.json()
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const ContainerComponents = () => {

    return (
        <DataSource getData={getBooks} render={(resource) => {
        return (
            <RegularList itens={resource} sourceName="book" ItemComponent={BookInfo} />
        )}} />
    );
}

export default ContainerComponents;