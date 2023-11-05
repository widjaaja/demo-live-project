import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ConsumerService extends ApiBaseService {

    public getListConsumer(
      request: any,
      onSuccess: (data: any) => void,
      onError: (errMessage: string) => void,
      onComplete: () => void
    ) {
      return this.get(
        `api/consumer`,
        onSuccess,
        onError,
        onComplete
      );
    }

    public getConsumerDetail(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: string) => void,
        onComplete: () => void
      ) {
        return this.get(
          `api/consumer/customerDetails`,
          onSuccess,
          onError,
          onComplete
        );
      }

    public createConsumer(
      request: any,
      onSuccess: (data: any) => void,
      onError: (errMessage: any) => void,
      onComplete: () => void
    ) {
      return this.post(
        `api/consumer/profile`,
        request,
        onSuccess,
        onError,
        onComplete
      );
    }

}