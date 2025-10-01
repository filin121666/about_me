import { Injectable } from '@angular/core';
import { SkillsSection } from '../shared/models/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills: SkillsSection[] = [
    {
      id: 'tools',
      name: 'Инструменты',
      skills: [
        {
          id: 'vs_code',
          name: 'VS Code',
          imgSrc: '/skills/vs-code-logo.svg',
          url: 'https://code.visualstudio.com/',
        },
        {
          id: 'cursor_ide',
          name: 'Cursor IDE',
          imgSrc: '/skills/cursor-ide-logo.svg',
          url: 'https://cursor.com/features',
        },
        {
          id: 'platformio',
          name: 'PlatformIO',
          imgSrc: '/skills/platformio-logo.svg',
          url: 'https://platformio.org/',
        },
        {
          id: 'arduino_ide',
          name: 'Arduino IDE',
          imgSrc: '/skills/arduino-logo.svg',
          url: 'https://www.arduino.cc/en/software/#ide',
        },
        {
          id: 'github',
          name: 'Github',
          imgSrc: '/skills/github-logo.svg',
          url: 'https://github.com/',
        },
        {
          id: 'git',
          name: 'Git',
          description: 'Умею создавать и управлять ветками и коммитами.',
          imgSrc: '/skills/git-logo.svg',
          url: 'https://git-scm.com/',
        },
        {
          id: 'docker',
          name: 'Docker',
          description:
            'Умею создавать и управлять контейнерами (и их образами), умею писать Dockerfile для приложения.',
          imgSrc: '/skills/docker-logo.svg',
          url: 'https://www.docker.com/',
        },
        {
          id: 'docker_compose',
          name: 'Docker Compose',
          description:
            'Умею писать docker-compose.yml, настраивать связь и порты между контейнерами.',
          imgSrc: '/skills/docker-compose-logo.svg',
          url: 'https://docs.docker.com/compose/',
        },
        {
          id: 'dbeaver',
          name: 'DBeaver',
          imgSrc: '/skills/dbeaver-logo.svg',
          url: 'https://dbeaver.io/',
        },
        {
          id: 'postman',
          name: 'Postman',
          imgSrc: '/skills/postman-logo.svg',
          url: 'https://www.postman.com/',
        },
        {
          id: 'gcc',
          name: 'GCC',
          imgSrc: '/skills/gcc-logo.svg',
          url: 'https://gcc.gnu.org/',
        },
        {
          id: 'make',
          name: 'Make',
          description: 'Умею писать Makefile, который соберёт файлы проекта в исполняемый файл, либо отдельную библиотеку.',
          url: 'https://www.gnu.org/software/make/',
        },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      skills: [
        {
          id: 'python',
          name: 'Python 3',
          description:
            'Я знаю базовый синтаксис (переменные, условия, циклы, функции, простые типы данных), сложные типы данных (list, tuple, set, dict), рекурсию, базовый ООП, умею создавать, вызывать (raise) и обрабатывать (try, except, else, finally) исключения, типизировать переменные и функции, работать с асинхронностью.',
          imgSrc: '/skills/python-logo.svg',
          url: 'https://www.python.org/',
        },
        {
          id: 'fastapi',
          name: 'FastAPI',
          description:
            'Умею создавать асинхронное приложение, настраивать кастомный сериализатор json и сжатие ответа с сервера, создавать эндпоинты на разные типы запросов.\n\nЕсли ссылка в логотипе не работает (сайт может блокировать определённые подключения) и необходимости в использовании официального сайта нет, можете посмотреть сторонние ресурсы о FastAPI.',
          imgSrc: '/skills/fastapi-logo.svg',
          url: 'https://fastapi.tiangolo.com/',
        },
        {
          id: 'pydantic',
          name: 'Pydantic',
          description:
            'Умею создавать классы типов, со встроенными и кастомными валидаторами. Также умею создавать класс с настройками при помощи pydantic_settings.',
          imgSrc: '/skills/pydantic-logo.svg',
          url: 'https://docs.pydantic.dev/latest/',
        },
        {
          id: 'pip',
          name: 'Pip',
          description: 'Умею управлять зависимостями и замораживать их.',
          imgSrc: '/skills/pip-logo.svg',
          url: 'https://pypi.org/project/pip/',
        },
        {
          id: 'poetry',
          name: 'Poetry',
          description: 'Умею настраивать проект и его зависимости.',
          imgSrc: '/skills/poetry-logo.svg',
          url: 'https://python-poetry.org/',
        },
        {
          id: 'postgres',
          name: 'Postgres',
          imgSrc: '/skills/postgresql-logo.svg',
          url: 'https://www.postgresql.org/',
        },
        {
          id: 'sqlalchemy',
          name: 'SQLAlchemy',
          description:
            'Я умею подключаться к базе данных, отправлять туда запросы. Умею делать атомарные запросы ии выполнять поиск в базе данных.',
          imgSrc: '/skills/sqlalchemy-logo.svg',
          url: 'https://www.sqlalchemy.org/',
        },
        {
          id: 'redis',
          name: 'Redis',
          description:
            'Умею сохранять, получать и сохранять данные в базе данных. Использую для кеширования данных.\n\nЕсли ссылка в логотипе не работает (сайт может блокировать определённые подключения) и необходимости в использовании официального сайта нет, можете посмотреть сторонние ресурсы о Redis.',
          imgSrc: '/skills/redis-logo.svg',
          url: 'https://redis.io/',
        },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      skills: [
        {
          id: 'html',
          name: 'HTML 5',
          description:
            'Знаю отличия между строчными и блочными элементами. Знаю большое количество HTML элементов и их атрибуты.',
          imgSrc: '/skills/html-logo.svg',
          url: 'https://developer.mozilla.org/ru/docs/Web/HTML',
        },
        {
          id: 'css',
          name: 'CSS 3',
          description:
            'Умею стилизировать строчные и блочные элементы, работать с flex и grid, делать медиа-запросы, настраивать шрифты.',
          imgSrc: '/skills/css-logo.svg',
          url: 'https://developer.mozilla.org/ru/docs/Web/CSS',
        },
        {
          id: 'scss',
          name: 'SCSS',
          description: 'Умею писать стили с вложенностями и наследовательностью, знаю как работают mixins и как подключать стили из отдельных файлов.',
          imgSrc: '/skills/scss-logo.svg',
          url: 'https://sass-lang.com/',
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          description:
            'Знаю базовый синтаксис (переменные, условия, циклы, функции, стрелочные функции, простые типы данных), сложные типы данных (Array, Object), как работать с асинхронностью.',
          imgSrc: '/skills/javascript-logo.svg',
          url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          description:
            'Умею типизировать переменные, функции, объекты, использовать литеральные типы, кастовать типы. Знаю разницу между type и interface. Знаю некоторые утилитарные типы (Partial, Required, Readonly, Pick, Omit, ReturnType).',
          imgSrc: '/skills/typescript-logo.svg',
          url: 'https://www.typescriptlang.org/',
        },
      ],
    },
    {
      id: 'microcontrollers',
      name: 'Микроконтроллеры',
      skills: [
        {
          id: 'arduino',
          name: 'Arduino',
          description: 'Arduino Nano, Arduino Uno',
          imgSrc: '/skills/arduino-logo.svg',
          url: 'https://www.arduino.cc/',
        },
        {
          id: 'esp',
          name: 'ESP',
          description: 'ESP 32, ESP 8266',
          imgSrc: '/skills/esp-logo.svg',
          url: 'https://www.espressif.com/en/',
        },
      ],
    },
    {
      id: 'other',
      name: 'Другие',
      skills: [
        {
          id: 'c',
          name: 'C',
          description: 'Знаю базовый синтаксис (переменные, условия, циклы, функции), типы данных, массивы, указатели, ссылки, структуры (struct), перечисления (enum), объединения (unions), битовые поля. Умею работать с аллокатором памяти.',
          imgSrc: '/skills/c-logo.svg',
          url: 'https://www.c-language.org/',
        },
        {
          id: 'cpp',
          name: 'C++',
          description: 'Знаю базовый синтаксис (переменные, условия, циклы, функции), типы данных, структуры (struct), перечисления (enum), объединения (unions), битовые поля, ООП (с шаблонами). Частично знаю STL (стандартную библиотеку шаблонов). Умею работать с аллокатором памяти.\n\nЕсли ссылка в логотипе не работает (сайт может блокировать определённые подключения) и необходимости в использовании официального сайта нет, можете посмотреть сторонние ресурсы о С++.',
          imgSrc: '/skills/cpp-logo.svg',
          url: 'https://isocpp.org/',
        },
      ],
    },
  ];

  constructor() {}

  getSkills(): SkillsSection[] {
    return [...this.skills];
  }

  getSkillById(id: string): SkillsSection | undefined {
    return this.skills.find((skill) => skill.id === id);
  }

  /**
   * Возвращает навыки по массиву ID
   * @param ids - Массив ID навыков
   * @returns {Skill[]} Массив найденных навыков
   */
  getSkillsByIds(ids: string[]): SkillsSection[] {
    return this.skills.filter((skill) => ids.includes(skill.id));
  }
}
