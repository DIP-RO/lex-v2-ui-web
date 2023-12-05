

const DownloadAppPage = () => {
    return (
      
              <div className="container mx-auto p-5">
                <h1 className="text-3xl font-bold text-center mb-5">Download Our App</h1>
          
                <div className="flex flex-col items-center">
                  <p className="text-lg text-center mb-5">
                    Get our app on your mobile device to enjoy all the features and
                    benefits.
                  </p>
          
                  <div className="flex space-x-4">
                    <a
                      href="#android-download-link" // Provide the actual download link
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                    >
                      Download for Android
                    </a>
                    <a
                      href="#ios-download-link" // Provide the actual download link
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Download for iOS
                    </a>
                  </div>
                </div>
              </div>
    );
};

export default DownloadAppPage;