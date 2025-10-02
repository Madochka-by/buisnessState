import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsRouting } from './about-us-routing.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRouting],
})
export class AboutUsModule {}
