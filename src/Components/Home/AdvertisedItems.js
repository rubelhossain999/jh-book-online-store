import { useQuery } from '@tanstack/react-query';
import ProductCards from '../../ShareComponent/ProductCards/ProductCards';

const AdvertisedItems = () => {
    const { data: userBooksData = [] } = useQuery({
        queryKey: ["userBooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/users');
            const data = res.json();
            return (data);
        }
    });

    const { data: adsBookItems = [] } = useQuery({
        queryKey: ['adsBookItems'],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/books/adsrun');
            const data = res.json();
            return (data);
        }
    });

    console.log(adsBookItems, userBooksData);

    return (
        <div className='max-w-[1340px] mx-auto text-accent mt-10'>
            <div className="container mx-auto p-4 my-6 space-y-2">
                <h2 className="text-3xl font-bold">Top Selling Items</h2>
                <p className="text-xs font-bold">Advertised</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-3 gap-3'>

                    {
                        adsBookItems?.map(adsBookItem =>
                            <>
                                <ProductCards BooksData={adsBookItem}></ProductCards>
                            </>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;