const Profile = () => {
    const user = {
        name: "Kamran Huseynov",
        email: "kamran.huseynov@example.com",
        bio: "Creative software engineer with expertise in developing scalable web applications and a strong interest in artificial intelligence.",
        skills: ["Node.js", "Express", "Vue.js", "Django", "Data Visualization"],
        location: "Ganja, Azerbaijan",
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-black to-gray-800 shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-gray-300 text-lg">{user.location}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white border-b-2 border-gray-600 pb-1">Email</h2>
                <p className="text-gray-200 text-lg">{user.email}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white border-b-2 border-gray-600 pb-1">Bio</h2>
                <p className="text-gray-200 text-lg">{user.bio}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white border-b-2 border-gray-600 pb-1">Skills</h2>
                <ul className="grid grid-cols-2 gap-4 mt-2">
                    {user.skills.map((skill, index) => (
                        <li key={index} className="bg-gray-900 text-white p-3 rounded-md shadow hover:bg-gray-700 transition duration-200">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
