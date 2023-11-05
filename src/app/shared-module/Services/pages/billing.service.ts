import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class BillingService extends ApiBaseService {

    public getListBilling(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/common/billingModel?action=query`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createBilling(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/common/billingModel?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public updateBilling(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/common/billingModel/${request.id}?action=edit`,
        request.data,
        onSuccess,
        onError,
        onComplete
        );
    }

  }