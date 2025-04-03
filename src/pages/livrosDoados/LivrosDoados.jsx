import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const resposta = await axios.get("https://desafio-livros-api.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(() => {
        getLivros()
        alert("useEffect executou")
    }, [])

    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                {livros.map((item) => (
                    <section>
                        <div>
                            <h3>{item.titulo}</h3>
                            <img src={item.image_url} alt={item.titulo} />
                        </div>
                    </section>
                ))}

            </section>
        </section>
    )
}