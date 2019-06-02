import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import jss from "jss";
import preset from "jss-preset-default";
import { BoxComponent } from "./components/box/box.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { ThemeProviderComponent } from "./theme/theme-provider/theme-provider.component";
import { FrontalModule } from "frontal";
import { TabsComponent } from "./components/tab/tabs.component";
import { TabListComponent } from "./components/tab/tab-list.component";
import { TabComponent } from "./components/tab/tab.component";
import { TabPanelsComponent } from "./components/tab/tab-panels.component";
import { TabPanelComponent } from "./components/tab/tab-panel.component";
import { CardComponent } from "./components/card/card.component";
import { CardContentComponent } from "./components/card/card-content.component";
import { RoleProviderComponent } from "./role/role-provider/role-provider.component";

jss.setup(preset());

@NgModule({
  declarations: [
    BoxComponent,
    DropdownComponent,
    ThemeProviderComponent,
    TabsComponent,
    TabListComponent,
    TabComponent,
    TabPanelsComponent,
    TabPanelComponent,
    CardComponent,
    CardContentComponent,
    RoleProviderComponent
  ],
  imports: [CommonModule, FrontalModule],
  exports: [
    BoxComponent,
    DropdownComponent,
    TabsComponent,
    TabListComponent,
    TabComponent,
    TabPanelsComponent,
    TabPanelComponent,
    ThemeProviderComponent,
    CardComponent,
    CardContentComponent,
    RoleProviderComponent
  ]
})
export class AtomicComponentModule {}
