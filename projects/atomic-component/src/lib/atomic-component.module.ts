import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import jss from "jss";
import preset from "jss-preset-default";
import { BoxComponent } from "./components/box/box.component";
import { DropdownComponent } from "./components/frontal/dropdown.component";
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
import { ChevronDownIconComponent } from "./svg/chevron-down-icon/chevron-down-icon.component";
import { ChevronUpIconComponent } from "./svg/chevron-up-icon/chevron-up-icon.component";
import { DropdownBootstrapComponent } from "./components/frontal/dropdown-bootstrap.component";

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
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    DropdownBootstrapComponent
  ],
  imports: [CommonModule, FrontalModule],
  exports: [
    BoxComponent,
    DropdownComponent,
    DropdownBootstrapComponent,
    TabsComponent,
    TabListComponent,
    TabComponent,
    TabPanelsComponent,
    TabPanelComponent,
    ThemeProviderComponent,
    CardComponent,
    CardContentComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent
  ]
})
export class AtomicComponentModule {}
