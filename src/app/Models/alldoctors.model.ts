import { Doctor } from "./doctor.model";

export interface DocResponse{

    data: Doctor[];
    status : boolean;
}
