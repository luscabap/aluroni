import { Navigate, useParams } from 'react-router-dom';
import styles from './Admin.module.scss';


export default function Admin(){
    const { user } = useParams();

    if(user !== "admin") {
        return <Navigate to="/" />
    }
    return (
        <>
            <h1>USUÁRIO LOGADO COM SUCESSO</h1>
        </>
    )

    
}