// Данные товара
export interface IProduct {
  id: string;
  title: string;
  price: number | null;
  description: string;
  category: string;
  image: string;
}

// Отображения карточки
export interface ICard extends IProduct{
  index?: string;
  buttonTitle? : string;
}

// Отображения корзиный
export interface IBasketView {
  items: HTMLElement[];
  total: number;
}

// Отображения главной страницы
export interface IPage{
  counter: number;
  catalog: HTMLElement[];
}

//Отображения успешного заказа
export interface ISuccess {
  total: number;
}

// Данные обработчика валидности формы
export interface IFormState {
    valid: boolean;
    errors: string[];
}

// Данные контента модальных окон
export interface IModalData {
    content: HTMLElement;
}


// Состояние ларька
export interface IAppState {
  catalog: IProduct[];
  basket: IProduct[];
  preview: string | null;
  delivery: IDeliveryForm | null;
  contact: IContactForm | null;
  order: IOrder | null;
}

// Данные доставки
export interface IDeliveryForm {
  payment: string;
  address: string;
}

// Контактные данные
export interface IContactForm {
  email: string;
  phone: string;
}

// Данные всего заказа
export interface IOrder extends IDeliveryForm, IContactForm {
  total: number;
  items: string[];
}

// Данные ответа сервера на заказ
export interface IOrderResult {
  id: string;
  total: number;
}

// Ошибки Форм
export type FormErrors = Partial<Record<keyof IOrder, string>>;

