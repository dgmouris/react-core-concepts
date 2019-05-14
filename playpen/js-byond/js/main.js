let appData;
let dataURL = "data/students.json";
let request = new XMLHttpRequest();
let studentTemplate = (document.querySelector('[role="student-profile"]').content).children[0]
let studentDisplay = document.querySelector(".container")
 console.log(studentTemplate)

request.open('GET', dataURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    var students = request.response.students;
   
   
    var displayNodes = students.map(function(element, index){
        var studentNode = studentTemplate.cloneNode(true);
 
 studentNode.children[0].lastElementChild.innerHTML= element.firstname + " "+ element.lastname ;
 
      
   
       
        studentDisplay.appendChild(studentNode); 
    });

    //  var displayNodes = students.map((element, index) => {
    //      var tempNode = studentTemplate.cloneNode(true);
    //     tempNode.childNode(element.firstname) 
    //  });

 
}

 /* 
   get data
   parse data if needed
   create new node
   populate node with data
 */

 