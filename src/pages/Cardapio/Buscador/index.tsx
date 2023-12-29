import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface IBuscaProps{
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: IBuscaProps){
    return(
        <div className={styles.buscador}>
            <input 
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder="Buscar"
            />
            <CgSearch 
                size={20}
                color="#4C4D5E"
            />
        </div>
    )
}