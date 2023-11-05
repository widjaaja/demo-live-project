import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService extends ApiBaseService {

    public getListSuperCategory(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/superCategory?action=query`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public getListCategory(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/category?action=query`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createSuperCategory(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/superCategory?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createSubCategory(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/subCategory?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createPackageCategory(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/itemPackCategory?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createCategory(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/category?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createPreOrderItem(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner/items?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

  }