import classNames from 'classnames';
import styles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json'
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';

export default function Prato(){

    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));
    const navigate = useNavigate()

    if (!prato) {
        return <NotFound />;
    }
    return (
        <>
            <button className={styles.voltar} onClick={() => navigate("/")}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <TagsPrato {...prato} />
                </div>
            </section>
        </>
    )
}