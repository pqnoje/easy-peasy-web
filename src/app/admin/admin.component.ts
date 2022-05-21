import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Valuable } from '../valuable.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private baseUrl = 'http://localhost:3000'
  valuable: Valuable
  constructor(private http: HttpClient) {
    this.valuable = new Valuable('Product', 'Product description.', 9.99)
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData()
    formData.append('file', file)
    formData.append('title', this.valuable.title)
    formData.append('description', this.valuable.description)
    formData.append('value', `${this.valuable.value}`)
    
    const req = new HttpRequest(
      'POST', 
      `${this.baseUrl}/upload`, 
      formData, {
      reportProgress: true,
      responseType: 'json'
    })
    return this.http.request(req)
  }

  selectedFiles?: FileList
  currentFile?: File
  progress = 0
  message = ''

  selectFile(event: any): void {
    this.selectedFiles = event.target.files
  }

  upload(): void {
    this.progress = 0
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0)
      if (file) {
        this.currentFile = file
        this.uploadFile(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total)
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message
            }
          },
          error: (err: any) => {
            console.log(err)
            this.progress = 0
            if (err.error && err.error.message) {
              this.message = err.error.message
            } else {
              this.message = 'Could not upload the file!'
            }
            this.currentFile = undefined
          }
        })
      }
      this.selectedFiles = undefined
    }
  }

  ngOnInit(): void {
  }

}
