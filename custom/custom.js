function renderfunction(custom,main){
    let newTag = document.createElement(custom.tag)
    newTag.innerHTML = custom.children
    // newTag.setAttribute("href",custom.props.href)
    // newTag.setAttribute("target",custom.props.target)
    
    for (let prop in custom.props) {
        if (prop==="children") continue;
        newTag.setAttribute(prop,custom.props[prop])
    }
    main.appendChild(newTag)

}

const customElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children: "Click ME"
}


const mainContainer = document.querySelector('#root')
renderfunction(customElement,mainContainer)

