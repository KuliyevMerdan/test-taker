import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";

i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "tkm",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    home: {
                        mainHeader: "Welcome to TestMaster!",
                        mainDesc: "You can choose whether to pass or create a test with these buttons",
                        upload: {
                            header: "Upload test",
                            firstDesc: "You need to create and upload test to pass it",
                            secondDesc: "Everyone can create his own test with his own questions",
                            button: "Upload"
                        },
                        pass: {
                            header: "Pass test",
                            firstDesc: "Take a test from created ones",
                            secondDesc: "You will need to choose from added tests and pass it",
                            button: "Begin testing"
                        }
                    },
                    upload: {
                        header: "Create a new test",
                        themeInput: {
                            label: "Test theme",
                            placeholder: "Enter the theme of your test"
                        },
                        timeInput: {
                            label: "Test duration (in seconds)",
                            placeholder: "Enter the duration of your test in seconds"
                        },
                        question: {
                            header: "Question",
                            textInput: {
                                label: "Question text",
                                placeholder: "Enter your question"
                            },
                            answerInput: {
                                label: "Answer variants (one per line)",
                                placeholder: "Enter answer variants one per line"
                            },
                            indexInput: {
                                label: "Correct answer index (0 based)",
                            }
                        },
                        addButton: "Add question",
                        submitButton: "Submit Test",
                        success: {
                            header: "Test uploaded successfully!",
                            description: "Your test has been created and is now available for others to take",
                            button: "Return to Home"
                        }
                    },
                    pass: {
                        noTest: "There are no tests to pass",
                        header: "Available tests",
                        duration: "Duration",
                        minutes: "minutes",
                        questions: "Questions",
                        button: "Start test"
                    },
                    test: {
                        startModal: {
                            header: {
                                lable: "Your info",
                                desc: "Fill out information about yourself"
                            },
                            usernameInput: {
                                label: "Your name and surname",
                                placeholder: "Enter your fullname"
                            },
                            specialtyInput: {
                                label: "Your specialty",
                                placeholder: "Enter your specialty at work or study"
                            },
                            button: "Start test"
                        }
                    }
                }
            },
            ru: {
                translation: {
                    home: {
                        mainHeader: "Добро пожаловать в TestMaster!",
                        mainDesc: "С помощью этих кнопок вы можете либо создать тест или пройти его",
                        upload: {
                            header: "Загрузить тест",
                            firstDesc: "Чтобы сдавать тесты создайте его и загрузите",
                            secondDesc: "Каждый может создавать свои тесты со своими вопросами",
                            button: "Загрузить"
                        },
                        pass: {
                            header: "Сдать тест",
                            firstDesc: "Сдать из созданных",
                            secondDesc: "Выберите из списка созданных тестов и сдайте его",
                            button: "Начать тест"
                        }
                    },
                    upload: {
                        header: "Создать новый тест",
                        themeInput: {
                            label: "Тема теста",
                            placeholder: "Введите название теста"
                        },
                        timeInput: {
                            label: "Длительность теста (в секундах)",
                            placeholder: "Введите длительность теста в секундах"
                        },
                        question: {
                            header: "Вопрос",
                            textInput: {
                                label: "Текст вопроса",
                                placeholder: "Введите свой вопрос"
                            },
                            answerInput: {
                                label: "Варианты ответов (1 ответ 1 линия)",
                                placeholder: "Введите варианты ответов, по одному ответу на линию"
                            },
                            indexInput: {
                                label: "Индекс правильного ответа (первый начинается с 0)",
                            }
                        },
                        addButton: "Добавить вопрос",
                        submitButton: "Создать тест",
                        success: {
                            header: "Тест успешно создан!",
                            description: "Ваш тест был загружен и теперь доступен чтобы его сдать",
                            button: "Вернуться"
                        }
                    },
                    pass: {
                        noTest: "Нет загруженных тестов",
                        header: "Доступные тесты",
                        duration: "Продолжительность",
                        minutes: "минут",
                        questions: "Вопросы",
                        button: "Начать тест"
                    },
                    test: {
                        startModal: {
                            header: {
                                lable: "Ваша информация",
                                desc: "Заполните информацию о себе"
                            },
                            usernameInput: {
                                label: "Ваше имя и фамилия",
                                placeholder: "Введите ваше полное имя"
                            },
                            specialtyInput: {
                                label: "Ваша позиция",
                                placeholder: "Введите название вашей позиции на учебе или работе"
                            },
                            button: "Начать тест"
                        }
                    }
                }
            },
            tkm: {
                translation: {
                    home: {
                        mainHeader: "TestMaster hoş geldiňiz!",
                        mainDesc: "Aşakdakylaryň kömegi bilen test goşmagy ýa-da test geçmegi saýlap bilersiňiz.",
                        upload: {
                            header: "Test ýükle",
                            firstDesc: "Test tabşyrmak üçin gerekli görnüşinde ony dörediň we ýükläň",
                            secondDesc: "Her kim öz testini öz soraglary bilen düzüp biler",
                            button: "Ýüklemek"
                        },
                        pass: {
                            header: "Test tabşyrmak",
                            firstDesc: "Goşulan testlerden tabşyrmak",
                            secondDesc: "Sanawdaky testlerden birini saýlamak we şony tabşyrmak",
                            button: "Testi başlamak"
                        }
                    },
                    upload: {
                        header: "Täze test döretmek",
                        themeInput: {
                            label: "Testiň temasy",
                            placeholder: "Testiň temasyny giriziň"
                        },
                        timeInput: {
                            label: "Testiň dowamlylygy (sekuntda)",
                            placeholder: "Testiň dowamlylygyny sekuntda giriziň"
                        },
                        question: {
                            header: "Sorag",
                            textInput: {
                                label: "Soragyň teksti",
                                placeholder: "Öz soragyňyzy giriziň"
                            },
                            answerInput: {
                                label: "Soraglaryň görnüşleri (1 sorag 1 setir)",
                                placeholder: "Her setirde bir wariantyny giriziň"
                            },
                            indexInput: {
                                label: "Dogry jogabyň indeksi (birinji 0-dan başlaýar)",
                            }
                        },
                        addButton: "Добавить вопрос",
                        submitButton: "Создать тест",
                        success: {
                            header: "Siziň testiňiz üstünlikli ýüklendi!",
                            description: "Siziň testiňiz ýüklenildi we tabşyrmak üçin elýeterlidir",
                            button: "Yza gaýtmak"
                        }
                    },
                    pass: {
                        noTest: "Elýeter test ýok",
                        header: "Ýüklenen",
                        duration: "Dowamlylygy",
                        minutes: "minut",
                        questions: "Soraglar",
                        button: "Test başlamak"
                    },
                    test: {
                        startModal: {
                            header: {
                                lable: "Özüňiz barada maglumat",
                                desc: "Özüňiz barada maglumaty dolduryň"
                            },
                            usernameInput: {
                                lable: "Siziň adyňyz we familiýaňyz",
                                placeholder: "Doly adyňyzy giriziň"
                            },
                            specialtyInput: {
                                lable: "Siziň hünäriňiz",
                                placeholder: "Okuwdaky ýa-da işdäki hünäriňizi giriziň"
                            },
                            button: "Testi başlamak"
                        }
                    }
                }
            }
        }
    })

export default i18next;