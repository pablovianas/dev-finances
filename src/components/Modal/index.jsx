import { Form } from '../Form';
import * as S from './style'

export const Modal = ({
    isOpen,
    onClose,
    onSubmit,
    description,
    setDescription,
    amount,
    setAmount,
    transactionDate,
    setTransactionDate,
    handleFormSubmit,
}) => {
    return (
        <S.ModalOverlay className={isOpen ? "active" : ""}>
            <div className="modal">
                <div id="form">
                    <h2>New Transaction</h2>
                    <Form
                        onClose={onClose}
                        onSubmit={onSubmit}
                        description={description}
                        setDescription={setDescription}
                        amount={amount}
                        setAmount={setAmount}
                        transactionDate={transactionDate}
                        setTransactionDate={setTransactionDate}
                        handleFormSubmit={handleFormSubmit}
                    />
                </div>
            </div>
        </S.ModalOverlay>
    );
};