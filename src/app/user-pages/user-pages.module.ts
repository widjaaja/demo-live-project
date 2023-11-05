import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserPagesRouting } from './user-pages-routing';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { DashboardComponent } from './dashboard/dashboard.component';

// Partner
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { CreatePartnerComponent } from './partner/create-partner/create-partner.component';
import { EditPartnerComponent } from './partner/edit-partner/edit-partner.component';
import { ViewPartnerDetailsComponent } from './partner/view-partner-details/view-partner-details.component';
import { PartnerComponent } from './partner/partner/partner.component';;

// Service
import { ServiceComponent } from './service/service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';

// Consumer
import { ConsumerComponent } from './consumer/consumer.component';
import { ListConsumerComponent } from './consumer/list-consumer/list-consumer.component';
import { AddConsumerComponent } from './consumer/add-consumer/add-consumer.component';

// Promo
import { PromoComponent } from './promo/promo.component';
import { EditPromoComponent } from './promo/edit-promo/edit-promo.component';
import { AddPromoComponent } from './promo/add-promo/add-promo.component';
import { ListPromoComponent } from './promo/list-promo/list-promo.component';

// Billing
import { BillingComponent } from './billing/billing.component';
import { ListBillingComponent } from './billing/list-billing/list-billing.component';
import { AddBillingComponent } from './billing/add-billing/add-billing.component';
import { EditBillingComponent } from './billing/edit-billing/edit-billing.component';

// Category
import { CategoryComponent } from "./category/category.component";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddSuperCategoryComponent } from './category/add-super-category/add-super-category.component';
import { AddSubCategoryComponent } from './category/add-sub-category/add-sub-category.component';
import { AddPackagingCategoryComponent } from './category/add-packaging-category/add-packaging-category.component';

// Commission
import { CommissionComponent } from './commission/commission.component';
import { ListCommissionComponent } from './commission/list-commission/list-commission.component';
import { AddCommissionComponent } from './commission/add-commission/add-commission.component';
import { EditCommissionComponent } from './commission/edit-commission/edit-commission.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PromoComponent,
    EditPromoComponent,
    AddPromoComponent,
    ListPromoComponent,
    PartnerListComponent,
    CreatePartnerComponent,
    EditPartnerComponent,
    ViewPartnerDetailsComponent,
    PartnerComponent,
    ConsumerComponent,
    ServiceComponent,
    ListServiceComponent,
    EditServiceComponent,
    AddServiceComponent,
    ListConsumerComponent,
    AddConsumerComponent,
    BillingComponent,
    ListBillingComponent,
    AddBillingComponent,
    EditBillingComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddSuperCategoryComponent,
    AddSubCategoryComponent,
    AddPackagingCategoryComponent,
    CommissionComponent,
    ListCommissionComponent,
    AddCommissionComponent,
    EditCommissionComponent,
    
  ],
  imports: [
    CommonModule,
    UserPagesRouting,
    SharedModuleModule
  ]
})
export class UserPagesModule { }
