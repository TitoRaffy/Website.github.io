function search () { //this search function will run if the "onkeyup" attribute is activated which is shown at input of my search bar shown in html.
    let searchbox = document.getElementById("srch-prod").value.toUpperCase(); //once the "onkeyup" is active this allows the user to type any values which will then be stored in the searchbox data.
    let products = document.querySelectorAll(".cont"); //after matching up with the "prod" items, it will look for all the items in the ".cont".
    let name = document.getElementsByTagName("h3"); //the "name" is the names of the products and it is now inside of the "storeitems" which is also the list of products "prod".

    for (var r = 0; r < name.length; r++) { //a for loop for the variable "i" and if the both of the conditions is true, then the for loop will contiue.
        let match =  products[r].getElementsByTagName('h3')[0]; //the h3 will be inside the "match" variable
        //this will let whatever the user types will match the textContent which is the h3
        if(match){
            let textvalue =  match.innerHTML || match.textContent //compering both the "h3" value in HTML and the user input value

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {//this if statement is getting all the items that has matching values that user inputs
                products[r].style.display = "";//it will display all the matching results that user inputs
            }else {
                products[r].style.display = "none";//if none of the user input is matching, none of the items will display in this else statement
            }
        }
    }
}