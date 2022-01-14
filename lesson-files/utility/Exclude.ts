type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = "b" | "c"
type T2 = Exclude<"a" | "b" | "c", "a" | "b">;

type T3 = "c"
type T4 = Exclude<string | number | (() => void), Function>;