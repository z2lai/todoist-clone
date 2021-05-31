class TechFeatures {
  constructor(iconListID, featureListID) {
    this.iconList = document.getElementById(iconListID);
    this.featureList = document.getElementById(featureListID);
    this.features = this.featureList
      ? Array.from(this.featureList.getElementsByClassName('js-feature'))
      : null;
    this.highlightedTech = '';
    this.events();
  }

  events() {
    this.iconList.addEventListener(
      'mouseover',
      this.setHighlightedTech.bind(this)
    );
    this.iconList.addEventListener(
      'mouseleave',
      this.resetHighlightedTech.bind(this)
    );
  }

  setHighlightedTech(event) {
    const highlightedTech = event.target.dataset.tech || '';
    if (highlightedTech === this.highlightedTech) return;

    this.highlightedTech = highlightedTech;
    if (this.features.length > 0) this.updateFeatures();
  }

  resetHighlightedTech(event) {
    this.highlightedTech = '';
    this.resetFeatures();
  }

  updateFeatures() {
    this.resetFeatures();
    if (!this.highlightedTech) return;

    const activeClassName = `js-feature--${this.highlightedTech}`;
    this.features.forEach((feature) => {
      if (feature.classList.contains(activeClassName))
        feature.classList.add('is-active');
      else feature.classList.add('is-inactive');
    });
  }

  resetFeatures() {
    this.features.forEach((feature) =>
      feature.classList.remove('is-active', 'is-inactive')
    );
  }
}

export default TechFeatures;
