import  logo from '../../assets/logo.svg'
import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <img src={logo} alt="Dev Finances" />
        </S.Header>
    );
}