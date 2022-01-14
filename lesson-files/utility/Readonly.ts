interface AnotherTodo {
    title: string;
}

const todo: Readonly<AnotherTodo> = {
    title: "Delete inactive users",
};

// todo.title = "Hello";
// Cannot assign to 'title' because it is a read-only property.