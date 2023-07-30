import * as S from './style'

export const Form = ({
    onClose,
    description,
    setDescription,
    amount,
    setAmount,
    transactionDate,
    setTransactionDate,
    handleFormSubmit,
}) => {
    return (
        <S.Form onSubmit={handleFormSubmit}>
            <div className="input-group">
                <label className="sr-only" htmlFor="description">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>

            <div className="input-group">
                <label className="sr-only" htmlFor="amount">
                    Amount
                </label>
                <input
                    type="number"
                    step="0.01"
                    id="amount"
                    name="amount"
                    placeholder="0,00"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
            </div>

            <div className="input-group">
                <label className="sr-only" htmlFor="date">
                    Transaction Date
                </label>
                <input
                    type="date"
                    step="0.01"
                    id="date"
                    name="date"
                    value={transactionDate}
                    onChange={(event) => setTransactionDate(event.target.value)}
                />
            </div>
            <div className="input-group actions">
                <a onClick={onClose} href="#" className="button cancel">
                    Cancel
                </a>
                <button>Save</button>
            </div>
        </S.Form>
    );
};

