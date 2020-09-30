

// write your code here
//header Element
const contBefor = document.querySelector(".container").cloneNode(true);
const navel = document.querySelector(".container").firstElementChild.firstElementChild;//to get nav element
const links = navel.getElementsByTagName('a');//to get Html collection for a tag
links[0].textContent=siteContent.nav["nav-item-1"];//assign link 
links[1].textContent=siteContent.nav["nav-item-2"];
links[2].textContent=siteContent.nav["nav-item-3"];
links[3].textContent=siteContent.nav["nav-item-4"];
links[4].textContent=siteContent.nav["nav-item-5"];
links[5].textContent=siteContent.nav["nav-item-6"];
navel.nextElementSibling.src=siteContent.nav["img-src"];
// end first step 
const ctael = document.querySelector(".cta");//parent cta
const ctext = ctael.querySelector(".cta-text");// parent cta-text
const h1el = ctext.querySelector("h1");//h1
h1el.textContent = siteContent.cta.h1;
const buttonel = ctext.querySelector("button");//button
buttonel.textContent = siteContent.cta.button;
ctext.nextElementSibling.src = siteContent.cta["img-src"];
//end second step
const manCon = document.querySelector(".main-content");//parent main-content
const topCon = manCon.querySelector(".top-content");
const txtCon = topCon.querySelectorAll(".text-content");
txtCon[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
txtCon[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
//
txtCon[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
txtCon[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];
//middle-img
manCon.querySelector("img").src = siteContent["main-content"]["middle-img-src"];
//********** */
//contact
const btnCon = manCon.querySelector(".bottom-content");
const txtBtnCon = btnCon.querySelectorAll(".text-content");

txtBtnCon[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
txtBtnCon[0].querySelector("p").textContent = siteContent["main-content"]["services-content"]
//
txtBtnCon[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
txtBtnCon[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
//
txtBtnCon[2].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
txtBtnCon[2].querySelector("p").textContent = siteContent["main-content"]["services-content"];

//contact
const contect = document.querySelector(".contact");
contect.querySelector("h4").innerHTML = siteContent.contact["contact-h4"];
const paras = contect.querySelectorAll('p');
paras[0].textContent = siteContent.contact.address;
paras[1].textContent = siteContent.contact.phone;
paras[2].textContent = siteContent.contact.email;
//footer
document.querySelector("footer").querySelector('p').textContent = siteContent.footer.copyright;

//navel is parent 

//document.create
//Home 
const home = document.createElement('a');
home.textContent = "Home";
navel.insertBefore(home,navel.firstElementChild);
//Page
const page = document.createElement('a');
page.textContent = "Page";
navel.appendChild(page);
//change color

document.querySelectorAll("body > div > header > nav > a").forEach((element)=>element.style.color = "#080");
//create new items 







//console.log(document.querySelector('script'));
buttonel.addEventListener('click',reset);
function reset(){
  document.body.textContent = " ";
  document.body.appendChild(contBefor);
  
 
  
  
}
