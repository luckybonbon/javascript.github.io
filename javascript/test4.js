// let i = 0;
// while(i<10)
// {
//     i++;
//     document.write(i + " ");
// }

// do
// {
//     i++;
//     document.write(i + " ");
// }while(i<10)

// let countI = 0;
// for(i=1;i<=10;i++)
// {
//     countI += i;
//     console.log("第" + i + "次總和" + countI);
//     if(i==10)
//     {
//         document.write(i+ "=");
//         continue;
//     }
//     document.write(i + "+");
// }
// document.write(countI);

// for(i=1;i<=10;i++)
// {
//     if(i==5)
//     {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

document.write("<table border='1'>");
for(i=1;i<10;i++)
{
    document.write("<tr>");
    for(j=1;j<10;j++)
    {
        document.write("<td>");
        document.write(i + "*" +j+ "=" + i*j + "<br>");
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");