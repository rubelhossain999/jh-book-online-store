import { Link } from 'react-router-dom';

const Userprofile = ({ BooksData }) => {
    return (
        <div>

            {BooksData.status !== "verified" ?

                <>
                    <div className="relative flex-shrink-0 border-2 border-double border-red-500 rounded-full">
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 border rounded-full text-gray-100 border-gray-900"></span>
                        <Link><img src={BooksData.photoURL} alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" /></Link>
                    </div>
                </>
                :
                <>
                    <div className="relative flex-shrink-0 border-2 border-double border-green-600 rounded-full">
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-gray-100 border-gray-900"></span>
                        <Link><img src={BooksData.photoURL} alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" /></Link>
                    </div>
                </>}
        </div>
    );
};

export default Userprofile;