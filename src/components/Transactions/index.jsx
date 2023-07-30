import { Table } from "../Table"
import * as S from './style'

export const Transactions = ({ handleOpenModal, transactions, setTransactions, handleDeleteEntry  }) => {
    return (
        <S.Transactions>
            <S.Link href="#" onClick={handleOpenModal}>
                + New transaction
            </S.Link>
            <Table
                transactions={transactions}
                setTransactions={setTransactions}
                handleDeleteEntry={handleDeleteEntry}
            />
        </S.Transactions>
    );
};