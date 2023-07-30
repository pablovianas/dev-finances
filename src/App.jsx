import { useState, useEffect } from "react";
import { styled } from "styled-components"
import { Header } from "./components/Header"
import { Balance } from "./components/Balance"
import { Transactions } from "./components/Transactions";
import { Modal } from "./components/Modal";
import toast, { Toaster } from "react-hot-toast";
import { deleteTransactions, getTransactions, getTransactionsById, newTransaction } from "./services/api";

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [transactionDate, setTransactionDate] = useState("");
    

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);


    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setDescription("");
        setAmount(0);
        setTransactionDate("");
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
            const formData = { description, amount, transactionDate };
            console.log(formData);
            if (formData.description === "" || formData.amount === 0 || formData.transactionDate === ''){
                toast.error("Please fill all fields correctly!")
                setDescription("");
                setAmount(0);
                setTransactionDate("");
                return
            }
            if (amount > 0) {
                setIncome(income + Number(formData.amount));
            } else {
                setExpense(expense + Number(formData.amount));
            }
            setTotal(total + Number(formData.amount));

            newTransaction(formData);
            toast.success("Transaction created successfully");
            setDescription("");
            setAmount(0);
            setTransactionDate("");
            setModalOpen(false);
        } catch (error) {
             toast.error("Some error happened while creating transaction");
             setDescription("");
             setAmount(0);
             setTransactionDate("");
             setModalOpen(false);
        }
        
    };

    const handleDeleteEntry = async (index) => {
        try {
            const transactionToBeDeleted = await getTransactionsById(index);
            const amountToBeCalculated = transactionToBeDeleted[0].amount;
            console.log(amountToBeCalculated);
    
            if (amountToBeCalculated > 0) {
                setIncome(income - amountToBeCalculated);
            } else {
                setExpense(expense - amountToBeCalculated);
            }
            setTotal(total - amountToBeCalculated);
            deleteTransactions(index)
            toast.success("Transaction deleted successfully")
            
        } catch (error) {
            toast.error("Some error happened while deleting transaction");

        }
    };

    async function updateTransactions(){
        let totalIncome = 0;
        let totalExpense = 0;
        const transactionData = await getTransactions();
        setTransactions(transactionData)
        transactionData.map((transaction) => {
            if (transaction.amount > 0) {
                totalIncome += Number(transaction.amount);
            } else {
                totalExpense += Number(transaction.amount);
            }
        });
        setIncome(totalIncome)
        setExpense(totalExpense)
        setTotal(totalIncome + totalExpense)
    }

    useEffect(() => {
        updateTransactions();
    },[transactions])


    return (
        <>
            <Header />
            <Main>
                <Balance
                    transactions={transactions}
                    income={income}
                    expense={expense}
                    total={total}
                />
                <Transactions
                    handleOpenModal={handleOpenModal}
                    transactions={transactions}
                    setTransactions={setTransactions}
                    handleDeleteEntry={handleDeleteEntry}
                />
            </Main>
            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                description={description}
                setDescription={setDescription}
                amount={amount}
                setAmount={setAmount}
                transactionDate={transactionDate}
                setTransactionDate={setTransactionDate}
                handleFormSubmit={handleFormSubmit}
            />
            <Toaster />
        </>
    );
}

const Main = styled("main")`
    width: min(90vw, 800px);
    margin: auto;
    transform: translateY(-15%);
`;

export default App
