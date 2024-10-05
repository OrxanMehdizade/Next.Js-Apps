export default function About() {
    const teamDatas = [
        {
            id: 1,
            name: "Elvin Aliyev",
            role: "Founder & CEO",
            bio: "Elvin is a tech visionary with a passion for building innovative products that change the way we interact with technology.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Leyla Mammadova",
            role: "Chief Technology Officer (CTO)",
            bio: "Leyla is an expert in software development, specializing in AI and machine learning to drive cutting-edge solutions.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Ramin Həsənov",
            role: "Head of Marketing",
            bio: "Ramin excels at crafting marketing strategies that amplify brand visibility and engage target audiences effectively.",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-black to-gray-800 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-white mb-8 text-center max-w-md">
                Meet our team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamDatas.map(data => (
                    <TeamDatasCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

const TeamDatasCard = ({ data }) => {
    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <img
                src={data.image}
                alt={data.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-white mb-2">{data.name}</h2>
            <h3 className="text-lg text-gray-300 mb-2">{data.role}</h3>
            <p className="text-gray-200">{data.bio}</p>
        </div>
    );
};
