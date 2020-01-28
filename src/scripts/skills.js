import Vue from 'vue';

// Adaptive image for mobile screens
const skillsMobileBg = {
  template: '#skills-mobileimg'
}

const skillsCircle = {
  template: '#skills-circle',
  props: [
    'skillPercent'
  ],
  methods: {
    drawProgressCircle() {
      const circle = this.$refs['circle-id'];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );

      const percent = (dashArray / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawProgressCircle();
  }
}

// Exact item
const skillsItem = {
  template: '#skills-item',
  props: [
    'skill',
  ],
  components: {
    skillsCircle
  }
}

// Contains lines
const skillsBlock = {
  template: '#skills-block',
  components: {
    skillsItem
  },
  data() {
    return {
      skills: []
    };
  },
  created() {
    const data = require('../data/skills.json')
    this.skills = data;
  }
}

// Vue main object
new Vue({
  el: '#skills',
  template: '#skills-section',
  components: {
    skillsBlock
  }
})