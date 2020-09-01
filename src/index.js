import router from './routes';

window.addEventListener('load', router); // escucha si algo sucede en este caso es la carga de la pagina "load" y despues se le pasa una funcion en este caso router que se trae de otro lado

window.addEventListener('hashchange', router); // detecta cuando hay un cambio dentro de un hash