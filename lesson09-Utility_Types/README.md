# Lesson 09-Utility Types

This lesson covers some of the most commonly used utility Types to make using Typescript easier. There was also the opportunity to practice with some examples.

## Topics Covered

- What are Utility types
- The `Partial` utility type with examples. Helps us update properties of an object or passed Interface
- The `Required` & `Readonly` utility types with examples. Required type ensures all properties of object are passed while Readonly ensures that the value of properties are not changed.
- The `Record` Utility type allows us to construct a type with a set of properties K of type T as in:

    ```ts
    // Definition
    type Record<K extends keyof any, T> = { [P in K]: T; }
    ```
- The `Pick` Utility type is used to pick a set of properties From T, whose keys are in the union K as in:

    ```ts
    // Definition
    type Pick<T, K extends keyof T> = { [P in K]: T[P]; }

    ```

    ```ts
    // Example
    type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

    const score: AssignResult = {
        studentId: 'k123',
        grade: 85,
    };
    ```

- The `Omit` Utility type is used to construct a type with the properties of T except for those in type K as in:

    ```ts
    // Definition
    type Pick<T, K extends keyof T> = { [P in K]: T[P]; }

    ```

    ```ts
    // Example
    type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

    const preview: AssignPreview = {
        studentId: 'k123',
        title: 'Final Project',
    };
    ```

- The `Exclude` Utility type is used to exclude particular types from union of literals.
    ```ts
    // Definition
    type Exclude<T, U> = T extends U ? never : T
    ```

    ```ts
    // Example
    type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

    type adjustedGrade = Exclude<LetterGrades, 'U'>;
    ```

- The `Extract` Utility type is used to extract particular types from a union of literals.
    ```ts
    // Definition
    type Extract<T, U> = T extends U ? T : never
    ```

    ```ts
    // Example
    type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

    type highGrades = Extract<LetterGrades, 'A' | 'B'>;
    ```

- The `NonNullable` Utility type is used to exclude null and undefined from a union of Type.

    ```ts
    // Definition
    type NonNullable<T> = T & {}
    ```

    ```ts
    // Example
    type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
    type NamesOnly = NonNullable<AllPossibleGrades>;
    ```

- The `ReturnType` Utility type is used to obtain the return type of a function type

    ```ts
    // Definition
    type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
    ```

    ```ts
    // Example
    const createNewAssign = (title: string, points: number) => {
        return { title, points };
    };

    type NewAssign = ReturnType<typeof createNewAssign>;

    const tsAssign: NewAssign = createNewAssign('Utility Types', 100);
    console.log(tsAssign);
    ```
- The `Parameter` Utility type is used to obtain the parameters of a function type in a tuple.

    ```ts
    // Definition
    type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
    ```

    ```ts
    // Example
    const createNewAssign = (title: string, points: number) => {
        return { title, points };
    };
    type AssignParams = Parameters<typeof createNewAssign>;

    const assignArgs: AssignParams = ['Generics', 100];

    const tsAssign2: NewAssign = createNewAssign(...assignArgs);
    console.log(tsAssign2);
    ```

- The `Awaited` utility type is used to return the type of a promise and behaves like an await.

## How to run the code

1. Ensure you have Node.js installed on your machine.
2. Navigate to the lesson09-Utility_Types directory.

```bash
cd lesson09-Utility_Types
```
3. Install TypeScript globally if you haven't already:

```bash
npm install -g typescript
```
4. Compile the TypeScript code to JavaScript using the Watch flag so you can see changes in real-time:

```bash
tsc -w
```
5. Open the `src/main.ts` file and make changes to see how TypeScript compiles it to JavaScript in the `build/js` directory.
6. Go to the build directory and open the `index.html` file in your browser to see the output.
7. Open the browser console to see the logged output from the TypeScript code. You can use the shortcut `F12` or `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open the developer tools and navigate to the Console tab.

> Made with ❤️ by [Fasakin Henry](https://github.com/fasakinhenry)
