export const currencyFormatter = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(amount);
}
export const dateFormatter = (date) => {
    const dateToString = date;
    const formattedDate = new Date(dateToString);

    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short'
    }).format(formattedDate)
}