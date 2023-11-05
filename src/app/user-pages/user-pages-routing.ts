import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes, createUrlTreeFromSnapshot } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

//  Partners
import { PartnerComponent } from './partner/partner/partner.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { EditPartnerComponent } from './partner/edit-partner/edit-partner.component';
import { CreatePartnerComponent } from './partner/create-partner/create-partner.component';

//  Services
import { ServiceComponent } from './service/service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';

//  Consumer
import { ConsumerComponent } from './consumer/consumer.component';
import { ListConsumerComponent } from './consumer/list-consumer/list-consumer.component';
import { AddConsumerComponent } from './consumer/add-consumer/add-consumer.component';

//  Promo
import { PromoComponent } from './promo/promo.component';
import { ListPromoComponent } from './promo/list-promo/list-promo.component';
import { AddPromoComponent } from './promo/add-promo/add-promo.component';
import { EditPromoComponent } from './promo/edit-promo/edit-promo.component';

//  Billing
import { BillingComponent } from './billing/billing.component';
import { ListBillingComponent } from './billing/list-billing/list-billing.component';
import { AddBillingComponent } from './billing/add-billing/add-billing.component';
import { EditBillingComponent } from './billing/edit-billing/edit-billing.component';

//  Category
import { CategoryComponent } from "./category/category.component";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddSuperCategoryComponent } from './category/add-super-category/add-super-category.component';
import { AddSubCategoryComponent } from './category/add-sub-category/add-sub-category.component';
import { AddPackagingCategoryComponent } from './category/add-packaging-category/add-packaging-category.component';

//  Commission
import { CommissionComponent } from './commission/commission.component';
import { ListCommissionComponent } from './commission/list-commission/list-commission.component';
import { AddCommissionComponent } from './commission/add-commission/add-commission.component';
import { EditCommissionComponent } from './commission/edit-commission/edit-commission.component';


const routes: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent  },
  
  { path: 'commission', component: CommissionComponent, children: [
      { path:'', redirectTo:'list',pathMatch:'full'},
      { path: "list", component: ListCommissionComponent },
      { path: "edit", component: EditCommissionComponent },
      { path: "add", component: AddCommissionComponent },
    ]
  },
  { path: 'category', component: CategoryComponent, children: [
      {path:'',redirectTo:'add-category',pathMatch:'full'},
      { path: "add-category", component: AddCategoryComponent },
      { path: "add-super-category", component: AddSuperCategoryComponent },
      { path: "add-sub-category", component: AddSubCategoryComponent },
      { path: "add-packaging-category", component: AddPackagingCategoryComponent },
    ]
  },
  { path: 'billing', component: BillingComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: ListBillingComponent },
      { path: "edit", component: EditBillingComponent },
      { path: "add", component: AddBillingComponent },
    ]
  },
  { path: 'promo', component: PromoComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: ListPromoComponent },
      { path: "edit", component: EditPromoComponent },
      { path: "add", component: AddPromoComponent },
    ]
  },
  { path: 'partner', component: PartnerComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: PartnerListComponent },
      { path: "edit", component: EditPartnerComponent },
      { path: "add", component: CreatePartnerComponent },
    ]
  },
  {path: 'consumer', component: ConsumerComponent, children: [
      { path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: ListConsumerComponent },
      { path: "add", component: AddConsumerComponent },
    ]
  },
  { path: 'service', component: ServiceComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: ListServiceComponent },
      { path: "edit", component: EditServiceComponent },
      { path: "add", component: AddServiceComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPagesRouting {

}