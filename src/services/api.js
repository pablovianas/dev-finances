export async function newTransaction(data){
    const response = await fetch('http://localhost:8000/transaction/add', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return await response.json()
}

export async function getTransactions() {
    const response = await fetch("http://localhost:8000/transactions");
    return await response.json();
}

export async function getTransactionsById(id){
    const response = await fetch(`http://localhost:8000/transaction/${id}`);
    return await response.json();
}

export async function deleteTransactions(id){
    const response = await fetch(`http://localhost:8000/transactions/remove/${id}`,{
        method: 'DELETE',
    })
    return await response.json()
}
