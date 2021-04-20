import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

const BACKEND_URL = null

export interface IUpdate {
  fieldName: string
  fieldValue: string
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  delete(router: string, data: Array<string>) {
    return this.http.post(`${BACKEND_URL}/${router}`, { deleted_id: data })

  }

  getHelper(name: string) {
    return this.http.get<{ message: string; data: any }>(
      `${BACKEND_URL}/helper/${name}`
    )
  }

  update(router: string, data: Array<string>, type) {
    return this.http.post(`${BACKEND_URL}/${router}`, {
      deleted_id: data,
      type,
    })
  }
}
