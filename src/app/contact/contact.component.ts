import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  handleBooking(event: Event) {
    event.preventDefault();
    console.log('Booking submitted');
    alert('Table booked successfully!');
  }

}
