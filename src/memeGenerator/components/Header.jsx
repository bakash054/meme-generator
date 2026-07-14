export default function Header(){
    const headerName = import.meta.env.VITE_HEADER_NAME

    return(
        <header className="header">
                <img src="/images/meme-logo.jpg" className="header-img"/>
                <h1 className="header-title">{headerName}</h1>
        </header>
    )
}