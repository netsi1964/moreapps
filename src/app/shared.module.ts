import { CardComponent } from "./shared/components/card/card.component";
import { HelloComponent } from "./shared/components/hello/hello.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    HelloComponent,
    CardComponent,
  ],
  imports: [],
  providers: [],
  exports: [HelloComponent, CardComponent],
})
export class SharedModule {}
