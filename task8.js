let i = 3;

while (i) {
  alert( i-- );
}// print 1

let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4 

let i = 0;
while (i++ < 5) alert( i );// 1 2 3 4 5

for (let i = 0; i < 5; i++) alert( i );// 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i );// 0 1 2 3 4 

for(let i=2;i<=10;i+=2)
{
    alert(i);
}

// Replace for with while
for (let i = 0; i < 3; i++) {
    alert( 'number ${i}!' );
  }
let i=0;
while(i<3)
{
    alert( 'number ${i}!' );
    i++;
}



num=prompt("Enter number");
while(num<100)
{
    if(num>100)
    {
        break;
    }
    else if(num==undefined||num=="")
    {
        console.log("Break");
        break;
    }
    num=prompt("Enter correct number");
}

// Print prime number

let num=prompt("Enter number");
let np=[];
for(let i=0;i<num;i++)
{
    np.push(true);
}

for(let p=2;p*p<=num;p++)
{
    if(np[p]==true)
    {
        for(let j=p*p;j<=num;j+=p)
        {
            np[j]=false;
        }
    }
}




