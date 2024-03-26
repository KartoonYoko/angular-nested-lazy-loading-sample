import { Injectable } from "@angular/core";
import { Observable, delay, of, switchMap } from "rxjs";
import { ProductDetailModel } from "../../models/product-detail-page/product-detail.model";

@Injectable({
    providedIn: 'root'
})
export class ProductDetailPageAPIService {

    // GetProductByID имитирует реальный запрос к серверу
    public GetProductByID(productID: string): Observable<ProductDetailModel> {
        return of(null).pipe(
            delay(1000),
            switchMap(() => {
                const model: ProductDetailModel = {
                    id: productID,
                    title: this.getRandomTitle(),
                    info: this.getRandomInfo(),
                };
                return of(model);
            })
        );
    }

    private getRandomTitle(): string {
        const arr: string[] = [
            '17.3" Ноутбук Machenike L17 Star XT',
            '14.1" Ноутбук DEXP Aquilon серебристый',
            '24" (61 см) Телевизор LED Aceline 24HEN1 черный',
        ];
        return this.getRandom(arr);
    }

    private getRandomInfo(): string {
        const arr: string[] = [
            'Ноутбук DEXP Aquilon оборудован сенсорным NumPad, который упрощает ввод числовой информации. Осуществляйте навигацию между несколькими окнами и не отказывайтесь от использования требовательных приложений. Высокую скорость работы будет поддерживать 2-ядерный процессор Intel Celeron N4020. Видеокарта Intel UHD Graphics 600 улучшит качество графики при обработке материалов в редакторах.',
            'Телевизор LED Aceline 24HEN1 позволяет просматривать телевизионные передачи комфортно и увлекательно. Он оборудован экраном диагональю 24 дюйма, поэтому подойдет для небольшой комнаты – кухни или спальни. Разрешение HD обеспечивает детализированную картинку. Подсветка Direct LED формирует яркие и насыщенные оттенки. В телевизоре реализован тюнер с поддержкой стандартов DVB-C, DVB-S2, DVB-T, DVB-T2 для вещания каналов в цифровом формате. Акустическая система мощностью 10 Вт с технологией Dolby Digital воспроизводит четкий звук. В разъем USB можно установить флеш-накопитель и проигрывать мультимедийный контент. Для вывода сигнала на игровую консоль и другую технику в Aceline 24HEN1 есть 3 видеовыхода HDMI.',

        ];
        return this.getRandom(arr);
    }

    private getRandom(items: string[]): string {
        return items[Math.floor(Math.random() * items.length)];
    }
      
}
