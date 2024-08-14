import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With a hands-on experience as intern, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React,Bootstrap,Tailwind CSS, Node.js, express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Mar-2023 - Aug-2023",
    role: "Web Development Intern",
    company: "Digital One Box Pvt Ltd",
    description: `Designed, customized, and maintained over 10 WordPress websites for diverse clients.
Developed and implemented SEO strategies, leading in a 30% increase in website traffic.
Partnered with a team of 5 designers to implement UI/UX designs, enhancing user engagement by 20%.
Integrated React components with multiple technologies (e.g., Redux, Sass), resulting in a 30% improvement in loading times and
a 25% increase in user retention.
Successfully integrated over 15 RESTful APIs, reducing data retrieval time by 40% and improving application performance..`,
    technologies: ["Javascript", "React.js", "Wordpress", "Bootstrap"],
  },
];

export const EDUCATIONS = [
  {
    institute: "Kamla Nehru Mahavidhyalaya, Nagpur",
    course: "Bachelor of Computer Application",
    year: "2018-2021",
  },
  {
    institute: "LNCT University, Bhopal",
    course: "Masters of Computer Application",
    year: "2021-2023",
  },
];

export const PROJECTS = [
  {
    title: "Full stack site with admin panel",
    image: project1,
    link: "https://mern-with-adminpanel.netlify.app/",
    description:
      "Users can easily sign up and log in to access the platform's features ,Enable admins to review, respond to, and manage queries. Include functionalities such as editing user or removing user ",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Super App React",
    image: project2,
    link: "https://capstone-project-chi-lime.vercel.app/",
    description:
      "App recommends movies based on users preferred genres,Implemented local storage for user data, leveraging integrated API to suggest movies based on user preferences",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9754215777",
  email: "abhisheksahu504@gmail.com",
};
