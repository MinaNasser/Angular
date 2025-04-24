import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../Services/Account.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  resultMessage: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.Logout().subscribe({
      next: (res) => {
        this.resultMessage = res;
        console.log("Logout:", res);
      },
      error: (err) => {
        this.resultMessage = "Logout Failed!";
        console.error("Error during logout:", err);
      }
    });
  }

}
