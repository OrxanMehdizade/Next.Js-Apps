const Courses = () => {
    const courses = [
        { id: 1, title: "Getting Started with HTML & CSS", description: "Dive into the world of web development by learning the foundational languages of the web: HTML and CSS.", instructor: "Elvin Aliyev" },
        { id: 2, title: "Dynamic Web Applications with Angular", description: "Create responsive and dynamic web applications using Angular framework and TypeScript.", instructor: "Leyla Mammadova" },
        { id: 3, title: "Data Analysis with Python", description: "Learn how to analyze and visualize data using Python libraries like Pandas and Matplotlib.", instructor: "Ramin Həsənov" },
        { id: 4, title: "Introduction to iOS Development", description: "Build engaging applications for iOS devices using Swift and the latest Apple frameworks.", instructor: "Aynur Quliyeva" },
        { id: 5, title: "Developing Virtual Reality Experiences", description: "Explore the creation of immersive virtual reality experiences using Unity and VR technologies.", instructor: "Cavid Məmmədov" },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-black to-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-white text-center">Discover Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <div key={course.id} className="bg-gray-900 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-xl font-semibold mb-2 text-white">{course.title}</h2>
                        <p className="text-gray-300 mb-4">{course.description}</p>
                        <p className="text-gray-500">Instructor: <span className="font-medium text-gray-300">{course.instructor}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
