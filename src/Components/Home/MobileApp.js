import React from 'react';

const MobileApp = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg sm:text-center sm:mx-auto">
        <p className="text-base text-gray-700 md:text-lg">
        Our website has apps for your convenience. Where you can easily read PDF books and easily order any kind of secondhand and new books from your phone and get them at home.
        </p>
        <hr className="my-8 border-gray-300" />
        <div className="flex items-center mb-3 sm:justify-center">
          <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
          <a href="/" className="transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
        </div>
        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
        Download apps quickly and read your academic and entertainment books.
        </p>
      </div>
    </div>
    );
};

export default MobileApp;