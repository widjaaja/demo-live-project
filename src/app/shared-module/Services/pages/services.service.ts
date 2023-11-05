import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ServicesService extends ApiBaseService {

    public getListServices(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.get(
        `api/consumer/services`,
        onSuccess,
        onError,
        onComplete
        );
    }

    public getServicesDetail(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/consumer/services/${request.id}`,
        request.data,
        onSuccess,
        onError,
        onComplete
        );
    }

    public createServices(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/service?action=add`,
        request,
        onSuccess,
        onError,
        onComplete
        );
    }

    public updateServices(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: any) => void,
        onComplete: () => void
    ) {
    return this.post(
        `api/admin/service/${request.id}?action=edit`,
        request.data,
        onSuccess,
        onError,
        onComplete
        );
    }

  }