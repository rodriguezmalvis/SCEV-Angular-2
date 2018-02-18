import { Injectable } from "@angular/core";

@Injectable()
export class MaskService{

    getMaskPreco(){
        return [/\d/,/\d/,'.',/\d/,/\d/];
    }

}