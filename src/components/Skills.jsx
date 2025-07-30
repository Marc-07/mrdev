
const Skills = () => {

const skillsData = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "95%" },
  { name: "JavaScript", level: "85%" },
  { name: "React", level: "80%" },
  { name: "Tailwind CSS", level: "85%" },
  { name: "Node.js", level: "50%" },
  { name: "TypeScript", level: "55%" }
];

    return (
        <>
            <section id="skills" className="skills section bg-gray-50 py-10 max-w-6xl mx-auto px-4">

                <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Habilidades</h2>
                    <p className="text-gray-600">Estas son las tecnologías que domino actualmente:</p>
                </div>

                <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillsData.map((skill, index) => (
                            <div className="progress" key={index}>
                                <span className="skill flex justify-between text-lg font-semibold text-gray-700">
                                    {skill.name} <i className="val">{skill.level}</i>
                                </span>
                                <div className="progress-bar-wrap bg-gray-300 rounded">
                                    <div
                                        className="progress-bar bg-blue-600 h-3 rounded"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills