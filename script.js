function length()
{
  let count=String(document.getElementById("text").value);
  let length=count.length;
  document.getElementById("demo").innerHTML=length;
}

function slice()
{
    let count=String(document.getElementById("textslice").value);
    let a=Number(document.getElementById("first-slice").value);
    let b=Number(document.getElementById("last-slice").value);
    let c=count.slice(a,b);
    document.getElementById("demo1").innerHTML=c;
}

function substring()
{
    let count=String(document.getElementById("textsubstr").value);
    let a=Number(document.getElementById("first-sub").value);
    let b=Number(document.getElementById("last-sub").value);
    let c=count.substring(a,b);
    document.getElementById("demo2").innerHTML=c;
}

function replace()
{
    let count=String(document.getElementById("textrep").value);
    let a=String(document.getElementById("first-rep").value);
    let b=String(document.getElementById("last-rep").value);
    let c=count.replace(a,b);
    document.getElementById("demo3").innerHTML=c;
}

function replaceall()
{
    let count=String(document.getElementById("textrepall").value);
    let a=String(document.getElementById("first-repa").value);
    let b=String(document.getElementById("last-repa").value);
    let c=count.replaceAll(a,b);
    document.getElementById("demo4").innerHTML=c;
}

function upper()
{
    let count=String(document.getElementById("textcase").value);
    let up=count.toUpperCase();
    document.getElementById("demo5").innerHTML=up;
}

function lower()
{
    let count=String(document.getElementById("textcase").value);
    let low=count.toLowerCase();
    document.getElementById("demo5").innerHTML=low;
}

function concate()
{
    
    let text1=String(document.getElementById("Text1").value);
    let text2=String(document.getElementById("Text2").value);
    let con=text1.concat(" ",text2)
    document.getElementById("demo6").innerHTML=con;
}

function trim()
{
    let count=String(document.getElementById("texttrim").value);
    let trim=count.trim();
    let c=" Initial Length= " + count.length + "<br> Trimmed Length= " + trim.length;
    document.getElementById("demo7").innerHTML=trim;
    document.getElementById("demo8").innerHTML=c;
}

function trimstart()
{
    let count=String(document.getElementById("texttrim").value);
    let trim=count.trimStart();
    let c=" Initial Length= " + count.length + "<br> Trimmed Length= " + trim.length;
    document.getElementById("demo7").innerHTML=trim;
    document.getElementById("demo8").innerHTML=c;
}

function trimend()
{
    let count=String(document.getElementById("texttrim").value);
    let trim=count.trimEnd();
    let c=" Initial Length= " + count.length + "<br> Trimmed Length= " + trim.length;
    document.getElementById("demo7").innerHTML=trim;
    document.getElementById("demo8").innerHTML=c;
}

function padstart()
{
    let count=String(document.getElementById("textpad").value);
    let a=Number(document.getElementById("first-pad").value);
    let b=String(document.getElementById("last-pad").value);
    let c=count.padStart(a,b);
    document.getElementById("demo9").innerHTML=c;
}

function padend()
{
    let count=String(document.getElementById("textpad").value);
    let a=Number(document.getElementById("first-pad").value);
    let b=String(document.getElementById("last-pad").value);
    let c=count.padEnd(a,b);
    document.getElementById("demo9").innerHTML=c;
}

function charAt()
{
    let count=String(document.getElementById("textextract").value);
    let a=Number(document.getElementById("Extract").value);
    let c=count.charAt(a);
    document.getElementById("demo10").innerHTML=c;
}

/*function charcodeAt()
{
    let count=String(document.getElementById("textextract").value);
    let a=Number(document.getElementById("Extract").value);
    let c=count.charCodeAt(a);
    document.getElementById("demo10").innerHTML=c;
}*/

function PropertyAccess()
{
    let count=String(document.getElementById("textextract").value);
    let a=Number(document.getElementById("Extract").value);
    let  c=count[a];
    document.getElementById("demo10").innerHTML=c;
}

function split()
{
    let count=String(document.getElementById("array").value);
    let a=String(document.getElementById("split").value);
    let c=count.split(a);
    document.getElementById("demo11").innerHTML="first element:" + " " + c[0];
    document.getElementById("demo12").innerHTML="Second element:"+ " " + c[1];
    document.getElementById("demo13").innerHTML="Third element:" + " " + c[2];
}