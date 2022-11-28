import React from 'react';

const BookNowModal = ({ name, email, itemname, phone, price, meetinglocation, modalData: modalbook, successAction, bookHandleButton }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-book" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box">
                    <label htmlFor="confirmation-book" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <>
                        <form className="space-y-12 ng-untouched ng-pristine ng-valid mt-5">
                            <div className="space-y-4">
                                <label for="title" className="block mb-2 text-xl text-black">Do you want to book a meeting?</label>
                                <span>Then submit with your information.</span>
                                <div>
                                    <p className='font-semibold text-lg'>
                                        Item name: {itemname}
                                    </p>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg'>
                                        Price: {price}
                                    </p>
                                </div>
                                <div>
                                    <input type="text" name="title" defaultValue={name} disabled id="title" placeholder="Book Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
                                </div>
                                <div>
                                    <input type="text" name="title" defaultValue={email} disabled id="title" placeholder="Book Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
                                </div>
                                <div>
                                    <input type="text" name="title" defaultValue={phone} disabled id="title" placeholder="Book Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
                                </div>
                                <div>
                                Meeting Location:
                                    <input type="text" name="title" defaultValue={meetinglocation} disabled id="title" placeholder="Book Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
                                </div>
                                <div>
                                You Comment:
                                    <textarea type="text" name="title"placeholder="Short Comment" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
                                </div>
                            </div>
                        </form>
                    </>
                    <div className="modal-action flex justify-center items-center">
                        <label onClick={() => bookHandleButton(modalbook)} htmlFor="confirmation-book" className="btn btn-lg text-white bg-green-600 text-center">{successAction}</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookNowModal;