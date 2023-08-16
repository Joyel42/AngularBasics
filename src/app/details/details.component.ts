import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocationId = 0;
  route:ActivatedRoute = inject(ActivatedRoute)
  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}
