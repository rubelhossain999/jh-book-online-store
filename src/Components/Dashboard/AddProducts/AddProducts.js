import React, { useContext } from 'react';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';

const AddProducts = () => {
  const { user } = useContext(AuthContextAPI);


  const handleaddnewBook = event => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const categorie = form.categorie.value;
    const authName = form.authName.value;

    const allBookdata = {
      title,
      description,
      price,
      categorie,
      authName,
      postTime: new Date()
    }
    console.log(allBookdata);

    fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allBookdata)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })


  }

  return (
    <div>
      <h2 className='text-3xl text-accent font-semibold'>Add New Product</h2>
      <div>
        <form onSubmit={handleaddnewBook} className="space-y-12 ng-untouched ng-pristine ng-valid mt-5">
          <div className="space-y-4">
            <div>
              <label for="title" className="block mb-2 text-xl text-black">Book Title</label>
              <input type="text" name="title" id="title" placeholder="Book Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
            <div>
              <label for="description" className="block mb-2 text-xl text-black">Short Description</label>
              <textarea type="text" name="description" id="description" placeholder="Book Description" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
            <div>
              <label for="price" className="block mb-2 text-xl text-black">Price</label>
              <input type="text" name="price" id="price" placeholder="Price" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
              <span className='text-xs text-secondary'>If you want to sell the book for free, write the price 00.</span>
            </div>
            <div>
              <label for="categorie" className="block mb-2 text-xl text-black">Select Categories</label>
              <select name="categorie" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required>
                <option disabled selected>Categories Lists</option>
                <option value='freebook'>Free Book</option>
                <option value='freebook'>PDF E-Book</option>
                <option value='freebook'>Premium Book</option>
              </select>
            </div>
            <div>
              <label for="authName" className="block mb-2 text-xl text-black">Author Name</label>
              <input type="text" name="authName" id="authName" placeholder="Writer Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
            <div>
              <label for="email" className="block mb-2 text-xl text-black">Email</label>
              <input type="email" defaultValue={user?.email} disabled name="email" id="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 font-semibold rounded-md bg-secondary text-white">Add Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;