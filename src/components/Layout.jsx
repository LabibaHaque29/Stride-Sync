export default function Layout(props) {

    const {children} = props 
    
    const header = (
        <header>
            <h1 className = "text-gradient">Stride Sync</h1>
            <p><strong>The 30 Simple Training and Tracker</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built By <a href = "https://www.labibahaque.netlify.app" target ="_blank">Labiba Haque</a> <br/> Styled with <a href ="https://www.fantacss.labibahaque.com" target ="_blank">FantaCSS</a> </p>
        </footer>
    )

    //https://www.LabibaHaque.netlify.app

    return (
        <>
            {header}
            {children}
            {footer}
            
        </>
    )
}