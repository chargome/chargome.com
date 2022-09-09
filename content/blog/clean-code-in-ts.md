---
id: clean-code-in-ts
title: Clean code in Typescript
subtitle: Catching up with my Uncle Bob 
datePublished: 04-09-2022
tags: ['typescript', 'books', 'clean-code']
---

# 

So I have just recently started reading [Clean Code by Robert C. Martin](https://www.goodreads.com/book/show/3735293-clean-code). I know I'm late to the party, but up until now I have only read articles that summarized the contents of the book and lived quite well with it. 
But for professional reasons I have decided to finally actually buy the book and read it front to back.

I am doing so on the kindle cloud-reader on my laptop, as it allows me to easily highlight passages and take notes.

I'll use this post as a summary for myself (and you since you apparently have nothing better to do) to document my main heuristics in the book. Additionally I'll keep my code examples in Typescript and not in Java as in the book. Search for the 🦧 to jump between chapters.

<sup><sub>
All of the heuristics, examples and code snippets are based on: 
C., Martin Robert (2008-07-31T23:58:59.000). Clean Code . Pearson Education. Kindle Edition.
</sub></sup>

---

## 🦧 Naming things right
### clarity is king

- give meaningful names to variables, funcitons, classes, etc. that encapsulate the intended use
- there should be no comment neccessary to explain the variable's intent (elapsedTimeInDays, heightInMeters, ...)
- no lowercase `L` or uppercase `**`o`
- never choose noninformative variables like `a1`, `a2`, ...
- avoid single letter variables (except maybe for loop counters)
- do not use encodings (`ageNumber`, `userObject`, ...)
- avoid naming things in a way that vary only litte (eg `someComplexObjectXo` – `someComplexObjectYo`)
- don't prefix interfaces with `I`
- class names **should not** contain verbs
- mathods and functions **should** contain verbs
- use conventions like `get`, `set` or `is`
- use `from` in static factory methods
- don't use slang, jokes or entertainment values
- don't use words like `add` for different things like appending, writing, concatenating, etc. – be consistent



The book states the following example of the function `getThem`:
```java
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
  return list1;
}
// C., Martin Robert (2008-07-31T23:58:59.000). Clean Code . Pearson Education. Kindle Edition. 
```

The pain point here is that it is not clear to the reader what this function does or why it does it. The book suggests that this function is for finding a flagged cell in a minesweeper game.

Let's extract all variable and function names and rename them:
- getThem 👉 getFlaggedCells (a function to get all flagged cells)
- list1 👉 flaggedCells (array to contain all cells)
- x 👉 cell (a single cell of type array where the first element encapsulated the state – 4 means flagged)
- theList 👉 gameBoard (a list that contains all cells in an array)

Let's rewrite this function in Typescript:
```ts
enum CellStateEnum {
  FLAGGED = 4,
  // ...rest of states
}
type Cell = [
  CellStateEnum,
  // ...rest of cell
]

const getFlaggedCells = (): Cell[] => {
  const flaggedCells: Cell[] = [];
  gameBoard.forEach((cell) => {
    if (cell[0] === CellStateEnum.FLAGGED) {
      flaggedCells.push(cell);
    }
  });
  return flaggedCells;
}
```
The function above contains the same functionality as the getThem function, but to the reader it is defenitely more clear what this function actually does. (I know this function would probably have been more elegant with the Array.filter method, but I wanted to stick close to the given example.)

## 🦧 Functions

- keep them small!
- keep them even smaller
- *functions should do one thing, they should do it well, thy should do it only*
- avoid mixing levels of abstractions within functions (e.g. `getSomeHighLevelValue()` and `.split(' #')`)
- make the function top-down readable (see the TO technique below)

### the "TO" technique
**To** include the setups and teardowns, we include setups, then we include the test page content, and then we include the teardowns.

**To** include the setups, we include the suite setup if this is a suite, then we include the regular setup. 

**To** include the suite setup, we search the parent hierarchy for the “SuiteSetUp” page and add an include statement with the path of that page. To search the parent…


