import { IEmberRequest, IEmberResponse } from "../models/ember.model";
export declare const fetchEmberResponse: (request: IEmberRequest) => Promise<IEmberResponse | ErrorConstructor | string>;
