import {Guideline} from "./guideline";
import {GuidelineDescription} from "../description/guideline.description";

describe('guideline', () => {
    let guideline: Guideline
    let mockDescription: GuidelineDescription
    beforeEach(() => {
        mockDescription = {} as GuidelineDescription
        guideline = new Guideline(1, mockDescription)
    })

    it('should get identity', () => {
        expect(guideline.getIdentity()).toEqual(1)
    })

    // TODO: description 对外不可变
    xit('should get description', () => {
        expect(guideline.getDescription()).toEqual(mockDescription);
        expect(guideline.getDescription()).not.toBe(mockDescription);
    })
})