import { Data } from "../models/data-model"

export const dataAdapter = (datas: Data[]) => 
    datas.map((c) => ({...c, name: c.name.toUpperCase()}))
