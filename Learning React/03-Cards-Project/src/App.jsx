import React from "react";
import Card from "./Components/Card";
const App = () => {
  const jobs = [
    {
      id: 1,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      company: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 120,
      location: "Mumbai, India",
    },
    {
      id: 2,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 95,
      location: "Bangalore, India",
    },
    {
      id: 3,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      company: "IBM",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 75,
      location: "Hyderabad, India",
    },
    {
      id: 4,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      datePosted: "3 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 140,
      location: "Bangalore, India",
    },
    {
      id: 5,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Cloud Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: 110,
      location: "Pune, India",
    },
    {
      id: 6,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      datePosted: "6 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 135,
      location: "Delhi, India",
    },
    {
      id: 7,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "AWS",
      datePosted: "10 days ago",
      post: "DevOps Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: 125,
      location: "Chennai, India",
    },
    {
      id: 8,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Walmart_logo.svg",
      company: "Walmart Global Tech",
      datePosted: "2 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 80,
      location: "Bangalore, India",
    },
    {
      id: 9,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Meta-Logo.png",
      company: "Meta",
      datePosted: "1 day ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 150,
      location: "Hyderabad, India",
    },
    {
      id: 10,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      company: "LinkedIn",
      datePosted: "3 weeks ago",
      post: "Full Stack Developer",
      tag1: "Hybrid",
      tag2: "Mid Level",
      pay: 105,
      location: "Gurgaon, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
            company={elem.company}
            brandLogo={elem.brandLogo}
            location={elem.location}
            pay={elem.pay}
            tag1={elem.tag1}
            tag2={elem.tag2}
            post={elem.post}
            datePosted={elem.datePosted}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;
