interface TodoOmit {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreviewOmit = Omit<TodoOmit, "description">;

const todo4: TodoPreviewOmit = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
