import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MyServiceService {
  url = "https://bpegm.co/tejali/";
  constructor(private http: HttpClient) {}

  getAllDownloads(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + "download/read.php?pageno=" + pageno + "&pagesize=" + pagesize
    );
  }

  getSingleDownload(id): Observable<any> {
    return this.http.get(this.url + "download/read_one.php?id=" + id);
  }

  getAllNotices(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + "notices/read.php?pageno=" + pageno + "&pagesize=" + pagesize
    );
  }

  getSingleNotice(id): Observable<any> {
    return this.http.get(this.url + "notices/read_one.php?id=" + id);
  }

  getAllImages(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + "gallery/read.php?pageno=" + pageno + "&pagesize=" + pagesize
    );
  }

  getSingleImage(id): Observable<any> {
    return this.http.get(this.url + "gallery/read_one.php?id=" + id);
  }

  getAllVideos(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + "youtube/read.php?pageno=" + pageno + "&pagesize=" + pagesize
    );
  }

  getSingleVideoe(id): Observable<any> {
    return this.http.get(this.url + "youtube/read_one.php?id=" + id);
  }
}
