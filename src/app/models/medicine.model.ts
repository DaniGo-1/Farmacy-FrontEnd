import { Shelf } from './shelf.model';
import { Provider } from './provider.model';

export class Medicine{
    constructor(
        public id_medicine : number,
        public name : string,
        public price : number,
        public stock : number,
        public shelf : Shelf,
        public provider : Provider
    ){}
}