export type Transaction = {
   description: string,
   value: number,
   date: string,
}

export type userAccount = {
   cpf: string,
   name: string,
   age: number,
   balance: number | null,
   transactions: Transaction[],
}
