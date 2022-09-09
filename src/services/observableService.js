import { Observable } from 'rxjs';

export const getNumbers = new Observable(subscriber => {
    //We emit values

    subscriber.next(1); // Emite 1
    subscriber.next(2); // Emite 2
    subscriber.next(3); // Emite 3
    setTimeout(() => {
        subscriber.next(4); // Emite 4 tras un segundo de espera
        subscriber.complete(); // Finaliza los suscriptores
    }, 1000)


})