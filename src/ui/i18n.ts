import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";

i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    tryAgain: "Try again",
                    notification: {
                        cartAdd: "Error adding to cart",
                        cartRemove: "Error deleting cart item",
                        orderCancelError: 'Error canceling order',
                        locationFieldError: "Please specify your location!",
                        orderMakeError: 'Error making order'
                    },
                    bigButton: {
                        addToCart: 'Add to cart',
                        goToCart: 'Go to cart',
                        order: 'Order',
                        continue: 'Continue',
                        finishOrder: 'Finish order'
                    },
                    banner: {
                        orderHistoryBtn: 'Order history',
                        aboutUs: 'About us',
                        productsBtn: 'Products',
                        workDays: 'Work days',
                        weekDays: {
                            1: 'Monday',
                            2: 'Tuesday',
                            3: 'Wednesday',
                            4: 'Thursday',
                            5: 'Friday',
                            6: 'Saturday',
                            0: 'Sunday',
                        },
                        shopOpen: 'Open',
                        shopClosed: 'Closed',
                        withoutOff: 'No days off'
                    },
                    home: {
                        productsTitle: 'Our products',
                        callButton: 'Call',
                        msgButton: 'Message',
                        locationButton: 'Location'
                    },
                    category: {
                        all: 'All'
                    },
                    cart: {
                        header: 'Cart',
                        cartItem: {
                            remove: 'Remove',
                            quantity: 'qty',
                            stockError: 'Not enough available',
                            deleteModal: 'Delete cart item?'
                        }
                    },
                    order: {
                        header: 'Order Summary',
                        products: 'Products',
                        total: 'Total'
                    },
                    contact: {
                        header: 'Contact Details',
                        address: 'Address',
                        comment: 'Comment',
                        tip: 'Fill in the required information to place an order',
                        orderMadePopup: 'Order sent! Our manager will soon contact with you'
                    },
                    ordersList: {
                        header: 'Order List',
                        emptyList: 'No orders yet',
                        order: {
                            orderId: 'Order ID',
                            orderTotal: 'Order Total',
                            orderDate: 'Order date',
                            orderStatusField: 'Status',
                            orderStatuses: {
                                completed: 'Completed',
                                pending: 'Pending',
                                canceled: 'Canceled'
                            },
                            cancelButton: 'Cancel order',
                            cancelModal: {
                                title: 'Do you want to cancel this order?',
                                yes: 'Yes',
                                no: 'No'
                            }
                        }
                    }
                }
            },
            ru: {
                translation: {
                    tryAgain: "Попробовать снова",
                    notification: {
                        cartAdd: "Ошибка добавления в корзину",
                        cartRemove: "Ошибка удаления с корзины",
                        orderCancelError: 'Ошибка отмены заказа',
                        locationFieldError: "Укажите ваш адрес!",
                        orderMakeError: 'Ошибка создания заказа'
                    },
                    bigButton: {
                        addToCart: 'Добавить в корзину',
                        goToCart: 'Корзина',
                        order: 'Заказ',
                        continue: 'Продолжить',
                        finishOrder: 'Сделать заказ'
                    },
                    banner: {
                        orderHistoryBtn: 'История заказов',
                        aboutUs: 'Про нас',
                        productsBtn: 'Продукты',
                        workDays: 'Рабочие дни',
                        weekDays: {
                            1: 'Понедельник',
                            2: 'Вторник',
                            3: 'Среда',
                            4: 'Четверг',
                            5: 'Пятница',
                            6: 'Суббота',
                            0: 'Воскресенье',
                        },
                        shopOpen: 'Открыто',
                        shopClosed: 'Закрыто',
                        withoutOff: 'Без выходных'
                    },
                    home: {
                        productsTitle: 'Наши товары',
                        callButton: 'Позвонить',
                        msgButton: 'Написать',
                        locationButton: 'Место'
                    },
                    category: {
                        all: 'Все'
                    },
                    cart: {
                        header: 'Корзина',
                        cartItem: {
                            remove: 'Удалить',
                            quantity: 'Кол-во',
                            stockError: 'Недостаточно в наличии',
                            deleteModal: 'Убрать с корзины?'
                        }
                    },
                    order: {
                        header: 'Итоги заказа',
                        products: 'Продукты',
                        total: 'Итого'
                    },
                    contact: {
                        header: 'Детали заказа',
                        address: 'Ваш адрес',
                        comment: 'Ваш комментарий',
                        tip: 'Заполните нужные поля для завершения заказа',
                        orderMadePopup: 'Заказ отправлен! Наш менеджер скоро свяжется с вами'
                    },
                    ordersList: {
                        header: 'Список заказов',
                        emptyList: 'Заказов пока нет',
                        order: {
                            orderId: 'Номер заказа',
                            orderTotal: 'Сумма',
                            orderDate: 'Дата',
                            orderStatusField: 'Статус',
                            orderStatuses: {
                                completed: 'Завершен',
                                pending: 'Ожидается',
                                canceled: 'Отменен'
                            },
                            cancelButton: 'Отменить заказ',
                            cancelModal: {
                                title: 'Хотите отменить этот заказ?',
                                yes: 'Да',
                                no: 'Нет'
                            }
                        }
                    }
                }
            },
            tkm: {
                translation: {
                    tryAgain: "Täzeden synanyşmak",
                    notification: {
                        cartAdd: "Sebede goşup bolmady",
                        cartRemove: "Sebetden pozup bolmady",
                        orderCancelError: 'Sargydy goýbolsun edip bolmady',
                        locationFieldError: "Salgyňyzy görkeziň!",
                        orderMakeError: 'Sargyt döredip bolmady'
                    },
                    bigButton: {
                        addToCart: 'Sebede goş',
                        goToCart: 'Sebet',
                        order: 'Sargyt et',
                        continue: 'Dowam et',
                        finishOrder: 'Sargydy ugratmak'
                    },
                    banner: {
                        orderHistoryBtn: 'Sargytlar',
                        aboutUs: 'Biz barada',
                        productsBtn: 'Harytlar',
                        workDays: 'Iş günleri',
                        weekDays: {
                            1: 'Duşenbe',
                            2: 'Sişenbe',
                            3: 'Çarşenbe',
                            4: 'Penşenbe',
                            5: 'Anna',
                            6: 'Şenbe',
                            0: 'Ýekşenbe',
                        },
                        shopOpen: 'Açyk',
                        shopClosed: 'Ýapyk',
                        withoutOff: 'Dynç güni ýok'
                    },
                    home: {
                        productsTitle: 'Biziň harytlarymyz',
                        callButton: 'Jaň etmek',
                        msgButton: 'Ýazmak',
                        locationButton: 'Ýerleşýän ýeri'
                    },
                    category: {
                        all: 'Hemmesi'
                    },
                    cart: {
                        header: 'Sebet',
                        cartItem: {
                            remove: 'Pozmak',
                            quantity: 'Muk-ry',
                            stockError: 'Ammar ýeterlik däl',
                            deleteModal: 'Sebetden aýyrmak?'
                        },
                    },
                    order: {
                        header: 'Sargydyň jemi',
                        products: 'Harytlar',
                        total: 'Jemi'
                    },
                    contact: {
                        header: 'Sargydyň maglumatlary',
                        address: 'Siziň salgyňyz',
                        comment: 'Siziň belligiňiz',
                        tip: 'Sargydy ugratmak üçin gerekli meýdanlary dolduryň',
                        orderMadePopup: 'Sargyt ugrady! Ýakyn wagtda biz siz bilen habarlaşarys'
                    },
                    ordersList: {
                        header: 'Sargytlar sanawy',
                        emptyList: 'Entak sargyt ýok',
                        order: {
                            orderId: 'Sargyt belgisi',
                            orderTotal: 'Jemi',
                            orderDate: 'Wagty',
                            orderStatusField: 'Ýagdaýy',
                            orderStatuses: {
                                completed: 'Ýerine ýetirildi',
                                pending: 'Garaşylýar',
                                canceled: 'Goýbolsun edildi'
                            },
                            cancelButton: 'Sargydy goýbolsun etmek',
                            cancelModal: {
                                title: 'Sargydy goýbolsun etmek isleýäňizmi?',
                                yes: 'Howa',
                                no: 'Ýok'
                            }
                        }
                    }
                }
            }
        }
    })

export default i18next;