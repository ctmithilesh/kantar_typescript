import Bank from "./bank";

const b1 = new Bank.Bank(
    'SBI',
    'Pune',
    'Jatin Sharma'
)
b1.viewDetails()
Bank.deposit()
Bank.withdraw()