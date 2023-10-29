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
import { ConsumerComponent } from './consumer/consumer.component';
import { BillingComponent } from './billing/billing.component';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';

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
  {
    path: 'consumer', component: ConsumerComponent
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