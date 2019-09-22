import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoxComponent } from "./components/box/box.component";
import { ThemeProviderComponent } from "./theme/theme-provider/theme-provider.component";
import { TabsComponent } from "./components/tab/tabs.component";
import { TabListComponent } from "./components/tab/tab-list.component";
import { TabComponent } from "./components/tab/tab.component";
import { TabPanelsComponent } from "./components/tab/tab-panels.component";
import { TabPanelComponent } from "./components/tab/tab-panel.component";
import { CardComponent } from "./components/card/card.component";
import { RoleProviderComponent } from "./role/role-provider/role-provider.component";
import { ChevronDownIconComponent } from "./svg/chevron-down-icon/chevron-down-icon.component";
import { ChevronUpIconComponent } from "./svg/chevron-up-icon/chevron-up-icon.component";
import {
  SwitcherComponent,
  SwitcherToggleOnDirective,
  SwitcherToggleOffDirective
} from "./components/switcher/switcher.component";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { BreadcrumbItemDirective } from "./components/breadcrumbs/breadcrumbs.directive";
import { BaseComponent } from "./components/base/base.component";
import { OlComponent } from "./components/semantic/ol/ol.component";
import { NavComponent } from "./components/semantic/nav/nav.component";
import { LiComponent } from "./components/semantic/li/li.component";
import { AComponent } from "./components/semantic/a/a.component";
import { DivComponent } from "./components/semantic/div/div.component";
import { SvgComponent } from "./components/semantic/svg/svg.component";
import { SettingIconComponent } from "./svg/setting-icon/setting-icon.component";
import { ButtonComponent } from "./components/button/button.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import TableDirective, {
  TBodyDirective,
  TRowDirective,
  TCellDirective,
  THeaderDirective,
  TFooterDirective,
  THeaderRowDirective,
  THeaderCellDirective,
  TFooterRowDirective,
  TFooterCellDirective
} from "./components/table";
import { TypographyComponent } from "./components/typography/typography.component";
import { BuildIconComponent } from "./svg/build/build-icon.component";
import { DoneIconComponent } from "./svg/done/done-icon.component";

@NgModule({
  declarations: [
    BoxComponent,
    ThemeProviderComponent,
    TabsComponent,
    TabListComponent,
    TabComponent,
    TabPanelsComponent,
    TabPanelComponent,
    CardComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    BuildIconComponent,
    DoneIconComponent,
    SwitcherComponent,
    SwitcherToggleOnDirective,
    SwitcherToggleOffDirective,
    BreadcrumbsComponent,
    BreadcrumbItemDirective,
    BaseComponent,
    OlComponent,
    NavComponent,
    LiComponent,
    AComponent,
    DivComponent,
    SvgComponent,
    SettingIconComponent,
    ButtonComponent,
    PaginationComponent,
    TableDirective,
    TBodyDirective,
    TRowDirective,
    TCellDirective,
    THeaderDirective,
    TFooterDirective,
    THeaderRowDirective,
    THeaderCellDirective,
    TFooterRowDirective,
    TFooterCellDirective,
    TypographyComponent
  ],
  imports: [CommonModule],
  exports: [
    BoxComponent,
    ThemeProviderComponent,
    TabsComponent,
    TabListComponent,
    TabComponent,
    TabPanelsComponent,
    TabPanelComponent,
    CardComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    BuildIconComponent,
    DoneIconComponent,
    SwitcherComponent,
    SwitcherToggleOnDirective,
    SwitcherToggleOffDirective,
    BreadcrumbsComponent,
    BreadcrumbItemDirective,
    BaseComponent,
    OlComponent,
    NavComponent,
    LiComponent,
    AComponent,
    DivComponent,
    SvgComponent,
    SettingIconComponent,
    ButtonComponent,
    PaginationComponent,
    TableDirective,
    TBodyDirective,
    TRowDirective,
    TCellDirective,
    THeaderDirective,
    TFooterDirective,
    THeaderRowDirective,
    THeaderCellDirective,
    TFooterRowDirective,
    TFooterCellDirective,
    TypographyComponent
  ]
})
export class AtomicComponentModule {}
