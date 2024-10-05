const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Innovations Shaping the Future of the Web",
            content: "The landscape of web development is constantly transforming, and keeping up with the latest innovations is key for aspiring developers...",
            author: "Elvin Aliyev",
        },
        {
            id: 2,
            title: "Mastering JavaScript: The Importance of Closures",
            content: "Closures are a pivotal aspect of JavaScript that can enhance your coding capabilities and help you write cleaner, more efficient code...",
            author: "Leyla Mammadova",
        },
        {
            id: 3,
            title: "The Impact of Tailwind CSS on Modern Design",
            content: "With a focus on utility classes, Tailwind CSS allows developers to craft responsive designs swiftly and efficiently, revolutionizing web aesthetics...",
            author: "Ramin Həsənov",
        },
    ];

    return (
        <div className="p-6 bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Latest Articles</h1>
            <div className="space-y-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

const BlogCard = ({ blog }) => {
    return (
        <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-white hover:text-green-500 transition duration-200">{blog.title}</h2>
            <p className="text-gray-300 mt-2">{blog.content}</p>
            <p className="mt-4 text-sm text-gray-500">Written by: <span className="font-medium text-gray-300">{blog.author}</span></p>
        </div>
    );
};

export default Blogs;
