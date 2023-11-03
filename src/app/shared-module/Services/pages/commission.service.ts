import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class CommissionService extends ApiBaseService {
  
    public getListProduct(
      request: any,
      onSuccess: (data: any) => void,
      onError: (errMessage: string) => void,
      onComplete: () => void
    ) {
      return this.get(
        `product/products`,
        onSuccess,
        onError,
        onComplete
      );
    }

    public createCommission(
      request: any,
      onSuccess: (data: any) => void,
      onError: (errMessage: any) => void,
      onComplete: () => void
    ) {
      return this.post(
        `api/admin/commission?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
      );
    }

    public updateCommission(
      request: any,
      onSuccess: (data: any) => void,
      onError: (errMessage: any) => void,
      onComplete: () => void
    ) {
      return this.post(
        `api/admin/commission/${request.id}?action=edit`,
        request.data,
        onSuccess,
        onError,
        onComplete
      );
    }

}