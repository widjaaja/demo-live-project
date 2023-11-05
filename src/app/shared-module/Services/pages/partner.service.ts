import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class PartnerService extends ApiBaseService {

    public getListPartner(
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.get(
        `api/partners`,
        onSuccess,
        onError,
        onComplete
        );
    }

    public getListPartnerBySid(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.get(
        `api/partners/service/${request.id}`,
        onSuccess,
        onError,
        onComplete
        );
    }

    public getPartnerDetail(
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.get(
        `api/partner/partnerDetails`,
        onSuccess,
        onError,
        onComplete
        );
    }

    public getPartnerDetailBySid(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.get(
        `api/partners/service/${request.id}`,
        onSuccess,
        onError,
        onComplete
        );
    }

    public receivePartnerOrders(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner/${request.id}/receiveOrders`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createPartner(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner?action=new`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public updatePartner(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner/${request.id}?action=edit`,
        request.data,
        onSuccess,
        onError,
        onComplete
        );
    }

  }