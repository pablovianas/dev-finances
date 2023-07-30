import { Cards } from "../Cards"
import * as S from './style'
import incomeIcon from '../../assets/income.svg'
import expenseIcon from '../../assets/expense.svg'
import totalIcon from '../../assets/total.svg'

export const Balance = ({income, expense, total}) => {
    const balances = [
        {
            description: "incomes",
            image: incomeIcon,
        },
        {
            description: "expenses",
            image: expenseIcon,
        },
        {
            description: "total",
            image: totalIcon,
        },
    ];
    return (
        <S.Balance>
            <Cards balances={balances} income={income} expense={expense} total={total}></Cards>
        </S.Balance>
    );
}