declare class Coder {
    readonly name: string;
    music: string;
    private age;
    protected lang: string;
    secondLang: string;
    constructor(name: string, music: string, age: number, lang?: string);
    getAge(): string;
}
declare const Henry: Coder;
declare class webDev extends Coder {
    computer: string;
    constructor(computer: string, name: string, music: string, age: number);
    getLang(): string;
}
declare const Sara: webDev;
interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}
declare class Guitarist implements Musician {
    name: string;
    instrument: string;
    constructor(name: string, instrument: string);
    play(action: string): string;
}
declare const Page: Guitarist;
declare class Peeps {
    name: string;
    static count: number;
    static getCount(): number;
    id: number;
    constructor(name: string);
}
declare const John: Peeps;
declare const Steve: Peeps;
declare const Amy: Peeps;
declare class Bands {
    private dataState;
    constructor();
    get data(): string[];
    set data(value: string[]);
}
declare const MyBands: Bands;
//# sourceMappingURL=main.d.ts.map