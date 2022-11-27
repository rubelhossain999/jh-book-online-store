import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';
import { useQuery } from '@tanstack/react-query';

const AddProducts = ({ userinfo }) => {
  const { user } = useContext(AuthContextAPI);
  const navigate = useNavigate();

  const { data: sellersdatafromdash = [] } = useQuery({
    queryKey: ["sellersdatafromdash"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/regisusers?email=${user?.email}`);
      const data = res.json();
      return (data);
    }
  });


  const handleaddnewBook = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const beforeprice = form.beforeprice.value;
    const location = form.location.value;
    const usetime = form.usetime.value;
    const status = form.status.value;
    const image = form.image.value;
    const categorie = form.categorie.value;
    const authName = form.authName.value;


    const allBookdata = {
      title,
      description,
      price,
      status,
      beforeprice,
      location,
      usetime,
      image,
      email: user?.email,
      categorie,
      authName,
      photoURL: user.photoURL,
      postTime: new Date()
    }

    console.log(allBookdata);

    fetch('https://book-resale-server-site.vercel.app/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allBookdata)

    })
      .then(res => res.json())
      .then(data => {
        toast.success('New Book Added Is Success!!');
        form.reset('');
        navigate('/dashboard/myproduct')
      })
      .catch(err => {
        console.log(err);
      })

    /// Add Product on the Mongodb

    fetch('https://book-resale-server-site.vercel.app/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
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
              <label for="price" className="block mb-2 text-xl text-black">Current Price</label>
              <input type="number" name="price" id="price" placeholder="Current Price" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
              <span className='text-xs text-secondary'>If you want to sell the book for free, write the price 00.</span>
            </div>
            <div>
              <label for="beforeprice" className="block mb-2 text-xl text-black">Before price</label>
              <input type="number" name="beforeprice" id="beforeprice" placeholder="Before Price" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
            <div>
              <label for="location" className="block mb-2 text-xl text-black">Location</label>
              <input type="text" name="location" id="location" placeholder="Selling location" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
            <div>
              <label for="usetime" className="block mb-2 text-xl text-black">Use Time</label>
              <input type="text" name="usetime" id="usetime" placeholder="Use Time: 1 year" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required />
            </div>
            <div>
              <label for="image" className="block mb-2 text-xl text-black">Book Cover Image</label>
              <input type="text" name="image" id="image" placeholder='Cover Image URL' className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
            </div>
            <div>
              <label for="image" className="block mb-2 text-xl text-black">User Status</label>
              {
                sellersdatafromdash?.map( sellersdatafromdash => 
                  <input key={sellersdatafromdash._id} type="text" name="status" defaultValue={sellersdatafromdash.verified} id="status" placeholder='Unverified' className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" disabled/>
                  )
              }
            </div>
            <div>
              <label for="categorie" className="block mb-2 text-xl text-black">Select Categories</label>
              <select name="categorie" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" required>
                <option disabled selected>Categories Lists</option>
                <option value='freebook'>Free Book</option>
                <option value='pdfbook'>PDF E-Book</option>
                <option value='premiumbook'>Premium Book</option>
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