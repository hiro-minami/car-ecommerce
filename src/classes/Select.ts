interface Select {
    getId: () => string;
    getName: () => string;
    setId: (newId: string) => void;
    setName: (newName: string) => void;
}

export default Select;
