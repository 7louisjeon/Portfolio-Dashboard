import React from "react";
import Language from "./Language";
import "./Logos.css";

function Logos() {
  const langs1 = [
    [
      0,
      "React",
      "React is an open-source, front end Javascript library for building user interfaces or UI components. It is maintained by Facebook and a community of indivisual developers and companies.",
    ],
    [
      1,
      "Redux",
      "Redux is an open-source Javascript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    ],
    [
      2,
      "NodeJS",
      "Node JS is an open-source, cross-platform, back-end Javascript runtime environment that executes Javascript code outside a web browser. Node.js lets developers use Javascript to write command line tools and for server-side-scripting.",
    ],
    [
      3,
      "Javascript",
      "Javascript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. Javascript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.",
    ],
    [
      4,
      "MongoDB",
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).",
    ],
  ];

  const langs2 = [
    [
      5,
      "HTML5",
      "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and latest major version of HTML that is a World Wide Web Consortium (W3C) recommendation.",
    ],
    [
      6,
      "CSS3",
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. ",
    ],
    [
      7,
      "Swift",
      "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community, first released in 2014. Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. ",
    ],
    [
      8,
      "Firebase",
      "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.",
    ],
    [
      9,
      "MaterialUI",
      "MaterialUI is a popular React UI framework that enhances time effeciency for the web developers. MaterialUI offers 1000+ icons, avatar, toggle button, tables, cards and many other components with functionality.",
    ],
  ];
  return (
    <div className="logos">
      <div className="line">
        {langs1.map((lang) => (
          <Language
            src={process.env.PUBLIC_URL + `${lang[1]}.png`}
            name={lang[1]}
            popupMessage={lang[2]}
          />
        ))}
      </div>
      <div className="line">
        {langs2.map((lang) => (
          <Language
            src={process.env.PUBLIC_URL + `${lang[1]}.png`}
            name={lang[1]}
            popupMessage={lang[2]}
          />
        ))}
      </div>
    </div>
  );
}

export default Logos;
