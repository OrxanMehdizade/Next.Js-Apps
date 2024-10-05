export default function Contact() {
    const contactInfo = [
        {
            id: 1,
            name: "Elvin Aliyev",
            email: "elvin.aliyev@example.com",
            phone: "(555) 123-4567",
        },
        {
            id: 2,
            name: "Leyla Mammadova",
            email: "leyla.mammadova@example.com",
            phone: "(555) 987-6543",
        },
        {
            id: 3,
            name: "Ramin Həsənov",
            email: "ramin.hesenov@example.com",
            phone: "(555) 555-5555",
        },
    ];

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-black to-gray-800 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-white mb-8 text-center max-w-md">
                Our contact details:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
}

const ContactCard = ({ contact }) => {
    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-white mb-2">{contact.name}</h2>
            <p className="text-gray-300">
                Email: <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline">{contact.email}</a>
            </p>
            <p className="text-gray-300">
                Phone: <span className="text-gray-200">{contact.phone}</span>
            </p>
        </div>
    );
};
