import { saveAs } from 'file-saver';
let downloadUrl = window.URL.createObjectURL(res);
saveAs(downloadUrl);

getVideo() {
    const headers = new HttpHeaders().set('Range', 'bytes=0-'); // Request the initial chunk
    const options = { headers, responseType: 'blob' as 'json' };

    return this.http.get("http://localhost:8081/getVideo", options);
  }
