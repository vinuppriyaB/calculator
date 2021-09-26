var container=document.createElement("div");
container.setAttribute("class","container");


var row=document.createElement("div");
row.setAttribute("class","row");

var col1=document.createElement("div");
col1.setAttribute("class","col-12");
var textarea1=document.createElement("textarea");
//textarea1.setAttribute("cols",38);
textarea1.setAttribute("id","showinput");
col1.append(textarea1);

var col2=document.createElement("div");
col2.setAttribute("class","col-12");
var textarea2=document.createElement("textarea");
textarea2.setAttribute("cols",38);
textarea2.setAttribute("style","color:lightgrey");
col2.append(textarea2);

//row for cancel,% , /
var col4=document.createElement("div");
col4.setAttribute("class","col-6");
var buttoncancel=document.createElement("button");
buttoncancel.setAttribute("id","buttoncancel");
buttoncancel.style.backgroundColor="goldenrod";

buttoncancel.innerHTML="cancel";

col4.append(buttoncancel);

var col5=document.createElement("div");
col5.setAttribute("class","col-3");
var buttonmodulo=document.createElement("button");
buttonmodulo.setAttribute("id","buttonmodulo");
buttonmodulo.innerHTML="%";
col5.append(buttonmodulo);

var col6=document.createElement("div");
col6.setAttribute("class","col-3");
var buttondiv=document.createElement("button");
buttondiv.setAttribute("id","buttondiv");
buttondiv.innerHTML="/";
col6.append(buttondiv);

//row for 7 8 9 *

var col7=document.createElement("div");
col7.setAttribute("class","col-3");
var button7=document.createElement("button");
button7.setAttribute("id","button7");
button7.innerHTML="7";
col7.append(button7);

var col8=document.createElement("div");
col8.setAttribute("class","col-3");
var button8=document.createElement("button");
button8.setAttribute("id","button8");
button8.innerHTML="8";
col8.append(button8);

var col9=document.createElement("div");
col9.setAttribute("class","col-3");
var button9=document.createElement("button");
button9.setAttribute("id","button9");
button9.innerHTML="9";
col9.append(button9);

var col10=document.createElement("div");
col10.setAttribute("class","col-3");
var buttonmul=document.createElement("button");
buttonmul.setAttribute("id","buttonmul");
buttonmul.innerHTML="*";
col10.append(buttonmul);

//row for 4,5,6,-
var col11=document.createElement("div");
col11.setAttribute("class","col-3");
var button4=document.createElement("button");
button4.setAttribute("id","button4");
button4.innerHTML="4";
col11.append(button4);

var col12=document.createElement("div");
col12.setAttribute("class","col-3");
var button5=document.createElement("button");
button5.setAttribute("id","button5");
button5.innerHTML="5";
col12.append(button5);

var col13=document.createElement("div");
col13.setAttribute("class","col-3");
var button6=document.createElement("button");
button6.setAttribute("id","button6");
button6.innerHTML="6";
col13.append(button6);

var col14=document.createElement("div");
col14.setAttribute("class","col-3");
var buttonminus=document.createElement("button");
buttonminus.setAttribute("id","buttonminus");
buttonminus.innerHTML="-";
col14.append(buttonminus);

//row for 1 2 3 +
var col15=document.createElement("div");
col15.setAttribute("class","col-3");
var button1=document.createElement("button");
button1.setAttribute("id","button1");
button1.innerHTML="1";
col15.append(button1);

var col16=document.createElement("div");
col16.setAttribute("class","col-3");
var button2=document.createElement("button");
button2.setAttribute("id","button2");
button2.innerHTML="2";
col16.append(button2);

var col17=document.createElement("div");
col17.setAttribute("class","col-3");
var button3=document.createElement("button");
button3.setAttribute("id","button3");
button3.innerHTML="3";
col17.append(button3);

var col18=document.createElement("div");
col18.setAttribute("class","col-3");
var buttonplus=document.createElement("button");
buttonplus.setAttribute("id","buttonplus");
buttonplus.innerHTML="+";
col18.append(buttonplus);

//row for clr 0,.,=
var col19=document.createElement("div");
col19.setAttribute("class","col-3");
var buttonclr=document.createElement("button");
buttonclr.setAttribute("id","buttonclr");
buttonclr.style.backgroundColor="darkred";
buttonclr.style.color="white";
buttonclr.innerHTML="clear";
col19.append(buttonclr);

var col20=document.createElement("div");
col20.setAttribute("class","col-3");
var button0=document.createElement("button");
button0.setAttribute("id","button0");
button0.innerHTML="0";
col20.append(button0);

var col21=document.createElement("div");
col21.setAttribute("class","col-3");
var buttondot=document.createElement("button");
buttondot.setAttribute("id","buttondot");
buttondot.innerHTML=".";

col21.append(buttondot);

var col22=document.createElement("div");
col22.setAttribute("class","col-3");
var buttonequal=document.createElement("button");
buttonequal.setAttribute("id","buttonequal");
buttonequal.style.backgroundColor="green";
buttonequal.style.color="white";
buttonequal.innerHTML="=";
col22.append(buttonequal);

row.append(col1,col2,col4,col5,col6,col7,col8,col9,col10,col11,col12,col13,col14,col15,col16,col17,col18,col19,col20,col21,col22);

container.append(row);
document.body.append(container);


let s;

//for getting from user and show input and current result to the user 
document.querySelector("#showinput").addEventListener('input',function(event)
{
    let s=document.getElementById("showinput").value;
    console.log("s"+s)
    let a=stackfill(s);
    calculation(a);
    
});
document.querySelector("#button1").addEventListener("click",function(event)
{
    var x=document.getElementById("button1");
    
    let s=document.getElementById("showinput").value;
    console.log("before"+s);
    textarea1.innerHTML=s+"1";
     s=document.getElementById("showinput").value;
     console.log("after"+s);
    let a=stackfill(s);
    calculation(a);
    
    
});

document.querySelector("#button2").addEventListener('click',function(event)
{
    var x=document.getElementById("button2");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=document.getElementById("showinput").value;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button3").addEventListener('click',function(event)
{
    var x=document.getElementById("button3");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button4").addEventListener('click',function(event)
{
    var x=document.getElementById("button4");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button5").addEventListener('click',function(event)
{
    var x=document.getElementById("button5");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button6").addEventListener('click',function(event)
{
    var x=document.getElementById("button6");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button7").addEventListener('click',function(event)
{
    var x=document.getElementById("button7");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button8").addEventListener('click',function(event)
{
    var x=document.getElementById("button8");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button9").addEventListener('click',function(event)
{
    var x=document.getElementById("button9");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});
document.querySelector("#button0").addEventListener('click',function(event)
{
    var x=document.getElementById("button0");
    let s=document.getElementById("showinput").value;
    textarea1.innerHTML=s+x.innerText;
     s=textarea1.innerHTML;
    let a=stackfill(s);
    calculation(a);
});

//operations
document.querySelector("#buttonplus").addEventListener('click',function(event)
{
     //two continuous symbol are not allowed operator=last value in textarea1
    var operator=textarea1.innerHTML[textarea1.innerHTML.length-1];
    if(operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="%")
    {
        window.alert("invalidinput");
        
    }
    else
    {
        var x=document.getElementById("buttonplus");
        textarea1.innerHTML=textarea1.innerHTML+"+";
    }
    
});
document.querySelector("#buttonminus").addEventListener('click',function(event)
{
     //two continuous symbol are not allowed operator=last value in textarea1
    var operator=textarea1.innerHTML[textarea1.innerHTML.length-1];
    if(operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="%")
    {
        window.alert("invalidinput");
        
    }
    else
    {
        var x=document.getElementById("buttonminus");
        textarea1.innerHTML=textarea1.innerHTML+x.innerText;
       
    }
    
});
document.querySelector("#buttondiv").addEventListener('click',function(event)
{
     //two continuous symbol are not allowed operator=last value in textarea1
    var operator=textarea1.innerHTML[textarea1.innerHTML.length-1];
    if(operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="%")
    {
        window.alert("invalidinput");
        
    }
    else
    {
        var x=document.getElementById("buttondiv");
        textarea1.innerHTML=textarea1.innerHTML+x.innerText;
        if(textarea1.innerHTML.length==1)
        {
            window.alert("invalidinput");
            textarea1.innerHTML="";
        }
        
    }
});
document.querySelector("#buttonmul").addEventListener('click',function(event)
{
    //two continuous symbol are not allowed operator=last value in textarea1
    var operator=textarea1.innerHTML[textarea1.innerHTML.length-1];
    if(operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="%")
    {
        window.alert("invalidinput");
        
    }
    else
    {
        var x=document.getElementById("buttonmul");
        textarea1.innerHTML=textarea1.innerHTML+x.innerText;
        if(textarea1.innerHTML.length==1)
        {
            window.alert("invalidinput");
            textarea1.innerHTML="";
        }
        
    }
});
document.querySelector("#buttonmodulo").addEventListener('click',function(event)
{
     //two continuous symbol are not allowed operator=last value in textarea1
    var operator=textarea1.innerHTML[textarea1.innerHTML.length-1];
    if(operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="%")
    {
        window.alert("invalidinput");
        
    }
    else
    {
        var x=document.getElementById("buttonmodulo");
        textarea1.innerHTML=textarea1.innerHTML+x.innerText;
        if(textarea1.innerHTML.length==1)
        {
            window.alert("invalidinput");
            textarea1.innerHTML="";
        }
       
    }
});

document.querySelector("#buttondot").addEventListener('click',function(event)
{
     //two continuous symbol are not allowed operator=last value in textarea1
    var operator=textarea1.innerHTML[textarea1.innerHTML.length-1];
    if(operator==".")
    {
        window.alert("invalidinput");
        
    }
    else
    {
        var x=document.getElementById("buttondot");
        textarea1.innerHTML=textarea1.innerHTML+x.innerText;
    }
});

//calculate the value after enter equal button
document.querySelector("#buttonequal").addEventListener('click',function(event)
{
    textarea2.style.color="black";
    let s=document.getElementById("showinput").value;
    let a=stackfill(s);
    calculation(a);
    //result as a final value in input field and empty result field
    textarea1.innerHTML=textarea2.innerHTML;
    textarea2.innerHTML="";
    //textcolor back to grey
    textarea2.style.color="lightgrey";
    backupstack=[0];
    backupstack.push(parseFloat(textarea1.innerHTML));
});


// onclick on cancel button //pop backupstack 
document.querySelector("#buttoncancel").addEventListener('click',function(event)
{
    var x=textarea1.innerHTML;
    
    if(backupstack.length>1)
    {
        if(+x[x.length-1]>=0&&+x[x.length-1]<=9)
        {
            backupstack.pop();
        textarea2.innerHTML=backupstack[backupstack.length-1];
        
        }
    }
    
    let a="";
    for(let i=0;i<x.length-1;i++)
    {
        a=a+x[i];
    }
    textarea1.innerHTML=a;
    
});

///clear both textarea
document.querySelector("#buttonclr").addEventListener('click',function(event)
{
    textarea1.innerHTML="";
    textarea2.innerHTML="";
    backupstack=[0];
    
});



  
 let backupstack=[0]
 
function stackfill(s)
{
    let stack=[];
    let sum="";
    let k=0;
    if(s[0]=="*"||s[0]=="/"||s[0]=="%")
    {
        window.alert("invalid");
    }
    for(i=0;i<s.length;i++)
    {
        if((s[i]>=0&&s[i]<=9)||s[i]=="+"||s[i]=="-"||s[i]=="/"||s[i]=="%"||s[i]=="*"||s[i]==".")
        {

        }
        else{
            window.alert("Invalidinput");
        }
    }
    
    
    for(let i=0;i<s.length;i++)
    {
        if(+s[i]>=0&&+s[i]<=9)
        {
            sum=sum+s[i];
        }
        else if(s[i]==".")
        {
            sum=sum+s[i];
        }
        else 
        {
            
            if(i!=0)
            {
                sum=parseFloat(sum);
                stack.push(sum);
                sum="";
                stack.push(s[i]);
            }
            else if(i==0&&s[i]=="-")
            {
                  stack.push(s[0]);
                 
            }
            
        }
        
    
    }
    sum=parseFloat(sum);
    stack.push(sum);
    if(stack[0]=="-"&&stack.length>1)
    {
        var temp=parseFloat(stack[1]);
        stack.splice(0,2,(-temp));
    }
    
    return stack;
}

 
 
function calculation(a)
{
    let flag=0;
     
    for(let j=0;j<a.length;j++)
    {
        if(a[j]=="*"||a[j]=="/"||a[j]=="%")
        {
         flag=1;
         break;
        }
    }
     
    for(let i=0;i<a.length;i++)
    {
        if((flag==1)&&(a[i]=="*"))
        {
                let mul=a[i-1]*a[i+1];
                a.splice(i-1,3,mul);
                i=i-1;
                flag=1;
            
         }
         else if((flag==1)&&(a[i]=="/"))
        {
                let div=a[i-1]/a[i+1];
                a.splice(i-1,3,div);
                i=i-1;
                flag=1;
        }
         else if((flag==0)&&(a[i]=='+'))
        {
                let add=a[i-1]+a[i+1];
                a.splice(i-1,3,add);
                i=i-1;
                flag=0;
             
        }
         else if((flag==0)&&(a[i]=="-"))
        {
             let sub=a[i-1]-a[i+1];
            a.splice(i-1,3,sub);
             i=i-1;
            flag=0;
        }
         else if((flag==1)&&(a[i]=="%"))
         {
             let mod=a[i-1]%a[i+1];
            a.splice(i-1,3,mod);
             i=i-1;
            flag=1;
         }
     }
     
    if(a.length>1)
    {
        calculation(a);
    }
    else{
        textarea2.innerHTML=a[0];
        backupstack.push(a[0]);
    }
    
    return backupstack;
     
 }
