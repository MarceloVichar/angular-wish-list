import { CanActivateFn } from '@angular/router';

export const simpleGuardGuard: CanActivateFn = (route, state) => {
  console.log('Você está em uma rota que em breve será protegida')
  return true;
};
