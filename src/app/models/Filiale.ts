import { CardDetails } from "./CardDetails";

export class Filiale{
    constructor(
        public idName = "",
        public name = "",
        public description = "",
        public cover = "",
        public logo = "",
        public logoWhite = "",
        public icon = "",
        public cardDetails = new CardDetails()
    ){}
}