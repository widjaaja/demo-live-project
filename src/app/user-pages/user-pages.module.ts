import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPagesRouting } from './user-pages-routing';
import { PromoComponent } from './promo/promo.component';
import { EditPromoComponent } from './edit-promo/edit-promo.component';
import { AddPromoComponent } from './add-promo/add-promo.component';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { CommisionComponent } from './commision/commision.component';
import { CreateCommissionComponent } from './create-commission/create-commission.component';
import { UpdateCommissionComponent } from './update-commission/update-commission.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { CreatePartnerComponent } from './partner/create-partner/create-partner.component';
import { EditPartnerComponent } from './partner/edit-partner/edit-partner.component';
import { ViewPartnerDetailsComponent } from './partner/view-partner-details/view-partner-details.component';
import { PartnerComponent } from './partner/partner/partner.component';
import { SuperCategoryComponent } from './super-category/super-category.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { PackagingCategoryComponent } from './packaging-category/packaging-category.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { BillingComponent } from './billing/billing.component';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PromoComponent,
    EditPromoComponent,
    AddPromoComponent,
    CommisionComponent,
    CreateCommissionComponent,
    UpdateCommissionComponent,
    PartnerListComponent,
    CreatePartnerComponent,
    EditPartnerComponent,
    ViewPartnerDetailsComponent,
    PartnerComponent,
    SuperCategoryComponent,
    CategoryComponent,
    SubCategoryComponent,
    PackagingCategoryComponent,
    ConsumerComponent,
    BillingComponent,
    CreateBillingComponent,
    EditBillingComponent,
    
  ],
  imports: [
    CommonModule,
    UserPagesRouting,
    SharedModuleModule
  ]
})
export class UserPagesModule { }
