type T6 = Extract<"a" | "b" | "c", "a" | "f">;

type T7 = "a"
type T8 = Extract<string | number | (() => void), Function>;