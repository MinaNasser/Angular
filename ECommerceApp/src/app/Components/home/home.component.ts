import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/Notification.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,OnDestroy{

  notification: string[] = [];
  subscription!: Subscription ;
  constructor( private _notificationS: NotificationService){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    // this._notificationS.getNotification().subscribe((data) => {
    //   console.log(data);
    // })

    this.subscription = this._notificationS.getNotification()
    .pipe(
      map((data) => data.toUpperCase()),
      
      filter((data) => data != '')
    )
    .subscribe({
      next: (data) => {
        this.notification.push(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

}
