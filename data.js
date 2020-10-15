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
  {
  title: "list",
    definition: "A sequence of values.",
    reference: cite_think_python_book(100),
  },
    {
  title: "list",
    definition: "A sequence of values.",
    reference: cite_think_python_book(100),
  },
    {
  title: "element",
    definition: "One of the values in a list (or other sequence), also called items.",
    reference: cite_think_python_book(100),
  },
    {
  title: "nested list",
    definition: "A list that is an element of another list.",
    reference: cite_think_python_book(100),
  },
    {
  title: "accumlator",
    definition: "A variable used in a loop to add up or accumulate a result.",
    reference: cite_think_python_book(100),
  },
    {
  title: "augmented assingment",
    definition: "A statement that updates the value of a variable using an operator like +=.",
    reference: cite_think_python_book(100),
  },
    {
  title: "reduce",
    definition: "A processing pattern that traverses a sequence and accumulates the elements into a single result.",
    reference: cite_think_python_book(100),
  },
    {
  title: "map",
    definition: "A processing pattern that traverses a sequence and performs an operation on each element.",
    reference: cite_think_python_book(100),
  },
    {
  title: "filter",
    definition: "A processing pattern that traverses a list and selects the elements that satisfy some criterion.",
    reference: cite_think_python_book(100),
  },
    {
  title: "object",
    definition: "Something a variable can refer to. An object has a type and a value.",
    reference: cite_think_python_book(100),
  },
    {
  title: "equivalent",
    definition: "Having the same value.",
    reference: cite_think_python_book(100),
  },
    {
  title: "identical",
    definition: "Being the same object (which implies equivalence).",
    reference: cite_think_python_book(100),
  },
    {
  title: "reference",
    definition: "The association between a variable and its value.",
    reference: cite_think_python_book(100),
  },
    {
  title: "aliasing",
    definition: "A circumstance where two or more variables refer to the same object.",
    reference: cite_think_python_book(100),
  },
    {
  title: "delimiter",
    definition: "A character or string used to indicate where a string should be split.",
    reference: cite_think_python_book(100),
  },
];

const cs_index_titles_array = [];

for (let i = 0; i <cs_index.length; i++) {
    cs_index_titles_array.push(cs_index[i].title);
}
