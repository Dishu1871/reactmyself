 function customrender(customreact,element){
    const domElement=document.createElement(customreact.type)
    for(const prop in customreact.props){
        if(prop==='className'){
            continue;
        }
        domElement.setAttribute(prop,customreact.props[prop])
    }
    domElement.innerHTML=customreact.Children
    element.appendChild(domElement)
}
const customreact={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    Children:'click on me',
}
const element=document.getElementById('root')
customrender(customreact,element)