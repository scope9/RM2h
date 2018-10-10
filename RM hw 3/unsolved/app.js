const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

// Using the new DOM Manipulation library, do all of the following: 

// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.




const render = function() {
  $(".content").empty();
  

  for (let i = 0; i < studentList.length; i++) {
    $(".content").append() (`<p>${studentList[i]}</p>`)
    }

}

render();
// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 
const addButton = function () {
const name = $(`#name`).val();
studentList.push(name);

render();

}

$(`#add`).on(`click`, addButton);
// 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.


// .includes
// 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.
