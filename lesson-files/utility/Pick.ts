interface AnotherTodo2 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<AnotherTodo2, "title" | "completed">;

const todo3: TodoPreview = {
    title: "Clean room",
    completed: false,
};

todo3;