import Swal from 'sweetalert2';
import { FunctionHelper } from './AppHelper';

// alert type
export enum AlertType {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  QUESTION = 'question',
  INFO = 'info'
}

export const AlertTitle = {
  SUCCESS: 'Success!',
  ERROR: 'Error!',
  WARNING: 'Warning',
  INFO: 'Information',
  QUESTION: 'Question',
};

export class Alert {

  public static showStatus(
    type: AlertType,
    title: string,
    text: string = '',
    footer: string = ''
  ) {
    Swal.fire({
      icon: type,
      ...((type !== AlertType.ERROR && type !== AlertType.SUCCESS) && { icon: type }),
      ...((type === AlertType.ERROR || type === AlertType.SUCCESS) && { 
        customClass: {
          popup: 'border-start-0',
          icon: 'border-transparent align-self-start span-2',
          title: 'm-0 alert-title',
          htmlContainer: 'm-0 alert-text',
        },
      }),
      title: FunctionHelper.stripTags(title),
      text: text,
      showCloseButton: true,
      footer: footer,
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
      position: 'top-end',
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  }

  public static showToast(type: AlertType, title: string, text: string, footer?: string) {
    Swal.fire({
      icon: type,
      title: title,
      text: text,
      showCloseButton: true,
      footer: footer,
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
      position: 'top-end',
      timer: 2500,
    });
  }

  public static showToastSuccess(imageUrl: string, title: string, text: string, footer?: string) {
    Swal.fire({
      customClass: 'swal-success-custom',
      title,
      imageUrl,
      text,
      footer,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
      // timer: APP_SETTING.ALERT_TIMER
    });
  }

  public static showToastSuccessNew(imageUrl: string, title: string, text: string, footer?: string) {
    Swal.fire({
      customClass: 'showToastSuccessNew',
      title,
      imageUrl,
      text,
      footer,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
      // timer: APP_SETTING.ALERT_TIMER
    });
  }
  
  public static showConfirmModal(
    title: string,
    text: string,
    confirmText: string,
    cancelText: string,
    onConfirm: () => void,
    onCancel: () => void
  ) {
    Swal.fire({
      title: FunctionHelper.stripTags(title),
      html: FunctionHelper.stripTags(text),
      showCancelButton: true,
      confirmButtonText: confirmText,
      showConfirmButton: true,
      allowOutsideClick: false,
      cancelButtonText: cancelText,
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn px-4 btn-pink',
        cancelButton: 'btn px-4 btn-nobox-grey me-3'
      },
      showCloseButton: true,
      buttonsStyling: false
    }).then(result => {
      if (result.value) {
        onConfirm();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        onCancel();
      }
    });
  }


  public static showConfirmModalNew(
    title: string, 
    text: string, 
    confirmText: string, 
    cancelText: string, 
    onConfirm: () => void, 
    onCancel: () => void
  ) {
    Swal.fire({
      title: title,
      html: text,
      showCancelButton: true,
      confirmButtonText: confirmText,
      showConfirmButton: true,
      cancelButtonText: cancelText,
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn px-4 btn-pink',
        cancelButton: 'btn px-4 btn-nobox-grey me-3'
      },
      showCloseButton: true,
      buttonsStyling: false
    }).then((result: any) => {
      if (result.value) {
        onConfirm();
      }else if(result.dismiss === Swal.DismissReason.cancel){
        onCancel();
      }
    });
  }

  public static showToastErrorNew(imageUrl: string, title: string,text: string, message: string) {
    Swal.fire({
      title,
      imageUrl,
      text,
      customClass: 'swal-wide',
      footer: message,
      showConfirmButton: false,
      showCancelButton: false,
      toast: true,
      position: 'top-end',
      // timer: APP_SETTING.ALERT_TIMER
    });
  }

  public static showToastErrorSpesific(imageUrl: string, title: string, text: string, message: string) {
    Swal.fire({
      title,
      imageUrl,
      text,
      customClass: 'showToastErrorSpesific',
      footer: message,
      showConfirmButton: false,
      showCancelButton: false,
      toast: true,
      position: 'top-end',
      // timer: APP_SETTING.ALERT_TIMER
    });
  }

  public static showToastErrorOne(imageUrl: string, title: string, text: string, message: string) {
    Swal.fire({
      title,
      imageUrl,
      text,
      customClass: 'showToastErrorOne',
      footer: message,
      showConfirmButton: false,
      showCancelButton: false,
      toast: true,
      position: 'top-end',
      // timer: APP_SETTING.ALERT_TIMER
    });
  }

  public static showToastScenarioNew(text: string, message: string, onClick: () => void) {
    Swal.fire({
      // type: AlertType.INFO,
      // imageUrl:APP_SETTING.ALERT_ALERT_SCENARIO,
      title: 'Scenario',
      text,
      footer: message,
      customClass: 'showToastScenarioNew',
      showConfirmButton: false,
      showCancelButton: false,
      toast: true,
      position: 'top',
    }).then((result: any) => {
      if (result.dismiss) {
        onClick();
      }
    });
  }

  public static showToastConfirm(
    imageUrl: string, 
    title: string, 
    text: string, 
    confirmText: string, 
    cancelText: string, 
    onConfirm: () => void, 
    onCancel: () => void,
  ) {
    Swal.fire({
      customClass: 'swal-success-custom swal-toast-confirm',
      title,
      text,
      imageUrl,
      showCancelButton: true,
      toast: true,
      position: 'top-end',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      // timer: APP_SETTING.ALERT_TIMER_LONG,
    }).then((result: any) => {
      if (result.value) {
        onConfirm();
      }else if(result.dismiss === Swal.DismissReason.cancel){
        onCancel();
      }
    });
  }

  public static closeAlert() {
    Swal.close();
  }
}

// MODAL TYPE
export enum ModalType {
  LG = 'modal-lg',
  MD = 'modal-md',
  SMX = 'modal-smx',
  SM = 'modal-sm',
  XL = 'modal-xl',
  TR = 'modal-transparent'
}
