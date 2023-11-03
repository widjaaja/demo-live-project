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
import { BillingComponent } from './billing/billing.component';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';

// Service
import { ServiceComponent } from './service/service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';

// Consumer
import { ConsumerComponent } from './consumer/consumer.component';
import { ListConsumerComponent } from './consumer/list-consumer/list-consumer.component';
import { AddConsumerComponent } from './consumer/add-consumer/add-consumer.component';


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
    ServiceComponent,
    ListServiceComponent,
    EditServiceComponent,
    AddServiceComponent,
    ListConsumerComponent,
    AddConsumerComponent,
    
  ],
  imports: [
    CommonModule,
    UserPagesRouting,
    SharedModuleModule
  ]
})
export class UserPagesModule { }
