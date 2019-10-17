import PopulateComputed from "./asr-populate-computed";
import PopulateMethods from "./asr-populate-methods";

export default class Populate {
    constructor(Router, Resolve) {
        this.PopulateComputed = new PopulateComputed(Router);
        this.PopulateMethods = new PopulateMethods(Router);

        this.PopulateComputed.createMappings(Resolve.bindersArrayForComputed, Resolve.bindersPasses);
        this.PopulateMethods.createMappings(Resolve.bindersArrayForMethods);
    }
}
