import { SafeUrl } from "@angular/platform-browser";
import { FileHandle } from "./file-handle";

export interface RegisterProduct {
    controls: any;

    pemail?:String;
    pname?:String;
    image?:FileHandle[];

    
}


