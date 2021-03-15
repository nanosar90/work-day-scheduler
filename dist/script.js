document.getElementById("save").addEventListener("click", function ()
    {
        var task = document.getElementById("task").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("task", task) ;
        alert("task saved") ;
        console.log("task saved")
    } , false);