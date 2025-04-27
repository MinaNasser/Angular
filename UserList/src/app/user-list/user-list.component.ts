import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // استيراد HttpClientModule
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from '../Search/Search.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SearchComponent, UserCardComponent, CommonModule, HttpClientModule],  // إضافة HttpClientModule هنا
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  filteredUserList: any[] = [];
  selectedUser: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/users.json').subscribe((response: any) => {
      this.userList = response;
      this.filteredUserList = response; // عرض جميع المستخدمين عند التحميل
    });
    console.log(this.userList);
  }

  onUserSelect(user: any) {
    this.selectedUser = user;
  }

  onSearch(query: string) {
    if (query) {
      this.filteredUserList = this.userList.filter(user =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredUserList = this.userList; // إذا لم يكن هناك نص بحث، عرض جميع المستخدمين
    }
  }

  trackById(index: number, user: any): number {
    return user.id;
  }
}
