function cite_think_python_book(page = "") {
  if (page === "") {
    return "Downey, A. (2015). Think Python, How to think like a computer scientist.";
  }

  return `Downey, A. (2015). Think Python, How to think like a computer scientist. page ${page}`;
}

function cite_uopeople_course(chapter = "") {
  if (chapter === "") {
    return "CS1101 University of the People.";
  }

  return `CS1101 University of the People. chapter ${chapter}.`;
}

const cs_index = [
  {
    title: "dead code",
    definition:
      " part of the program that can never run, often because it appears after a return statement",
    reference: cite_think_python_book(60),
  },
  {
    title: "guardian",
    definition:
      "programming pattern that uses a conditional statement to check for and handle circumstances that might cause an error",
    reference: cite_think_python_book(60),
  },
  {
    title: "mutable structure",
    definition:"The elements of the structure can change. ",
    reference: cite_uopeople_course(6),
  },
];

const cs_index_titles_array = [];

for (let i = 0; i <cs_index.length; i++) {
    cs_index_titles_array.push(cs_index[i].title);
}