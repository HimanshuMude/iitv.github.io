document.getElementById("btn").addEventListener("click", function() {
    //redirect to enroll.html
    window.location.href = "./Enroll.html";

    });
    let arr=document.getElementsByClassName("links");
    console.log(arr);
    Array.from(arr).forEach(ele => {
        ele.addEventListener("click", function(e) {
            e.preventDefault();
            });
    });
