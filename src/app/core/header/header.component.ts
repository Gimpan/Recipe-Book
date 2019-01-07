import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  secretSecure: Boolean = true;
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService, public authService: AuthService) { }

  ngOnInit() {
  }

  OnSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}