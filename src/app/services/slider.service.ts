import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListResponseModel } from "app/models/listResponseModel";
import { ResponseModel } from "app/models/responseModel";
import { SingleResponseModel } from "app/models/singleResponseModel";
import { Slider } from "app/pages/sliders/slider";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SliderService {
  constructor(private http: HttpClient) {}
  apiUrl = "https://localhost:44336/api/Sliders";

  getSliders(): Observable<ListResponseModel<Slider>> {
    return this.http.get<ListResponseModel<Slider>>(this.apiUrl + "/getall");
  }

  addSlider(slider: Slider): Observable<any> {
    return this.http.post<ResponseModel>(this.apiUrl + "/add", slider);
  }

  deleteSlider(sliderId: number): Observable<SingleResponseModel<Slider>> {
    const url = `${this.apiUrl}/${sliderId}`;
    return this.http.delete<SingleResponseModel<Slider>>(url);
  }

  getSliderById(sliderId: number): Observable<SingleResponseModel<Slider>> {
    return this.http.get<SingleResponseModel<Slider>>(
      this.apiUrl + "/getbyid?sliderId=" + sliderId
    );
  }

  editSlider(slider: Slider): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "/update", slider);
  }
}
