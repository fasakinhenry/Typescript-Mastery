interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}
declare const todaysTransactions: TransactionObj;
declare let prop: string;
declare const todaysNet: (transactions: TransactionObj) => number;
interface Student {
    name: string;
    GPA: number;
    classes?: number[];
}
declare const student: Student;
declare const logStudentKey: (student: Student, key: keyof Student) => void;
type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number | string>;
declare const monthlyIncomes: Incomes;
//# sourceMappingURL=main.d.ts.map