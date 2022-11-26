import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';

const AddProducts = () => {
  const { user } = useContext(AuthContextAPI);

  const handleaddnewBook = event => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.value;
    const categorie = form.categorie.value;
    const authName = form.authName.value;


    // /// Image Info
    // const formData = new FormData();
    // formData.append('image', image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgHost}`;
    // fetch(url, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(res => res.json())
    //   .then(imgData => {
    //     setCoverImage(imgData.data.url);
    //   })

    const allBookdata = {
      title,
      description,
      price,
      image,
      email: user?.email,
      categorie,
      authName,
      photoURL: user.photoURL,
      postTime: new Date()
    }

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
      })
      .catch(err => {
        console.log(err);
      })

    /// Add Product on the Mongodb

    fetch('https://book-resale-server-site.vercel.app/users', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(allBookdata)
    })
    .then( res=> res.json())
    .then( data => {
      console.log(data);
    })
    .catch( err => {
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
              <label for="image" className="block mb-2 text-xl text-black">Book Cover Image</label>
              <input type="text" name="image" id="image" placeholder='Cover Image URL' className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black" />
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