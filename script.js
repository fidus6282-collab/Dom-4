let nav = document.createElement('nav');
nav.style.backgroundColor = '#282829'
nav.style.padding = '24px 100px'
nav.style.display = 'flex'
nav.style.justifyContent = 'space-between'
nav.style.alignItems = 'center'
nav.width = '100%'
nav.height= '70px'

document.body.appendChild(nav);


let logo = document.createElement('img')
logo.src = './maker-(mkr).png'
logo.style.width = '40px'
logo.style.height = '40px'
nav.append(logo)

let ul = document.createElement('ul')
ul.style.listStyle = 'none'
ul.style.display = 'flex'
ul.style.gap = '30px'
nav.append(ul)

let menuItems = ['Home', 'About', 'Services', 'Work', 'Blog'];

menuItems.forEach(text => {
    const li = document.createElement('li');
    li.style.color = 'white';
    li.style.fontFamily = 'Arial, sans-serif';
    li.style.fontSize = '18px';
    li.style.cursor = 'pointer';
    li.textContent = text;
    ul.append(li);
});

let section = document.createElement('section')
section.style.display = 'flex'
section.style.flexDirection = 'column'
section.style.alignItems = 'center'
section.style.marginBottom = '114px'
document.body.append(section)

// H1
let h1 = document.createElement('h1')
h1.textContent = 'We are your MateDesigners'
h1.style.fontFamily = 'Arial, sans-serif'
h1.style.fontSize = '88px'
h1.style.fontWeight = '500'
h1.style.margin = '114px auto 0 auto'
h1.style.width = '603px'
h1.style.textAlign = 'center'
section.append(h1)

// Cardlar qutisi
let korobka = document.createElement('div')
korobka.style.display = 'flex'
korobka.style.flexWrap = 'wrap'
korobka.style.gap = '32px'
korobka.style.justifyContent = 'center' // muhim
korobka.style.marginTop = '114px'
section.append(korobka)


// CARD 1 ---------------------------------------
let card1 = document.createElement('div')
card1.style.width = '350px'
card1.style.height = '420px'
korobka.append(card1)

let img1 = document.createElement('img')
img1.src = './da7b98d1d0de6acb6ee6a5b0c821556555746aaa (1).png'
img1.style.width = '350px'
img1.style.height = '250px'
img1.style.borderRadius = '20px'
card1.append(img1)

let h2_1 = document.createElement('h2')
h2_1.textContent = 'Ghost UXWriter'
h2_1.style.fontFamily = 'Arial, sans-serif'
h2_1.style.fontSize = '28px'
h2_1.style.marginTop = '30px'
h2_1.style.fontWeight = '600'
h2_1.style.textAlign = 'center'
card1.append(h2_1)

let p1 = document.createElement('p')
p1.textContent = 'All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else.'
p1.style.fontFamily = 'Arial, sans-serif'
p1.style.fontSize = '14px'
p1.style.marginTop = '10px'
p1.style.textAlign = 'center'
p1.style.color = '#000000'
card1.append(p1)


// CARD 2 ---------------------------------------
let card2 = document.createElement('div')
card2.style.width = '350px'
card2.style.height = '420px'
korobka.append(card2)

let img2 = document.createElement('img')
img2.src = './5779e0f80913b7a0b302817e0d8233aba8149fda.png'
img2.style.width = '350px'
img2.style.height = '250px'
img2.style.borderRadius = '20px'
card2.append(img2)

let h3_1 = document.createElement('h2')
h3_1.textContent = 'Content Reel'
h3_1.style.fontFamily = 'Arial, sans-serif'
h3_1.style.fontSize = '28px'
h3_1.style.marginTop = '30px'
h3_1.style.fontWeight = '600'
h3_1.style.textAlign = 'center'
card2.append(h3_1)

let p2 = document.createElement('p')
p2.textContent = 'All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else.'
p2.style.fontFamily = 'Arial, sans-serif'
p2.style.fontSize = '14px'
p2.style.marginTop = '10px'
p2.style.textAlign = 'center'
p2.style.color = '#000000'
card2.append(p2)


// CARD 3 ---------------------------------------
let card3 = document.createElement('div')
card3.style.width = '350px'
card3.style.height = '420px'
korobka.append(card3)

let img3 = document.createElement('img')
img3.src = './774d79b2eab5efa0925e3d9f72eb4e1e2e8f7025.png'
img3.style.width = '350px'
img3.style.height = '250px'
img3.style.borderRadius = '20px'
card3.append(img3)

let h4_1 = document.createElement('h2')
h4_1.textContent = 'Status Annotations'
h4_1.style.fontFamily = 'Arial, sans-serif'
h4_1.style.fontSize = '28px'
h4_1.style.marginTop = '30px'
h4_1.style.fontWeight = '600'
h4_1.style.textAlign = 'center'
card3.append(h4_1)

let p3 = document.createElement('p')
p3.textContent = 'All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else.'
p3.style.fontFamily = 'Arial, sans-serif'
p3.style.fontSize = '14px'
p3.style.marginTop = '10px'
p3.style.textAlign = 'center'
p3.style.color = '#000000'
card3.append(p3)


// CARD 4 ---------------------------------------
let card4 = document.createElement('div')
card4.style.width = '350px'
card4.style.height = '420px'
korobka.append(card4)

let img4 = document.createElement('img')
img4.src = './d7ffc31eb0b1084dd6ae7270c49313eb77ff2267.png'
img4.style.width = '350px'
img4.style.height = '250px'
img4.style.borderRadius = '20px'
card4.append(img4)

let h5_1 = document.createElement('h2')
h5_1.textContent = 'Ghost UXWriter'
h5_1.style.fontFamily = 'Arial, sans-serif'
h5_1.style.fontSize = '28px'
h5_1.style.marginTop = '30px'
h5_1.style.fontWeight = '600'
h5_1.style.textAlign = 'center'
card4.append(h5_1)

let p4 = document.createElement('p')
p4.textContent = 'All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else.'
p4.style.fontFamily = 'Arial, sans-serif'
p4.style.fontSize = '14px'
p4.style.marginTop = '10px'
p4.style.textAlign = 'center'
p4.style.color = '#000000'
card4.append(p4)


// CARD 5 ---------------------------------------
let card5 = document.createElement('div')
card5.style.width = '350px'
card5.style.height = '420px'
korobka.append(card5)

let img5 = document.createElement('img')
img5.src = './1f05fb5d110e8cab92dda0d472e4ea4c4644ec12.png'
img5.style.width = '350px'
img5.style.height = '250px'
img5.style.borderRadius = '20px'
card5.append(img5)

let h6_1 = document.createElement('h2')
h6_1.textContent = 'Content Reel'
h6_1.style.fontFamily = 'Arial, sans-serif'
h6_1.style.fontSize = '28px'
h6_1.style.marginTop = '30px'
h6_1.style.fontWeight = '600'
h6_1.style.textAlign = 'center'
card5.append(h6_1)

let p5 = document.createElement('p')
p5.textContent = 'All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else.'
p5.style.fontFamily = 'Arial, sans-serif'
p5.style.fontSize = '14px'
p5.style.marginTop = '10px'
p5.style.textAlign = 'center'
p5.style.color = '#000000'
card5.append(p5)


// CARD 6 ---------------------------------------
let card6 = document.createElement('div')
card6.style.width = '350px'
card6.style.height = '420px'
korobka.append(card6)

let img6 = document.createElement('img')
img6.src = './418a8b23ebb67106149ad80e89b257ac3a85ce2f.png'
img6.style.width = '350px'
img6.style.height = '250px'
img6.style.borderRadius = '20px'
card6.append(img6)

let h7_1 = document.createElement('h2')
h7_1.textContent = 'Status Annotations'
h7_1.style.fontFamily = 'Arial, sans-serif'
h7_1.style.fontSize = '28px'
h7_1.style.marginTop = '30px'
h7_1.style.fontWeight = '600'
h7_1.style.textAlign = 'center'
card6.append(h7_1)

let p6 = document.createElement('p')
p6.textContent = 'All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else.'
p6.style.fontFamily = 'Arial, sans-serif'
p6.style.fontSize = '14px'
p6.style.marginTop = '10px'
p6.style.textAlign = 'center'
p6.style.color = '#000000'
card6.append(p6)


let footer = document.createElement('nav');
footer.style.backgroundColor = '#282829'
footer.style.padding = '24px 100px'
footer.style.display = 'flex'
footer.style.justifyContent = 'space-between'
footer.style.alignItems = 'center'
footer.width = '100%'
footer.height= '70px'

document.body.appendChild(footer);


let logo1 = document.createElement('img')
logo1.src = './maker-(mkr).png'
logo1.style.width = '40px'
logo1.style.height = '40px'
footer.append(logo1)

let ul1 = document.createElement('ul')
ul1.style.listStyle = 'none'
ul1.style.display = 'flex'
ul1.style.gap = '30px'
footer.append(ul1)

let menu = ['Home', 'About', 'Services', 'Work', 'Blog'];

menu.forEach(text => {
    const li1 = document.createElement('li');
    li1.style.color = 'white';
    li1.style.fontFamily = 'Arial, sans-serif';
    li1.style.fontSize = '18px';
    li1.style.cursor = 'pointer';
    li1.textContent = text;
    ul1.append(li1);
});
