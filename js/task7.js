// alert( null || 2 || undefined );// 2

alert( alert(1) || 2 || alert(3) );// print 1 then prints 2

alert( 1 && null && 2 );// null

alert( alert(1) && alert(2) );// 1 and undefined

alert( null || 2 && 3 || 4 );// prints 3

//
let age=prompt('Whats is your age',0);
if(age>=14&&age<=90)
{
    alert("Age is between 14 and 90");
}

if((!age>=14)&&(!age<=90))
{
    alert("Age is not between 14 and 90");
}

if(age<14&&age>90)
{
    alert("Age is not between 14 and 90");
}

//
if (-1 || 0) alert( 'first' );// prints first
if (-1 && 0) alert( 'second' );// doesn't print anything
if (null || -1 && 1) alert( 'third' ); //print third

let name=prompt("Enter name",null);
if(name=="Admin")
{
    let password=prompt("Eter password",null);
    if(password=='TheMaster')
    {
        alert("Welcome");
    }
    else if(password)
    {
        alert("Wromg password");
    }
    else
    {
        alert("canceled");
    }
}
else if(name)
{
    alert("I dont know you");
}
else
{
    alert("Cancelled");
}