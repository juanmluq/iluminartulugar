import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Data } from '../models/data-model';
import { dataAdapter } from '../adapters/data-adapter';
@Injectable({
  providedIn: 'root'
})
export class ServiceElectric {
  private apiUrl = '';
  private http = inject(HttpClient);

  getData():Observable<Data[]>{
    return this.http
    .get<Data[]>(this.apiUrl)
    .pipe(map((datas) => dataAdapter(datas)));
  }

  addData(data: Data) {
    return this.http.post<Data>(this.apiUrl, data)
  }

  updateData(data: Data) {
    return this.http.put<Data>(`${this.apiUrl}/${data.id}`, data)
  }

  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  state = signal({
    datas: new Map<number, Data>()
  })

  getFormattedDatas(){
    return Array.from(this.state().datas.values())
  }

  getFormattedwithSignalDatas(): void {
  const   mockDatas: Data[] = [
    { id: 1, name: 'Ana', consulta: 'Solicitar medidor residencial', tel: 1122558455 },
    { id: 2, name: 'Luis', consulta: 'Solicitar medidor trifasico', tel: 1122558645 },
    { id: 3, name: 'Sofía', consulta: 'Solicitar medidor de obra', tel: 1122558744 },
    { id: 4, name: 'Carlos', consulta: 'Solicitar medidor comercial', tel: 1122485923}
  ]
  
  of(mockDatas).subscribe((result) => {
    result.forEach((data) => 
    this.state().datas.set(data.id, data),
    );
    this.state.set({ datas: this.state().datas})
    })
  }

  updatewithSignalData(data: Data): void{
    const updateData = { ... data };
    of(updateData).subscribe((result) => {
      this.state.update((state) => {
        state.datas.set(result.id, result);
        return { datas: state.datas };
      })
    })
  }

  deletewithSignalData(id: number): void {
    of({status: 200}).subscribe(()=> {
      this.state.update((state)=> {
        state.datas.delete(id);
        return { datas: state.datas }
      })
    })
  }

}
