import iconeLivro from '../../assets/iconeLivroForm.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from "axios"

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url, setImage_Url] = useState("")

    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImage_Url(e.target.value)
    }

    const enviarDados = async()=>{
        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
       await axios.post("https://desafio-final-2-0.onrender.com/doar",dadosAEnviar)
        alert("Obrigado, seu livro foi cadastrado com sucessso!")
    }

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
            <input type="text" placeholder='Título' onChange={capturarTitulo} required/>
            <input type="text" placeholder='Categoria' onChange={capturaCategoria} required/>
            <input type="text" placeholder='Autor' onChange={capturaAutor} required/>
            <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} required/>
            <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados}/>
            </form>
        </section>
    )
}