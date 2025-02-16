import React from "react";

interface RegularListProps {
    itens: any[];
    sourceName: string;
    ItemComponent: React.FC<any>;
}

const RegularList = ({itens, sourceName, ItemComponent}:RegularListProps) => {
    return(
        <>
            {itens.map((item, index) => <ItemComponent key={index} {...{ [sourceName]: item}} />)}
        </>
    )
}

export default RegularList;