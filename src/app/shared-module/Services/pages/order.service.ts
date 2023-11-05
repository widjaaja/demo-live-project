import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService extends ApiBaseService {

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

    public createPostOrderItem(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner/items/?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public updatePostOrderItem(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner/items/${request.id}?action=edit`,
        request,
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

    public updateOrder(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/partner/${request.partnerId}/order/${request.orderId}?action=update`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

  }