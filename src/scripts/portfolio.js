import Vue from 'vue';

const list = {
  template: '#slider-list',
  props: ['portfolio', 'currentWork']
};

const controls = {
  template: '#slider-controls',
  props: ['currentWork'],
};

const description = {
  template: '#slider-description',
  props: ['portfolio', 'currentWork', 'tags'],
};

const preview = {
  template: '#slider-preview',
  components: {
    list, controls, description
  },
  methods: {
    handleSlide(direction) {
      console.log(direction)
    }
  },
  props: ['portfolio', 'currentWork', 'tags', 'work']
};

new Vue({
  el: '#portfolio',
  template: '#portfolio-section',
  components: {
    preview
  },
  data() {
    return { 
      portfolio: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.portfolio[this.currentIndex]
    },
    tags() {
      return this.portfolio[this.currentIndex].skills.split(', ');
    }
  },
  methods: {
    // Initialize with webpack to get hashed image's path
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item;
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    },
    handleItem(ndx) {
      this.currentIndex = ndx - 1;
    },
    makeInfiniteLoopForIndex(value) {
      const worksAmountComputerCounted = this.portfolio.length - 1;

      if (value > worksAmountComputerCounted) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmountComputerCounted;
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value)
    }
  },
  created() {
    const data = require('../data/portfolio.json');
    this.portfolio = this.makeArrWithRequiredImages(data);
  }
});