
import styles from './styles/Section.module.css'
import { Navbar } from './Navbar'
import { useState } from 'react'

export const Section = ({ img_src, content }) => {

    const contentKeys = Object.keys(content)
    const [ title, setTitle ] = useState(contentKeys[0])
    const [ description, setDescription ] = useState(content[contentKeys[0]])

    function click({ target }) {
        setTitle(target.textContent)
        setDescription(content[target.textContent])
    }

    return (
        <section className={styles.section}>
            <img src={img_src} />
            <div>
                <Navbar links={contentKeys} event={click}/>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}