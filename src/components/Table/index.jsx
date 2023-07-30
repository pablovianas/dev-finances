import minus from '../../assets/minus.svg'
import { currencyFormatter, dateFormatter } from '../../utils';
import * as S from './style'

export const Table = ({ transactions, handleDeleteEntry }) => {
    return (
        <S.Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Transaction Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {transactions.length > 0 ? 
                            transactions.map((transaction) => {
                                return (
                                    <tr key={transaction.id}>
                                        <td>{transaction.id}</td>
                                        <td>{transaction.description}</td>
                                        <td className={transaction.amount < 0 ? 'outflow' : 'inflow'}>{currencyFormatter(transaction.amount)}</td>
                                        <td>{dateFormatter(transaction.transactionDate)}</td>
                                        <td>
                                            <img
                                                src={minus}
                                                onClick={() => handleDeleteEntry(transaction.id)}
                                                alt="Remove transaction"
                                            />
                                        </td>
                                    </tr>
                                );
                            })
                : <tr>No transactions found!</tr>}
            </tbody>
        </S.Table>
    );
};