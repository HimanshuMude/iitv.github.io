document.getElementById("admissionFormBtn").addEventListener("click", function(event) {
    console.log("Form submitted");
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;
    var subject = document.getElementById("subject").value;
    
    // Perform form validation
    if (name === "" || email === "" || phone === "" || course === ""|| subject === "") {
        alert("Please fill out all fields");
        return;
    }
    // write the data in txt file with submission date and time
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var data = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nCourse: " + course + "\nSubmission Date: " + dateTime + "\n\n";
    var blob = new Blob([data], {type: "text/plain;charset=utf-8"});

    // console.log(document.getElementById("form"));
    // document.getElementsByClassName("form")[0].setAttribute("visibility", "hidden")
    // document.getElementsByClassName("form")[0].setAttribute("display", "none") 
    // document.getElementsByClassName("container")[0].innerHTML = "<h1>Form submitted successfully</h1>"


    saveAs(blob, "enroll.txt")


    alert("Form submitted successfully");

    // Perform form submission
    // You can add your own logic here, such as sending the form data to a server or displaying a success message
    
    // Reset form
    document.getElementById("admissionForm").reset();
});