const Home = () => {
  return (
      <div className="min-h-screen bg-gray-900 p-8 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-extrabold text-white mb-16">Discover Our Platform!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              <FeatureCard 
                  title="Efficient Task Tracking" 
                  description="Easily manage and streamline your tasks with our user-friendly design." 
              />
              <FeatureCard 
                  title="Team Collaboration" 
                  description="Work together effortlessly and ensure everyone is aligned." 
              />
              <FeatureCard 
                  title="Insightful Analytics" 
                  description="Gain valuable insights into your progress with robust analytics." 
              />
          </div>
          <GetStartedButton />
      </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-400">{title}</h2>
          <p className="text-gray-300">{description}</p>
      </div>
  );
};

const GetStartedButton = () => {
  return (
      <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors hover:bg-green-500">
          Join Now
      </button>
  );
};

export default Home;
