namespace Bank {

    export function deposit() {
        console.log('You deposited money!')

    }

    export function withdraw() {
        console.log('you withdrew money')
    }

    export function getLoan(){
        console.log('You are eligible to get a loan')
    }

    export class Bank {

        bank_name: string
        bank_branch: string
        bank_manager: string

        constructor(bank_name: string, bank_branch: string, bank_manager: string) {

            this.bank_name = bank_name
            this.bank_branch = bank_branch
            this.bank_manager = bank_manager

        }

        viewDetails() {
            console.log('displaying details....')
        }

    }

}
export default Bank