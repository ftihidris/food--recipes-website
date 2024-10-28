import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule]
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
      
    }
}