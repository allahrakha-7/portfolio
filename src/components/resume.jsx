import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8" id="resume">
      <div className="bg-white mx-auto max-w-4xl rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Allah Rakha</h1>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="h-4 w-4" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaEnvelope className="h-4 w-4" />
                <a
                  href="mailto:allahrakhasajjaad@gmail.com"
                  className="text-sm text-blue-600 hover:underline"
                >
                  allahrakhasajjaad@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/allahrakha7/"
                  className="text-sm text-blue-600 hover:underline"
                >
                  linkedin.com/in/allahrakha7/
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary Section */}
          <section>
            <h2 className="text-xl font-semibold">Summary</h2>
            <div className="h-[1px] bg-gray-200 my-2"></div>
            <p className="text-sm text-gray-600">
              A full-stack software developer with expertise in both front-end
              and back-end development. Eager to join a diverse IT team and
              contribute to long-term projects, while continuously learning and
              improving skills.
            </p>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="h-[1px] bg-gray-200 my-2"></div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Frontend</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "Redux",
                    "Next.js",
                    "TypeScript",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium">Backend</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "MySQL",
                    "Firebase",
                    "Cloudinary",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="h-[1px] bg-gray-200 my-2"></div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">
                  Full Stack developer | 24/01/23 to present
                </h3>
                <p className="text-sm text-gray-600">
                  Idenbrid- Lahore, Pakistan.
                </p>
                <p className="text-sm text-gray-600">
                  Tech stack: React, Next.js, redux, Vue.js, AWS serverless
                </p>
                <p className="text-sm text-gray-600">
                  • Teacher Matching App: Developed a React and Next.js
                  application to connect teachers with students, featuring
                  real-time chat, a matching algorithm, and PWA capabilities.
                  <br />
                  • Tipbox: Built a tip management platform using Vue.js and AWS
                  serverless architecture, with interactive dashboards and
                  integrated payment gateways.
                  <br />
                  • AWS Serverless: Deployed serverless applications with AWS
                  Lambda and API Gateway, automating CI/CD pipelines and
                  enhancing performance.
                  <br />• PWA Enhancement: Improved applications with PWA
                  features like service workers and offline capabilities for
                  better loading speeds and user engagement.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="h-[1px] bg-gray-200 my-2"></div>
            <div className="space-y-4">
              {[
                {
                  title: "Multivendor E-commerce App",
                  description:
                    "Frontend and Backend development using React, Node.js, and MongoDB. Implemented authentication, authorization, and product management features.",
                },
                {
                  title: "LMS Saas App",
                  description:
                    "Full-stack educational platform with course management and user enrollment features. Built with Next.js & Supabase.",
                },
                {
                  title: "Real Estate App",
                  description:
                    "A platform for finding rental accommodations with React.js, Express.js, Node.js and MongoDB. Features include location services and chat functionality.",
                },
              ].map((project, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{project.title}</h3>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Project
                    </a>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="h-[1px] bg-gray-200 my-2"></div>
            <div className="space-y-2">
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <div>
                  <h3 className="font-medium">University of Education, Lahore</h3>
                  <p className="text-sm text-gray-600">
                    Bachelors degree in Information Technology
                  </p>
                </div>
                <span className="text-sm text-gray-600">2017 - 2021</span>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-xl font-semibold">Certifications</h2>
            <div className="h-[1px] bg-gray-200 my-2"></div>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Dev Weekends Fellowship</li>
              <li>Full Stack Developer Decentral Developers</li>
              <li>React Native Developer Ruwwaad</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
