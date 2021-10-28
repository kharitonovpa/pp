export default {
  props: {
    tag: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
  },
  computed: {
    tagName() {
      if (this.to) {
        return 'NuxtLink';
      } else if (this.href) {
        return 'a';
      } else if (this.tag) {
        return this.tag;
      } else {
        return 'div';
      }
    },
    attrs() {
      return {
        is: this.tagName,
        href: this.href,
        to: this.to,
        target: this.target,
      };
    },
  },
};
