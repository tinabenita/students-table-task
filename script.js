
fetch("students.json")

.then(function(response){ //handling promise object
    return response.json();
})

.then(function(students){
    let tableBody = document.getElementById("student-data"); //access the body of the table

    for (let student of students) {
        let row = document.createElement('tr');
      
        let nameData = document.createElement('td');
        nameData.textContent = student.Name;
        row.appendChild(nameData);
      
        let ageData = document.createElement('td');
        ageData.textContent = student.Age;
        row.appendChild(ageData);
      
        let marksData = document.createElement('td');
        marksData.textContent = student.Marks;
        row.appendChild(marksData);
      
        tableBody.appendChild(row);
    }
});

/* Good approach for small tasks
.then(function(students){ //array of all the students 
    let tableBody = document.getElementById("student-data"); //access the body of the table
    let out = ""; //js variable to hold all student details
    for(let student of students){
       out += `
          <tr>
             <td>${student.Name}</td>
             <td>${student.Age}</td>
             <td>${student.Marks}</td>
          </tr>
       `;
    }
    tableBody.innerHTML = out;
 });
*/