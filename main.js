var nameofstudentarray = [];
function submit()
{
    var displaystudantarray = [];
    for (var j = 1; j <=4; j++)
    {
        var nameofstudent = document.getElementById("name_of_the_student_"+j).value;
        console.log(nameofstudent);
        nameofstudentarray.push(nameofstudent);
    }
    var lenght_of_students_array = nameofstudentarray.length;
    console.log(lenght_of_students_array);
    for (var k = 0; k<lenght_of_students_array; k++)
    {
        displaystudantarray.push("<h4> - "+ nameofstudentarray[k] + "</h4");
        console.log(displaystudantarray);
    }
    console.log(displaystudantarray);
    document.getElementById("display_name_with_commas").innerHTML=displaystudantarray;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
    function sorting()
    {
        nameofstudentarray.sort();
        console.log(nameofstudentarray);
        
        var displaystudentsorting = [];
        var lenght_of_students_array = nameofstudentarray.length;
        console.log(lenght_of_students_array)
        
        for (var k = 0; k<lenght_of_students_array; k++)
        {
            displaystudentsorting.push("<h4> NAME - "+ nameofstudentarray[k] + "</h4");
            console.log(dispplaystudentsorting);
        }
        console.log(displaystudentsorting);
        var removecommas = displaystudentsorting.join("$");
        document.getElementById("display_name_without_commas").innerHTML=removecommas;
}
