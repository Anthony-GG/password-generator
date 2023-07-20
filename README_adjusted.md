# CWRU Bootcamp Challenge 3 - Password Generator

## Description

1. In this challenge, the goal was to take a standard built HTML page and add functionality to the Password Generation aspect of it!

2. This challenge was a way to practice problem solving skills by giving us a task with no real guidelines on how to get there except what we can come up with.

3. This challenge put validation testing at the forefront, something not explored as heavily in the class itself. You will find try-catch, for loops and while loops used throughout the program to achieve this.

4. Debugging using console.log and breakpoints became a vital part of the process in developing the functionality of this program. 

## Installation and Usage

Simply use the download all of the files provided and open the index.html in your file viewer of choice!
To look at the source code, open it, the CSS file and the Javascript file in a text file editor of choice!

## Mockup:
The following image shows the web application's appearance and functionality:

![alt text](./assets/01-html-css-git-homework-demo.png)

## Changelog:

```
* added functionality to the page, functions added to achieve this: generatePassword(), stringGeneration(), shuffleArr().

* generatePassword() generates a password based on given requirements by taking input and passing input requirements to stringGeneration().

* stringGeneration() takes input requirements and uses them to actually generate the password, it creates up to 4 different types of passwords, appends them together, shuffles them, then returns the first portion up to the requested length.

* shuffleArr() uses the Fisher-Yates algorithm to shuffle the array as research on the subject said it was less biased than using a standard Math.random() creation on its own.

* Added comments throughout for code readability and to better understand the process of everything added!

* Adjusted given writePassword() function to display red if user exits the process instead of the standard black. (For flavor sake. 😊)
```

## Credits
<br>
 Editing of code done by myself, <b>Anthony Iacano</b>
 <br>
 <br>
 Fisher-Yates shuffle algorithm used in shuffleArr() developed by <b>Ronald Fisher and Frank Yates<b>
 <br>
 <br>
 Lesson provided by <b>edX Boot Camps LLC.</b>

## Link to Deployed Page

 https://anthony-gg.github.io/password-generator/

## License

Please reference the **LICENSE.MD** file inside of the repository.

---

