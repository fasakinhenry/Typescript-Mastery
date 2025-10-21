interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}
declare const updateAssignment: (assign: Assignment, propsToUpdate: Partial<Assignment>) => Assignment;
declare const assign1: Assignment;
declare const assignGraded: Assignment;
declare const recordAsssignment: (assign: Required<Assignment>) => Assignment;
declare const assignVerified: Readonly<Assignment>;
declare const hexColorMap: Record<string, string>;
type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';
declare const finalGrades: Record<Students, LetterGrades>;
interface Grades {
    assign1: number;
    assign2: number;
}
declare const gradeData: Record<Students, Grades>;
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;
declare const score: AssignResult;
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;
declare const preview: AssignPreview;
type adjustedGrade = Exclude<LetterGrades, 'U'>;
type highGrades = Extract<LetterGrades, 'A' | 'B'>;
type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;
declare const createNewAssign: (title: string, points: number) => {
    title: string;
    points: number;
};
type NewAssign = ReturnType<typeof createNewAssign>;
declare const tsAssign: NewAssign;
type AssignParams = Parameters<typeof createNewAssign>;
declare const assignArgs: AssignParams;
declare const tsAssign2: NewAssign;
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
declare const fetchUsers: () => Promise<User[]>;
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
//# sourceMappingURL=main.d.ts.map