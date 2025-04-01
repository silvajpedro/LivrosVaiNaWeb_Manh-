import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const getLivros = async()=>{
        const resposta = await axios.get("https://desafio-livros-api.onrender.com/livros")
        console.log(resposta)
    }
    getLivros()

    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroProtagonista} alt="Imagem do livro o Protagonista" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susane Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}