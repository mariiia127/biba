import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-white text-black font-sans">
      
      {/*Шапка*/}
      <header className="bg-white py-3 max-w-7xl mx-auto px-6 flex items-center justify-between">

        <div className="text-xl font-bold text-blue-950 ">BOXPACK</div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <Link href="#services" className="hover:text-slate-900 transition">Услуги</Link>
          <Link href="#how-it-works" className="hover:text-slate-900 transition">Как это работает</Link>
          <Link href="#video" className="hover:text-slate-900 transition">Видеофиксация</Link>
          <Link href="#calculator" className="hover:text-slate-900 transition">Калькулятор</Link>
          <Link href="#cases" className="hover:text-slate-900 transition">Кейсы</Link>
          <Link href="#contacts" className="hover:text-slate-900 transition">Контакты</Link>
        </nav>
        </header>

        {/*Синий блок*/}
        <section className="bg-[#1A2A52] text-white py-16 px-6 md:px-16 my-2 flex">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base">
                Автоматизированный фулфилмент
              </p>
              <h1 className="text-5xl font-bold">
                Фулфилмент,<br/>
                который держит<br/>
                сроки и репутацию 
              </h1>
              <p className="text-base">
                Автоматизированная упаковка, видеоконтроль каждого заказа и<br/> 
                отправка в день поступления. Мы берем на себя хранение, сборку,<br/>
                маркировку и логистику.
              </p>
               {/* кнопки */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <p className="text-base">
                  Рассчитать стоимость 	→
                </p>
                
                <Link href="#consultation" className="hover:text-slate-600 transition">
                  <button className="border border-white text-xs px-5 py-2.5 rounded-lg">Получить консультацию</button>
                </Link> 
              </div>

                {/* квадратики */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-[10px] bg-white/10 p-5">
                  <img src="Open Box.svg" alt="Коробка" />
                  <p className="text-base mt-2 font-bold">5000+</p>
                  <h3 className="mt-2 text-xs">Заказов в день</h3>
                </div>

                <div className="rounded-[10px] bg-white/10 p-5">
                  <img className="" src="Protect.svg" alt="Галочка" />
                  <p className="text-base mt-2 font-bold">99.8%</p>
                  <h3 className="mt-2 text-xs">Точность сборки</h3>
                </div>
                
                <div className="rounded-[10px] bg-white/10 p-5">
                  <img src="Truck.svg" alt="Грузовик" />
                  <p className="text-base mt-2 font-bold">FBO/FBS</p>
                  <h3 className="mt-2 text-xs">Все маркетплейсы</h3>
                </div>
              </div>

            </div>

            {/*видео */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-6xl h-70 bg-white/60 rounded-[15px] flex items-center justify-center p-6 text-black text-xs">
                Видео автоматической упаковочной линии
              </div>
            </div>

          </div>
        </section>

        {/*КАРТОЧКИ 1*/}
        <section className="text-black py-16 px-6 md:px-6 my-2 max-w-7xl mx-auto">

          <div className="mb-15">
            <h1 className="text-2xl font-bold text-center">Как начать работаь с нами</h1>
            <p className="text-sm text-center mt-3">Подключение занимает всего несколько дней. Все процессы максимально<br/>
            автоматизированы.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 1</p>
                <p className="mt-2 text-xs">Оставляете заявку</p>
                <p className="mt-2 text-xs text-black/45">Через сайт или Telegram</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 2</p>
                <p className="mt-2 text-xs">Получаете расчет</p>
                <p className="mt-2 text-xs text-black/45">Под ваш объем и формат<br/> работы</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 3</p>
                <p className="mt-2 text-xs">Подписываем договор</p>
                <p className="mt-2 text-xs text-black/45">Через ЭДО</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 4</p>
                <p className="mt-2 text-xs">Принимаем товар</p>
                <p className="mt-2 text-xs text-black/45">От поставщика или<br/> транспортной компании</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 5</p>
                <p className="mt-2 text-xs">Автоматизирован<br/>ная упаковка</p>
                <p className="mt-2 text-xs text-black/45">С видеоконтролем каждого<br/>этапа</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 6</p>
                <p className="mt-2 text-xs">Отправляем</p>
                <p className="mt-2 text-xs text-black/45">На маркетплейсы по всей<br/>России</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#d9d9d9] w-70 h-47 py-2">
              <div className="group bg-[#f0f0f0] p-5 w-70 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-xs font-bold mt-8">ШАГ 7</p>
                <p className="mt-2 text-xs">Получаете результат</p>
                <p className="mt-2 text-xs text-black/45">Отчеты и прозрачную<br/>статистику</p>
              </div>
            </div>

          </div>
        </section>

        {/*Карточки 2 */}
        <section className="bg-[#f8f8f8] py-16 px-6 md:px-16 my-2 mx-auto">
          <div className="mb-15">
            <h1 className="text-2xl font-bold text-center">Услуги фулфилмента</h1>
            <p className="text-sm text-center mt-3">Полный цикл обработки товара от приемки до доставки.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">

            <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Приёмка и сортировка</p>
                <p className="mt-2 text-xs text-black/45">Принимаем поставки любого объема и<br/> размещаем товар на адресное хранение.</p>
              </div>
            </div>

           <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Проверка на брак</p>
                <p className="mt-2 text-xs text-black/45">Контроль качества перед отправкой<br/>покупателю.</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Автоматизированная упаковка</p>
                <p className="mt-2 text-xs text-black/45">Автоматические линии и<br/>видеоконтроль каждого заказа.</p>
              </div>
            </div>

           <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Сборка заказов</p>
                <p className="mt-2 text-xs text-black/45">Быстрая комплектация заказов по<br/>данным маркетплейсов.</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Отправка на маркетплейсы</p>
                <p className="mt-2 text-xs text-black/45">FBO и FBS для всех крупных площадок.</p>
              </div>
            </div>

           <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Хранение товаров</p>
                <p className="mt-2 text-xs text-black/45">Ьезопасное адресное хранение продукции.</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#32B8C6] w-80 h-47 py-2">
              <div className="group bg-white p-5 w-80 h-45 mt-auto rounded-[20px] shadow-stone-400 hover:shadow-xl transition">
                <p className="text-sm font-bold mt-13">Интеграции</p>
                <p className="mt-2 text-xs text-black/45">Синхронизация с маркетплейсами и CRM.</p>
              </div>
            </div>

          </div>
        </section>

        {/*Карточки 2 */}
        <section className="bg-[#1A2A52] text-white py-16 px-6 md:px-16 my-2 mx-auto">
          <div className="mb-15">
            <h1 className="text-2xl font-bold text-center">Почему выбирают ВОХРАСК</h1>
          </div>



          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
                <div className="group bg-white/10 p-5 w-70 h-45 mt-auto rounded-[15px]">
                  <p className="text-base font-bold mt-10">Скорость</p>
                  <p className="mt-2 text-xs">До 20 000 товаров за смену и<br/> отправка день в день.</p>
                </div> 

                <div className="group bg-white/10 p-5 w-70 h-45 mt-auto rounded-[15px]">
                  <p className="text-base font-bold mt-10">Точность</p>
                  <p className="mt-2 text-xs">99.8% точность сборки<br/> благодаря автоматизации.</p>
                </div> 

                <div className="group bg-white/10 p-5 w-70 h-45 mt-auto rounded-[15px]">
                  <p className="text-base font-bold mt-10">Надежность</p>
                  <p className="mt-2 text-xs">Страхование товара и<br/> круглосуточный контроль.</p>
                </div> 

                <div className="group bg-white/10 p-5 w-70 h-45 mt-auto rounded-[15px]">
                  <p className="text-base font-bold mt-10">Поддержка</p>
                  <p className="mt-2 text-xs">Персональный менеджер и<br/> оперативная помощь.</p>
                </div> 




                
          </div>
        </section>
    </div>
  );
}


