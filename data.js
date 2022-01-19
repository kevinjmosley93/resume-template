const personInfo = {
  name: "Brandon Johnson",
  address: "San Diego, CA",
  email: "example@email.com",
  jobTitle: "Father &  U.S. Navy Veteran",
  personalStatement:
    "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
};

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

const nameEl = Array.from(document.querySelectorAll("#name"));
const addressEl = Array.from(document.querySelectorAll("#address"));
const emailEl = Array.from(document.querySelectorAll("#email"));
const jobTitleEl = Array.from(document.querySelectorAll("#jobTitle"));
const personalStatementEl = Array.from(
  document.querySelectorAll("#personalStatement")
);
const socialLinksEl = Array.from(document.querySelectorAll(".social-links a"));

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

window.addEventListener("DOMContentLoaded", (e) => {
  loopElementsAndReplaceText(nameEl, personInfo.name);
  loopElementsAndReplaceText(addressEl, personInfo.address);
  loopElementsAndReplaceText(emailEl, personInfo.email);
  loopElementsAndReplaceText(jobTitleEl, personInfo.jobTitle);
  loopElementsAndReplaceText(personalStatementEl, personInfo.personalStatement);
  loopElementsAndReplaceLinks(socialLinksEl);
});
