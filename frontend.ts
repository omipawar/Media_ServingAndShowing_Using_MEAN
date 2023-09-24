let downloadUrl = window.URL.createObjectURL(res);

getVideo() {
    const headers = new HttpHeaders().set('Range', 'bytes=0-'); // Request the initial chunk
    const options = { headers, responseType: 'blob' as 'json' };

    return this.http.get("http://localhost:8081/getVideo", options);
  }
