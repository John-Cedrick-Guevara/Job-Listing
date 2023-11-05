import { useEffect, useState } from "react";

import "./main.scss";

function App() {
  let jobs = [
    {
      name: "photosnap",
      logo: "../images/photosnap.svg",
      title: "senior frontend developer",
      skillset: ["frontend", "Senior", "HTML", "CSS", "javascript"],
    },
    {
      name: "Manage",
      logo: "../images/manage.svg",
      title: "fullstack developer",
      skillset: ["fullstack", "midweight", "phython", "react"],
    },
    {
      name: "account",
      logo: "../images/account.svg",
      title: "junior frontend developer",
      skillset: ["junior", "react", "frontend", "sass", "JavaScript"],
    },
    {
      name: "My Home",
      logo: "../images/myhome.svg",
      title: "junior frontend developer",
      skillset: ["frontend", "junior", "css", "javascript"],
    },
    {
      name: "Loop Studios",
      logo: "../images/loop-studios.svg",
      title: "sfotware engineer",
      skillset: ["fullstack", "midweight", "SASS", "rybu", "javascript"],
    },
    {
      name: "facelt",
      logo: "../images/faceit.svg",
      title: "junior backend developer",
      skillset: ["junior", "backend", "ruby", "Ror"],
    },
    {
      name: "shortly",
      logo: "../images/shortly.svg",
      title: "Junior developer",
      skillset: ["frontend", "junior", "HTML", "sass", "javascript"],
    },
    {
      name: "insure",
      logo: "../images/insure.svg",
      title: "junior frontend developer",
      skillset: ["frontend", "Senior", "vue", "sass", "javascript"],
    },
    {
      name: "eyecam co.",
      logo: "../images/eyecam-co.svg",
      title: "full stack engineer",
      skillset: ["fullstack", "midweight", "django", "phython", "javascript"],
    },
    {
      name: "the air filter company",
      logo: "../images/the-air-filter-company.svg",
      title: "front end dev",
      skillset: ["frontend", "junior", "react", "sass", "javascript"],
    },
  ];
  const [arrayJobs, setArrayJobs] = useState(jobs);
  const [skill, setSkill] = useState([]);
  const [language, setLanguage] = useState([]);

  function filter(e) {
    if (!skill.some((item) => item.name === e.target.textContent)) {
      setSkill([...skill, { name: e.target.textContent }]);
      setLanguage([...language, e.target.textContent]);
    }

    // const newLists = arrayJobs.filter((item) => item.skillset.every(element => skill.includes(element)))

    // console.log(skill.map((item) => item.name));

    const newJobs = arrayJobs.filter((obj) =>
      obj.skillset.some((item) => item.includes(e.target.textContent))
    );

    setArrayJobs(newJobs);
    console.log(language);
  }

  function remove(itemToRemove) {
    const newSkill = skill.filter((item) => item !== itemToRemove);
    setSkill(newSkill);
    console.log(newSkill);

    // Create a list of remaining selected skills
    const remainingSkills = newSkill.map((item) => item.name);

    // Filter the jobs based on the remaining selected skills
    /*job.skillset.some((item) => remainingSkills.includes(item)) checks if at least one skill 
    in the job.skillset array is included in the remainingSkills array. The some method checks 
    if the given condition is true for at least one element in the array.*/
    const newJobs = jobs.filter((item) =>
      item.skillset.some((element) => remainingSkills.includes(element))
    );

    setArrayJobs(newJobs);
  }

  useEffect(() => {
    if (skill.length === 0) {
      setArrayJobs(jobs);
    }
  }, [skill, jobs]);

  function clear() {
    setSkill([]);
    setArrayJobs(jobs);
  }

  return (
    <>
      <div className="banner-container"></div>

      {skill.length > 0 && (
        <div className="picked">
          <div>
            {skill.map((item, key) => (
              <h5 key={key}>
                {item.name} <span onClick={() => remove(item)}>X</span>
              </h5>
            ))}
          </div>

          <div className="clear-container">
            <h4 onClick={clear}>clear</h4>
          </div>
        </div>
      )}

      <section className="list-container">
        {arrayJobs.map((item, key) => (
          <div key={key} className="jobs">
            <div className="info">
              <img src={item.logo} alt="asdaf" />
              <div className="texts">
                <h5 className="name">{item.name}</h5>
                <h5 className="title">{item.title}</h5>
                <ul>
                  <li>Full Time</li>
                  <li>Remote</li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="skill-container">
              {item.skillset.map((item, key) => (
                <p onClick={filter} key={key} className="skills">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
