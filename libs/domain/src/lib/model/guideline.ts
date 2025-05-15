import {Entity} from "../../archtype/entity";
import {GuidelineDescription} from "../description/guideline.description";

export class Guideline implements Entity<number, GuidelineDescription> {
    constructor(private readonly identity: number, private readonly description: GuidelineDescription) {
    }

    getIdentity(): number {
        return this.identity
    }

    getDescription(): GuidelineDescription {
        return this.description
    }
}