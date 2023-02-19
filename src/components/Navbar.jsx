


export const Navbar = ({ links, event }) => {
    return (
        <nav>
            {
                links.map( (link, index) => (
                    <a key={index} onClick={event}>{link}</a>
                ))
            }
        </nav>
    )
}