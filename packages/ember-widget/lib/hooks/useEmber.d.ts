import { IEmberRequest, IEmberResponse } from "../models/ember.model";
export declare const fetchEmberResponse: (request: IEmberRequest, eventEmitter: EventTarget) => Promise<IEmberResponse | ErrorConstructor | string>;
