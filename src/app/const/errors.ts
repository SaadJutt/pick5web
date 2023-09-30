import { NavController, ToastController, AlertController } from '@ionic/angular';
import {
  ERR_AUTHENTICATION_CODE,
  ERR_FORBIDDEN_CODE,
  ERR_VALDATION_CODE
} from './constants';

export function isAuthenticated(status: number): boolean {
  if (status === ERR_AUTHENTICATION_CODE) {
    return false;
  }

  return true;
}

export function GenerateMessagesFromServerError(errors: any): string[] {
  const status = errors.status;
  const body = errors;

  // message for authentication failure
  if (status === ERR_AUTHENTICATION_CODE) {
    return ['Authentication failure.'];
  }

  // message for forbidden failure
  if (status === ERR_FORBIDDEN_CODE) {
    if (body.error.message) {
      return [body.error.message];
    }
  }

  // messages for validation failure
  if (status === ERR_VALDATION_CODE) {
    const errors: any = [];
    if (body.errors) {
      for (const key in body.errors) {
        body.errors[key].map((err: any) => errors.push(err));
      }
    }

    if (errors.length > 0) {
      return errors;
    }
  }

  // for all others unhandled errors
  return ['Something went wrong'];
}

export async function CheckAuthentication(

  toastController: ToastController,
  error: any
) {
  if (!isAuthenticated(error.status)) {
    localStorage.clear();
    const toast = await toastController
      .create({
        message: 'User not Authorized please login again',
        duration: 3000,
        position: 'top'
      });
    toast.present();
    return;
  }
}

export async function HandleError(alertController: AlertController, error: any) {
  const messages = GenerateMessagesFromServerError(error);
  if (isAuthenticated(error.status)) {
    const alert = await alertController
      .create({
        cssClass: 'alertCss',
        animated: true,
        // title: 'Error',
        message: messages.join('\n'),
        buttons: ['OK']
      });
    alert.present();
  }
}
