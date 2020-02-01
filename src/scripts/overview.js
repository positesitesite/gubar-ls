import Vue from "vue"

const controls = {
  template: '#comments-controls'
}

const commentsBlock = {
  template: '#comments-blockline',
  // Создаем дату и кладем туда массив
  // Теперь экземпляр имеет пустой массив comments
  // К нему можно обратиться через this.comments
  data () {
    return {
      comments: [],
      screenSize: 2,
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      // Создаем новый массив (fn - .map) с результатом вызова указанной функции для
      // каждого элемента массива
      return data.map(item => {
        // В переменную записываем путь обработанный Node.js
        // так как Webpack будет использовать именно этот хэшированный путь
        // на стадии build
        const requiredPic = require(`../images/content/${item.photo}`);
        // Заменяем стандартный путь для data.photo (comments.json)
        // тем, что был обработан и хэширован при помощи Webpack
        item.photo = requiredPic;
        // Возвращаем массив с подменянным путем к изображениям (arr.photo)
        return item;
      })
    }
  },
  created() {
    // Получаем доступ к данным для будущего использования в компонентах
    const data = require('../data/comments.json');
    // Используем вышеописанный метод для подмены путей к изображения
    // в массиве comments
    this.comments = this.makeArrWithRequiredImages(data);
    function count(value) {
      this.screenSize = window.innerWidth;
      console.log('test')
      if(this.screenSize > 768) {
        return this.screenSize = 2;
      } else {
        this.screenSize = 1;
      }
    }
    count(this.screenSize)
  }
}

const formBlock  = {
  template: '#contact-form'
}

new Vue({
  el: '#overview',
  template: '#overview-section',
  components: {
    controls, commentsBlock, formBlock
  }
})