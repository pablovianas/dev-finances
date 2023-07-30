import { currencyFormatter } from '../../utils';
import * as S from './style';

export const Cards = ({balances, income, expense, total}) => {
    const balancesEntries = {
        incomes: income,
        expenses: expense,
        total: total
    }
    
    return (
        <>
            {
                balances.map((balance)=> {
                    return (
                        <S.Cards key={balance.description}>
                            <div>
                                <span>{balance.description}</span>
                                <img
                                    src={balance.image}
                                    alt={`Imagem de ${balance.description}`}
                                />
                            </div>
                            <p>
                                {
                                    currencyFormatter(balancesEntries[balance.description])
                                }
                            </p>
                        </S.Cards>
                    );
                })
            }
        </>
       
    );
}