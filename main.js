const container = document.createElement('div')
container.setAttribute('class', 'container')

const holdIt = document.createElement('div')
const hOne = document.createElement('h2')
const tOne = document.createElement('p')
const btn = document.createElement('button')
const btn1 = document.createElement('button')
hOne.innerText="Książka1"
tOne.innerText="Lorem ipsum dolor, sit amet consectetur sit amet consectetur ipsum dolor adipisicing elit. Earum eveniet vero mollitia, culpa sed id porro laboriosam assumenda sapiente nemo reiciendis dicta?"
btn.innerText="USUŃ"
btn1.innerText="EDYTUJ"
holdIt.setAttribute('class', 'gi')
tOne.setAttribute('class', 'mft')
hOne.setAttribute('class', 'mfh')
btn.setAttribute('class', 'btn')
btn.setAttribute('onclick', 'remove()')
btn1.setAttribute('class', 'btn')
holdIt.appendChild(hOne)
holdIt.appendChild(tOne)
holdIt.appendChild(btn)
holdIt.appendChild(btn1)
container.appendChild(holdIt)

const holdIt2 = document.createElement('div')
const hTwo = document.createElement('h2')
const tTwo = document.createElement('p')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
tTwo.innerText="Lorem ipsum dolor, sit amet consectetur sit amet consectetur ipsum dolor adipisicing elit. Earum eveniet vero mollitia, culpa sed id porro laboriosam assumenda sapiente nemo reiciendis dicta?"
btn2.innerText="USUŃ"
btn3.innerText="EDYTUJ"
hTwo.innerText="Książka2"
holdIt2.setAttribute('class', 'gi')
hTwo.setAttribute('class', 'mfh')
tTwo.setAttribute('class', 'mft')
btn2.setAttribute('class', 'btn')
btn2.setAttribute('onclick', 'remove1()')
btn3.setAttribute('class', 'btn')
holdIt2.appendChild(hTwo)
holdIt2.appendChild(tTwo)
holdIt2.appendChild(btn2)
holdIt2.appendChild(btn3)
container.appendChild(holdIt2)


const holdIt3 = document.createElement('div')
const hThird = document.createElement('h2')
const tThird = document.createElement('p')
const btn4 = document.createElement('button')
const btn5 = document.createElement('button')
hThird.innerText="Książka3"
tThird.innerText="Lorem ipsum dolor, sit amet consectetur sit amet consectetur ipsum dolor adipisicing elit. Earum eveniet vero mollitia, culpa sed id porro laboriosam assumenda sapiente nemo reiciendis dicta?"
btn4.innerText="USUŃ"
btn5.innerText="EDYTUJ"
holdIt3.setAttribute('class', 'gi')
hThird.setAttribute('class', 'mfh')
tThird.setAttribute('class', 'mft')
btn4.setAttribute('class', 'btn')
btn4.setAttribute('onclick', 'remove2()')
btn5.setAttribute('class', 'btn')
holdIt3.appendChild(hThird)
holdIt3.appendChild(tThird)
holdIt3.appendChild(btn4)
holdIt3.appendChild(btn5)
container.appendChild(holdIt3)

const holdIt4 = document.createElement('div')
const hFour = document.createElement('h2')
const tFour = document.createElement('p')
const btn6 = document.createElement('button')
const btn7 = document.createElement('button')
hFour.innerText="Książka4"
tFour.innerText="Lorem ipsum dolor, sit amet consectetur sit amet consectetur ipsum dolor adipisicing elit. Earum eveniet vero mollitia, culpa sed id porro laboriosam assumenda sapiente nemo reiciendis dicta?"
btn6.innerText="USUŃ"
btn7.innerText="EDYTUJ"
holdIt4.setAttribute('class', 'gi')
hFour.setAttribute('class', 'mfh')
tFour.setAttribute('class', 'mft')
btn6.setAttribute('class', 'btn')
btn6.setAttribute('onclick', 'remove3()')
btn7.setAttribute('class', 'btn')
holdIt4.appendChild(hFour)
holdIt4.appendChild(tFour)
holdIt4.appendChild(btn6)
holdIt4.appendChild(btn7)
container.appendChild(holdIt4)

const holdIt5 = document.createElement('div')
const hFive = document.createElement('h2')
const tFive = document.createElement('p')
const btn8 = document.createElement('button')
const btn9 = document.createElement('button')
hFive.innerText="Książka5"
tFive.innerText="Lorem ipsum dolor, sit amet consectetur sit amet consectetur ipsum dolor adipisicing elit. Earum eveniet vero mollitia, culpa sed id porro laboriosam assumenda sapiente nemo reiciendis dicta?"
btn8.innerText="USUŃ"
btn9.innerText="EDYTUJ"
holdIt5.setAttribute('class', 'gi')
btn8.setAttribute('class', 'btn')
btn8.setAttribute('onclick', 'remove4()')
btn9.setAttribute('class', 'btn')
hFive.setAttribute('class', 'mfh')
tFive.setAttribute('class', 'mft')
holdIt5.appendChild(hFive)
holdIt5.appendChild(tFive)
holdIt5.appendChild(btn8)
holdIt5.appendChild(btn9)
container.appendChild(holdIt5)


const holdIt6 = document.createElement('div')
const hSix = document.createElement('h2')
const tSix = document.createElement('p')
const btn10 = document.createElement('button')
const btn11 = document.createElement('button')
hSix.innerText="Książka6"
tSix.innerText="Lorem ipsum dolor, sit amet consectetur sit amet consectetur ipsum dolor adipisicing elit. Earum eveniet vero mollitia, culpa sed id porro laboriosam assumenda sapiente nemo reiciendis dicta?"
btn10.innerText="USUŃ"
btn11.innerText="EDYTUJ"
holdIt6.setAttribute('class', 'gi')
tSix.setAttribute('class', 'mft')
btn10.setAttribute('class', 'btn')
btn10.setAttribute('onclick', 'remove5()')
btn11.setAttribute('class', 'btn')
hSix.setAttribute('class', 'mfh')
holdIt6.appendChild(hSix)
holdIt6.appendChild(tSix)
holdIt6.appendChild(btn10)
holdIt6.appendChild(btn11)
container.appendChild(holdIt6)

gridzik.appendChild(container)

function remove(){
    container.removeChild(holdIt)
}

function remove1() {  
    container.removeChild(holdIt2)
}

function remove2() {  
    container.removeChild(holdIt3)
}

function remove3() {  
    container.removeChild(holdIt4)
}

function remove4() {  
    container.removeChild(holdIt5)
}

function remove5() {  
    container.removeChild(holdIt6)
}

