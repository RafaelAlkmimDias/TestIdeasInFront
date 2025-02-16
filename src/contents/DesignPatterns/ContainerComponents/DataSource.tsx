import React, {useState, useEffect} from "react";


interface DataSourceProps {
    getData: () => {};
    render: (resource: any) => React.ReactNode;
}

const DataSource = ({ getData, render}:DataSourceProps) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setResource(data);
        };

        fetchData();
    }, [getData]);

    return render(resource);
};

export default DataSource;