import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import ProductCards from '../../ShareComponent/ProductCards/ProductCards';
import Loader from './Loader/Loader';

const SecondHandBooks = () => {
    const { user, useloader } = useContext(AuthContextAPI);

    const { data: BooksData = [] } = useQuery({
        queryKey: ["BooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/booksdata');
            const data = res.json();
            return (data);
        }
    });

console.log(BooksData);

    return (
        <>
            {useloader ?
                <>
                    <Loader></Loader>
                </>
                :
                <>
                    {
                        BooksData?.map(BooksData =>
                            <ProductCards BooksData={BooksData}></ProductCards>
                        )
                    }
                </>}
        </>
    );
};

export default SecondHandBooks;