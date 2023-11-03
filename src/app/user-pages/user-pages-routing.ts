import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes, createUrlTreeFromSnapshot } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountService } from '../shared-module/Services/account.service';
import { PromoComponent } from './promo/promo.component';
import { EditPromoComponent } from './edit-promo/edit-promo.component';
import { AddPromoComponent } from './add-promo/add-promo.component';
import { CommisionComponent } from './commision/commision.component';
import { CreateCommissionComponent } from './create-commission/create-commission.component';
import { UpdateCommissionComponent } from './update-commission/update-commission.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { EditPartnerComponent } from './partner/edit-partner/edit-partner.component';
import { CreatePartnerComponent } from './partner/create-partner/create-partner.component';
import { PartnerComponent } from './partner/partner/partner.component';
import { SuperCategoryComponent } from './super-category/super-category.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { PackagingCategoryComponent } from './packaging-category/packaging-category.component';
import { BillingComponent } from './billing/billing.component';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';

// Services
import { ServiceComponent } from './service/service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';

// Consumer
import { ConsumerComponent } from './consumer/consumer.component';
import { ListConsumerComponent } from './consumer/list-consumer/list-consumer.component';
import { AddConsumerComponent } from './consumer/add-consumer/add-consumer.component';


const routes: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: 'full' },
  { path: 'promo', component: PromoComponent },
  { path: 'editPromo', component: EditPromoComponent },
  { path: 'addPromo', component: AddPromoComponent },
  { path: 'commission', component: CommisionComponent },
  { path: 'updateCommission', component: UpdateCommissionComponent },
  {path: 'partner', component: PartnerComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: PartnerListComponent },
      { path: "edit", component: EditPartnerComponent },
      { path: "add", component: CreatePartnerComponent },
    ]
  },
  {path: 'consumer', component: ConsumerComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      { path: "list", component: ListConsumerComponent },
      { path: "add", component: AddConsumerComponent },
    ]
  },
  {path: 'service', component: ServiceComponent, children: [
    {path:'',redirectTo:'list',pathMatch:'full'},
    { path: "list", component: ListServiceComponent },
    { path: "edit", component: EditServiceComponent },
    { path: "add", component: AddServiceComponent },
  ]
},
  { path: 'createCommission', component: CreateCommissionComponent },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'superCategory', component: SuperCategoryComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'subCategory', component: SubCategoryComponent
  },
  {
    path: 'packagingCategory', component: PackagingCategoryComponent
  },
  { path: 'billing', component: BillingComponent },
  { path: 'addBilling', component: CreateBillingComponent },
  { path: 'editBilling', component: EditBillingComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPagesRouting {

}