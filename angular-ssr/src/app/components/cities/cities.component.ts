import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities/cities.service';
import { City } from 'src/app/model/city.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  public cityNames!: string[];
  private citiesSubscription!: Subscription;

  constructor(private citiesService: CitiesService) {}

  public ngOnInit(): void {
    this.citiesSubscription = this.citiesService
      .callBackend()
      .subscribe((cities: City[]) => {
        this.cityNames = cities.map((city: City) => city.name);
        console.log('this.cityNames = ' + this.cityNames);
      });
  }

  public ngOnDestroy(): void {
    this.citiesSubscription.unsubscribe();
  }
}
