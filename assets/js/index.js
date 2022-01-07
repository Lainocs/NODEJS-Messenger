const port = 3000

$("#add_user").submit(function(event) {
    alert("New user added!");
})

$("#update_user").submit(function(event) {
    event.preventDefault();
    
    var unindexed_array = $(this).serializeArray()
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    });

    var request = {
        "url": `http://localhost:${port}/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("User updated!")
    })
})

if(window.location.pathname == "/admin") {
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:${port}/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Are you sure you want to delete this user?")) {
            $.ajax(request).done(function(response){
                alert("User deleted!")
                location.reload()
            })
        }
    })
}