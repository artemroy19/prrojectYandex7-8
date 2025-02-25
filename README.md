# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Архитектура проекта

В качестве архитектурного паттерна используется модель MVP (Model-View-Presenter).
Она разделяет приложение на три ключевых компонента: модель, представление и презентер. 



<img width="277" alt="Снимок экрана 2025-02-26 в 01 05 01" src="https://github.com/user-attachments/assets/731ee434-db92-4713-91d9-20563298ed28" />



Модель отвечает за обработку данных и реализацию бизнес-логики. 

Представление обеспечивает пользовательский интерфейс.

Презентер выступает в роли связующего звена между моделью и представлением. Он обрабатывает действия пользователя, передает данные между компонентами и управляет взаимодействием между моделью и представлением, обеспечивая четкое разделение ответственности.

## Описание базовых классов, их предназначение и функции

# Класс `EventEmitter`

Класс `EventEmitter` обеспечивает работу с событиями. Функциональность класса стандартная: возможность установить/снять слушатели событий, вызвать слушателей при возникновении события.

**Методы:**
- `on`: Устанавливает обработчик на событие.
- `off`: Снимает обработчик с события.
- `emit`: Инициирует событие с данными.
- `onAll`: Слушает все события.
- `offAll`: Сбрасывает все обработчики.
- `trigger`: Создает коллбек триггер, генерирующий событие при вызове.

# Класс `Api`

Класс `Api` хранит основные поля и методы, необходимые при работе с сервером. Функциональность класса: получать и хранить базовый URL (`baseUrl`) и опции запроса (`options`). Методы позволяют обработать запрос, отправить и получить данные.

**Конструктор:**
- Принимает на вход `baseUrl` и `options`.
- Устанавливает заголовок `Content-Type` в `application/json`.

**Методы:**
- `handleResponse`: Обрабатывает ответ сервера.
- `get`: Выполняет GET-запрос.
- `post`: Выполняет POST-запрос.
