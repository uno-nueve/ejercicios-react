import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL

    constructor(name, description, comleted, level) {
        this.name = name;
        this.description = description;
        this.completed = comleted;
        this.level = level
    }

}