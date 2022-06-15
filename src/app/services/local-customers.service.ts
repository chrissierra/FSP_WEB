import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalCustomers, Item } from './../interfaces/local-customers.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalCustomersService {

  private API_URL = `${environment.apiUrl}/app/local-customers`;
  private API_KEY = "eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFkbWluIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJBUFAtVEZQIiwiaWQiOjQsInV1aWQiOiJhMTRhYzY0OC0yNjE2LTRiNTEtODEyYi03YTEzN2YzNzhiYmYifSwiaXNzIjoiaHR0cHM6XC9cL2FwaW0ubW9iaWxlLnFhLmdydXBvY2hpZW4ubG9jYWw6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IkdvbGQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiU0FOREJPWCIsInBlcm1pdHRlZFJlZmVyZXIiOiIiLCJzdWJzY3JpYmVkQVBJcyI6W3sic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJURlAtQVBQLVNFUlZJQ0VTIiwiY29udGV4dCI6IlwvdGZwXC9hcHBcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiR29sZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJGUC1NVy1TRVJWSUNFUyIsImNvbnRleHQiOiJcL2ZwXC9td1wvMS4wLjEiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAuMSIsInN1YnNjcmlwdGlvblRpZXIiOiJHb2xkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlRGUC1BUFAtQkFTSUMtU0VSVklDRVMiLCJjb250ZXh0IjoiXC90ZnBcL2FwcFwvYmFzaWNcLzEuMC4xIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiR29sZCJ9XSwidG9rZW5fdHlwZSI6ImFwaUtleSIsInBlcm1pdHRlZElQIjoiIiwiaWF0IjoxNjQ0MjQyMDQ3LCJqdGkiOiJjMjNhMzZkMS0zNzlkLTRiOGUtYTQwNS1jYTQwNThiMWVjNDEifQ==.UW5dRoc-6LfxrG0BYX0OnpZdl_3pQh1q2iwRGWP8CH0NxhgIIf_85SzW7uNDYaNZb8BnG6YgYsOshITrNzeuQUFhRYTn2X4zKhWn6LZAYunjZkb3X5l3LQ5oCgJolWdbkg5Mlw9xMuig5cnBTiIRwSqsfWaNS1vDWtsD0Wq7rZhe1_vjbT7uTFsU-BFnM2zTzy1dQgU6vUsym3FyiTfebfUej4EHngL7v8ZsB2irZcNITxpnpLufUUfYf55zaf1MnL3gJjKGCyvk1kYcB-_U2VD_1P1gOI41Br2CN9mUTPIhSESVUC4eAa-40bcxEJ3Zb8b11ENATvszX2JNzharEg=="

  constructor(
    private http: HttpClient
  ) { }

  // Obtener todos los Local Customers

    getAllLocalCustomers (){
      let headers = new HttpHeaders();
      headers = headers.set('apikey', this.API_KEY)
      return this.http.get<LocalCustomers>(`${this.API_URL}`, {
        headers
      });
    }
  // Obtener todos los local customers por pagina

    getLocalCustomersByPage (page: number, rows: number) {
      let headers = new HttpHeaders();
      headers = headers.set('apikey', this.API_KEY);
      return this.http.get<LocalCustomers>(`${this.API_URL}`, {
        params: {page, rows},
        headers
      });
    }
//Registrar nuevos local Customers

    registerLocalCustomers (dto: Item) {
      let headers = new HttpHeaders();
      headers = headers.set('apikey', this.API_KEY);
      return this.http.post<LocalCustomers>(`${this.API_URL}`, dto, {
        headers
      });
    }
    //Modificar un Local Customers

    updateLocalCustomers (rut: string, dv: string, dto: Item) {
      let headers = new HttpHeaders();
      headers = headers.set('apikey', this.API_KEY);
      return this.http.put<LocalCustomers>(`${this.API_URL}/${rut}${dv}`, dto, {
        headers
      });
    }
    //Borrar el Local Customers

    deleteLocalCustomers (rut: string) {
      let headers = new HttpHeaders();
      headers = headers.set('apikey', this.API_KEY);
      return this.http.delete<boolean>(`${this.API_URL}/${rut}`, {
        headers
      });
    }
}
