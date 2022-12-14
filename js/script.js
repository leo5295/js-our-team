let persona = [
    {
        nome: ('Wayne Barnett'),
        role: ('Founder & CEO'),
        image: ('wayne-barnett-founder-ceo.jpg')
    },
    {
        nome: ('Angela Caroll'),
        role: ('Chief Editor'),
        image: ('angela-caroll-chief-editor.jpg')
    },
    {
        nome: ('Walter Gordon'),
        role: ('Office Manager'),
        image: ('walter-gordon-office-manager.jpg')
    },
    {
        nome: ('Angela Lopez'),
        role: ('Social Media Manager'),
        image: ('angela-lopez-social-media-manager.jpg')
    },
    {
        nome: ('Scott Estrada'),
        role: ('Developer'),
        image: ('scott-estrada-developer.jpg')
    },
    {
        nome: ('Barbara Ramos'),
        role: ('Graphic Designer'),
        image: ('barbara-ramos-graphic-designer.jpg')
    },
]


for (let i = 0; i < persona.length; i++) {
    const element = persona[i];
    console.log(element.nome + element.role + element.image)
}

// for (let key in persona) {
//     console.log(persona[key])
// }

const lista = document.querySelector('.lista');

for (let i = 0; i < persona.length; i++) {
    const element = persona[i];
    let list_item = element.nome + element.role + element.image;
    lista.innerHTML += list_item;
}