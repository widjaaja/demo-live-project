import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class PromoService extends ApiBaseService {

    public getListPromo(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/promo?action=query`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createPromo(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/promo?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public updatePromo(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/promo/${request.id}?action=add`,
        request.data,
        onSuccess,
        onError,
        onComplete
        );
    }

  }