// PERSONAL INFO
const personInfo = {
  name: "Brandon Johnson",
  address: "San Diego, CA",
  email: "example@email.com",
  jobTitle: "Father &  U.S. Navy Veteran",
  personalStatement:
    "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
  // Recommended photo size 1920 × 1053
  backgroundImage:
    "https://images.unsplash.com/photo-1496605692486-092c3480f3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
};

// SOCIAL LINKS
const socialLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
  },
];

// ABOUT
const about = {
  text: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  img: "https://images.unsplash.com/photo-1611415536753-ad67e967d533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

// RESUME
const resume = {
  text: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  education1: {
    degree: "MASTER OF FINE ARTS & GRAPHIC DESIGN",
    timeIn: "2015 - 2016",
    school: "Rochester Institute of Technology, Rochester, NY",
    text: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
  },
  education2: {
    degree: "BACHELOR OF FINE ARTS & GRAPHIC DESIGN",
    timeIn: "2010 - 2014",
    school: "Rochester Institute of Technology, Rochester, NY",
    text: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
  },
  job1: {
    position: "SENIOR GRAPHIC DESIGN SPECIALIST",
    timeIn: "2019 - Present",
    city: "Experion, New York, NY",
    text: {
      bullet1:
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      bullet2:
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      bullet3:
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
      bullet4:
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    },
  },
  job2: {
    position: "SENIOR GRAPHIC DESIGN SPECIALIST",
    timeIn: "2019 - Present",
    city: "Experion, New York, NY",
    text: {
      bullet1:
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      bullet2:
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      bullet3:
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
      bullet4:
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    },
  },
  job3: {
    position: "SENIOR GRAPHIC DESIGN SPECIALIST",
    timeIn: "2019 - Present",
    city: "Experion, New York, NY",
    text: {
      bullet1:
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      bullet2:
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      bullet3:
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
      bullet4:
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    },
  },
  job4: {
    position: "GRAPHIC DESIGN SPECIALIST",
    timeIn: "2017 - 2018",
    city: "Stepping Stone Advertising, New York, NY",
    text: {
      bullet1:
        "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
      bullet2:
        "Managed up to 5 projects or tasks at a given time while under pressure",
      bullet3:
        "Recommended and consulted with clients on the most appropriate graphic design",
      bullet4:
        "Created 4+ design presentations and proposals a month for clients and account managers",
    },
  },
};

// SKILLS
const skills = {
  text: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  skillSet: [
    {
      name: "HTML",
      percent: 100,
    },
    {
      name: "CSS",
      percent: 95,
    },
    {
      name: "JAVASCRIPT75",
      percent: 88,
    },
    {
      name: "PHP",
      percent: 65,
    },
    {
      name: "WORDPRESS/CMS",
      percent: 70,
    },
    {
      name: "PHOTOSHOP",
      percent: 75,
    },
  ],
};

const nameEl = Array.from(document.querySelectorAll("#name"));
const addressEl = Array.from(document.querySelectorAll("#address"));
const emailEl = Array.from(document.querySelectorAll("#email"));
const jobTitleEl = Array.from(document.querySelectorAll("#jobTitle"));
const personalStatementEl = Array.from(
  document.querySelectorAll("#personalStatement")
);
const socialLinksEl = Array.from(document.querySelectorAll(".social-links a"));
const heroEl = Array.from(document.querySelectorAll("#hero"));
const aboutEl = Array.from(document.querySelectorAll("#aboutText"));
const aboutPictureEl = Array.from(document.querySelectorAll("#aboutPic"));
const resumeTextEl = Array.from(document.querySelectorAll("#resumeText"));
const resumeEd1DegreeEl = Array.from(
  document.querySelectorAll("#resumeEd1Degree")
);
const resumeEd1TimeInEl = Array.from(
  document.querySelectorAll("#resumeEd1TimeIn")
);
const resumeEd1SchoolEl = Array.from(
  document.querySelectorAll("#resumeEd1School")
);
const resumeEd1TextEl = Array.from(document.querySelectorAll("#resumeEd1Text"));
const resumeEd2DegreeEl = Array.from(
  document.querySelectorAll("#resumeEd2Degree")
);
const resumeEd2TimeInEl = Array.from(
  document.querySelectorAll("#resumeEd2TimeIn")
);
const resumeEd2SchoolEl = Array.from(
  document.querySelectorAll("#resumeEd2School")
);
const resumeEd2TextEl = Array.from(document.querySelectorAll("#resumeEd2Text"));
const skillsTextEl = Array.from(document.querySelectorAll("#skillsText"));
const skillsetEl = Array.from(document.querySelectorAll(".progress"));

const loopElementsAndReplaceText = (elArr, string) =>
  elArr.forEach((el) => {
    if (el.nodeName === "INPUT") return;
    el.innerText = string;
  });
const loopElementsAndReplaceLinks = (elArr) =>
  elArr.forEach((el) => {
    socialLinks.map(({ name, url }) => {
      if (el.className === name && url === "") return el.remove();
      if (el.className === name) return (el.href = url);
    });
  });
const loopElementsAndReplacePicSrc = (elArr, imgUrl) => {
  elArr.forEach((el) => {
    el.src = imgUrl;
  });
};
const loopElementsAndReplaceSkills = (elArr) =>
  elArr.forEach((el, elIdx) => {
    skills.skillSet.map(({ name, percent }, idx) => {
      if (elIdx === idx) {
        if (name === "") return el.remove();
        el.innerHTML = `
        <span class="skill">${name}<i class="val">${percent}</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="${percent}"></div>
        </div>
      `;
      }
    });
  });

window.addEventListener("DOMContentLoaded", (e) => {
  heroEl.forEach((el) => {
    el.style.background = `url("${personInfo.backgroundImage}") top right no-repeat`;
  });
  loopElementsAndReplaceLinks(socialLinksEl);
  loopElementsAndReplaceText(nameEl, personInfo.name);
  loopElementsAndReplaceText(addressEl, personInfo.address);
  loopElementsAndReplaceText(emailEl, personInfo.email);
  loopElementsAndReplaceText(jobTitleEl, personInfo.jobTitle);
  loopElementsAndReplaceText(personalStatementEl, personInfo.personalStatement);
  loopElementsAndReplaceText(aboutEl, about.text);
  loopElementsAndReplacePicSrc(aboutPictureEl, about.img);
  loopElementsAndReplaceText(resumeTextEl, resume.text);
  loopElementsAndReplaceText(resumeEd1DegreeEl, resume.education1.degree);
  loopElementsAndReplaceText(resumeEd1TimeInEl, resume.education1.timeIn);
  loopElementsAndReplaceText(resumeEd1SchoolEl, resume.education1.school);
  loopElementsAndReplaceText(resumeEd1TextEl, resume.education1.text);
  loopElementsAndReplaceText(resumeEd2DegreeEl, resume.education2.degree);
  loopElementsAndReplaceText(resumeEd2TimeInEl, resume.education2.timeIn);
  loopElementsAndReplaceText(resumeEd2SchoolEl, resume.education2.school);
  loopElementsAndReplaceText(resumeEd2TextEl, resume.education2.text);
  loopElementsAndReplaceText(skillsTextEl, skills.text);
  loopElementsAndReplaceSkills(skillsetEl);
});
